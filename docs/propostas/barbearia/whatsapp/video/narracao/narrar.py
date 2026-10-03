"""Gera a narração do vídeo com Chatterbox, localmente (DEC-013).

Cada trecho de narração é gerado separadamente e colocado no instante em que
a legenda correspondente aparece, numa faixa do tamanho da cena. O script
avisa quando a fala passa do tempo da legenda.

Uso (dentro de narracao/, com o ambiente ativo):
    python narrar.py --cenas 2 --nome ptbr-padrao
    python narrar.py --cenas 2 --nome ptbr-calma --exaggeration 0.35 --cfg 0.3
"""
import argparse
import json
import re
from pathlib import Path

import torch
import torchaudio as ta
from chatterbox.mtl_tts import ChatterboxMultilingualTTS

PASTA_VIDEO = Path(__file__).resolve().parent.parent
MODELOS = ["ptbr", "multi"]
# Ajustes de pronúncia, se algum termo soar mal. Preferir reescrever a fala (campo "fala"
# em cenas.json): siglas, palavras estrangeiras e algarismos ficam fora da narração (DEC-014).
PRONUNCIA = {}


def carregar_ptbr(device):
    """Variante brasileira (V3). O pacote 0.1.7 ainda não sabe carregá-la sozinho:
    combina os pesos de ResembleAI/Chatterbox-Multilingual-pt-br com a voz padrão,
    o codificador de voz e as condições do repositório principal."""
    from huggingface_hub import hf_hub_download
    from safetensors.torch import load_file
    from chatterbox.mtl_tts import Conditionals
    from chatterbox.models.s3gen import S3Gen
    from chatterbox.models.t3 import T3
    from chatterbox.models.t3.modules.t3_config import T3Config
    from chatterbox.models.tokenizers import MTLTokenizer
    from chatterbox.models.voice_encoder import VoiceEncoder

    def principal(arquivo):
        return hf_hub_download("ResembleAI/chatterbox", arquivo)

    def ptbr(arquivo):
        return hf_hub_download("ResembleAI/Chatterbox-Multilingual-pt-br", arquivo)

    mapa = torch.device("cpu") if device in ("cpu", "mps") else None
    ve = VoiceEncoder()
    ve.load_state_dict(torch.load(principal("ve.pt"), map_location=mapa, weights_only=True))
    ve.to(device).eval()
    t3 = T3(T3Config.multilingual())
    estado = load_file(ptbr("t3_pt_br.safetensors"))
    if "model" in estado:
        estado = estado["model"][0]
    t3.load_state_dict(estado)
    t3.to(device).eval()
    s3gen = S3Gen()
    try:
        s3gen.load_state_dict(load_file(ptbr("s3gen_v3.safetensors")))
    except RuntimeError:
        # O decodificador V3 ainda não encaixa na arquitetura do pacote instalado;
        # usa o decodificador do repositório principal, o mesmo do multilíngue v3.
        print("Aviso: s3gen_v3 incompatível com este pacote; usando o decodificador principal.")
        s3gen = S3Gen()
        s3gen.load_state_dict(torch.load(principal("s3gen.pt"), map_location=mapa, weights_only=True))
    s3gen.to(device).eval()
    tokenizer = MTLTokenizer(ptbr("grapheme_mtl_merged_expanded_v1.json"))
    conds = Conditionals.load(principal("conds.pt"), map_location=mapa).to(device)
    return ChatterboxMultilingualTTS(t3, s3gen, ve, tokenizer, device, conds=conds)


def carregar():
    config = json.loads((PASTA_VIDEO / "config.json").read_text(encoding="utf-8"))
    roteiro = json.loads((PASTA_VIDEO / "cenas.json").read_text(encoding="utf-8"))
    return config, roteiro["cenas"], roteiro.get("voz", {})


def preencher(texto, config):
    return re.sub(r"\{(\w+)\}", lambda m: config.get(m.group(1), m.group(0)), texto)


def falado(texto):
    for padrao, troca in PRONUNCIA.items():
        texto = re.sub(padrao, troca, texto)
    return texto


