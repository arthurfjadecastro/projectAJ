# Vídeo explicativo do atendente da barbearia

AI-007. Vídeo vertical para o dono da barbearia, feito em [Remotion](https://www.remotion.dev/) a partir de dados. Conteúdo em [roteiro.md](roteiro.md); regras no [prompt](../prompt-video.md).

## Arquivos

| Arquivo | Papel |
|---|---|
| `config.json` | Nomes: barbearia, dono, cliente e barbeiro |
| `cenas.json` | Falas, tempos e legendas de cada cena |
| `src/` | Componentes do vídeo (`Video.tsx` monta as cenas em sequência) |
| `scripts/verificar.mjs` | Confere duração, tempo de leitura, "IA" uma vez e ausência de códigos internos |
| `scripts/amostras.mjs` | Renderiza os quadros de amostra da etapa 1 |
| `saida/` | Saídas; `video_alta.mp4` e `frames/` ficam fora do Git |

## Comandos

Requisitos: Node.js 18 ou mais novo e ffmpeg/ffprobe no PATH. Funciona igual no Windows e no macOS.

```sh
npm i                # uma vez
npm run verificar    # regras do prompt
npm run amostras     # quadros das cenas 2, 5 e 9
npm run dev          # pré-visualização no Remotion Studio
npm run audio        # normaliza a narração (-16 LUFS) e corta uma faixa por cena em public/narracao/
npm run render       # vídeo completo e saídas para o WhatsApp
```

`npm run render` roda o verificador e gera:

| Saída | No Git? |
|---|---|
| `saida/video_whatsapp.mp4`: H.264 main + AAC, faststart, abaixo de 15 MB | sim |
| `saida/video_alta.mp4`: CRF 18, para guardar ou publicar em outro lugar | não |
| `saida/legendas.srt`: legendas da tela e, nas cenas sem legenda, o texto falado | sim |
| `saida/capa.png`: miniatura 1080×1920 (cena 2) | sim |
| `saida/frames/`: um quadro por cena, para revisão rápida | não |

A narração já preparada em `public/narracao/` está no Git, então o vídeo pode ser renderizado de novo sem o ambiente do Chatterbox. Só é preciso gerar a narração outra vez quando uma fala mudar: `narracao/narrar.py --nome voz-b` e depois `npm run audio`.

Para trocar o nome da barbearia ou do dono, edite `config.json` e rode `npm run verificar` antes de renderizar: nomes longos podem deixar uma legenda rápida demais. Os nomes da barbearia e do dono não são falados, então trocá-los não exige gerar a narração de novo; o nome do cliente (Pedro) é falado na cena 4.

## Narração (Chatterbox, local)

Voz sintética gerada nesta máquina com o [Chatterbox](https://github.com/resemble-ai/chatterbox) (licença MIT, DEC-013). O áudio sai com a marca d'água imperceptível da Resemble AI. Requisitos: Python 3.11 e, de preferência, placa NVIDIA (no macOS usa MPS). A primeira execução baixa cerca de 6 GB de modelos para o cache do Hugging Face.

```sh
cd narracao
uv venv --python 3.11 .venv
uv pip install --python .venv/bin/python -r requirements.txt --index-strategy unsafe-best-match   # Windows: .venv\Scripts\python.exe
.venv/bin/python narrar.py --cenas 2 --nome ptbr-padrao                                         # uma cena
.venv/bin/python narrar.py --nome final --modelo ptbr                                           # todas as cenas
```

O script gera cada trecho de narração e o posiciona no instante em que a legenda aparece, numa faixa do tamanho da cena, em `saida/narracao/<nome>/`. Ele avisa quando uma fala passa do tempo da legenda. Opções: `--modelo ptbr|multi`, `--exaggeration` (ênfase, padrão 0,5) e `--cfg` (ritmo, padrão 0,5). "IA" é falada como "I.A.". A variante `ptbr` usa o modelo de fala brasileiro com o decodificador do modelo principal, porque o decodificador V3 da variante ainda não encaixa no pacote instalado.

## Licença do Remotion

O Remotion é gratuito para pessoas físicas e empresas de até 3 pessoas. Uma empresa maior precisa de licença: ver <https://www.remotion.pro/license>.