def trechos(cena):
    """(início, fim, texto) de cada trecho narrado, em segundos dentro da cena."""
    fim_cena = cena["duracao_s"]
    if cena["legendas"]:
        return [(l["de"], l["ate"], l.get("fala", l["texto"])) for l in cena["legendas"]]
    if cena["tipo"] == "frase":
        linhas = cena["linhas"]
        return [(l["de"], linhas[i + 1]["de"] if i + 1 < len(linhas) else fim_cena, l.get("fala", l["texto"])) for i, l in enumerate(linhas)]
    if cena["tipo"] == "perguntas":
        itens = cena["itens"]
        lista = [(0.3, itens[0]["de"], cena.get("titulo_fala", cena["titulo"]))]
        for i, item in enumerate(itens):
            fim = itens[i + 1]["de"] if i + 1 < len(itens) else fim_cena
            lista.append((item["de"], fim, item.get("fala", f'{item["titulo"]} {item["texto"]}')))
        return lista
    return []


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--cenas", default="todas", help="números das cenas separados por vírgula, ou 'todas'")
    ap.add_argument("--nome", default="narracao", help="subpasta de saida/narracao/")
    ap.add_argument("--modelo", choices=MODELOS, help="padrão: bloco 'voz' de cenas.json")
    ap.add_argument("--exaggeration", type=float, help="ênfase; padrão: bloco 'voz' de cenas.json")
    ap.add_argument("--cfg", type=float, help="ritmo; padrão: bloco 'voz' de cenas.json")
    ap.add_argument("--voz", help="arquivo de áudio de referência (só com direito de uso)")
    ap.add_argument("--semente", type=int, default=42)
    args = ap.parse_args()

    config, cenas, voz = carregar()
    args.modelo = args.modelo or voz.get("modelo", "ptbr")
    args.exaggeration = voz.get("exaggeration", 0.5) if args.exaggeration is None else args.exaggeration
    args.cfg = voz.get("cfg", 0.5) if args.cfg is None else args.cfg
    escolhidas = range(len(cenas)) if args.cenas == "todas" else [int(n) for n in args.cenas.split(",")]
    device = "cuda" if torch.cuda.is_available() else "mps" if torch.backends.mps.is_available() else "cpu"
    modelo = carregar_ptbr(device) if args.modelo == "ptbr" else ChatterboxMultilingualTTS.from_pretrained(device=device, t3_model="v3")
    saida = PASTA_VIDEO / "saida" / "narracao" / args.nome
    saida.mkdir(parents=True, exist_ok=True)
    print(f"Dispositivo: {device} · modelo: {args.modelo} · exaggeration {args.exaggeration} · cfg {args.cfg}")

    faixas = []
    for n in escolhidas:
        cena = cenas[n]
        faixa = torch.zeros(1, int(cena["duracao_s"] * modelo.sr))
        faixas.append(faixa)
        for inicio, fim, texto in trechos(cena):
            torch.manual_seed(args.semente)
            onda = modelo.generate(
                falado(preencher(texto, config)),
                language_id="pt",
                exaggeration=args.exaggeration,
                cfg_weight=args.cfg,
                **({"audio_prompt_path": args.voz} if args.voz else {}),
            )
            duracao = onda.shape[-1] / modelo.sr
            folga = (fim - inicio) - duracao
            aviso = "" if folga >= 0 else f"  << passa {-folga:.1f} s do tempo da legenda"
            print(f"  cena {n} {inicio:5.1f}–{fim:5.1f} s · fala {duracao:4.1f} s{aviso} · {preencher(texto, config)}")
            a = int(inicio * modelo.sr)
            b = min(a + onda.shape[-1], faixa.shape[-1])
            faixa[:, a:b] = onda[:, : b - a].cpu()
        arquivo = saida / f"cena-{n:02d}-{cena['id']}.wav"
        ta.save(str(arquivo), faixa, modelo.sr)
        print(f"  -> {arquivo.relative_to(PASTA_VIDEO)}")

    if len(faixas) == len(cenas):
        completa = saida / "narracao-completa.wav"
        ta.save(str(completa), torch.cat(faixas, dim=-1), modelo.sr)
        print(f"Vídeo inteiro: {completa.relative_to(PASTA_VIDEO)} ({sum(c['duracao_s'] for c in cenas)} s)")


if __name__ == "__main__":
    main()
