# Passagem de responsabilidade

- Atualizado em: 2026-10-02T22:37:57-03:00
- Tarefa: AI-007 — Vídeo explicativo do atendente para o dono da barbearia (READY_FOR_REVIEW).
- Status: Claude Code encerrou a edição; arquivos liberados.

## Ponto exato

Narração completa de 148,5 s gerada com a voz B, sem "IA" e em frases curtas (DEC-014). Aguardando Arthur ouvir e aprovar o roteiro antes da renderização final. Nada do vídeo completo foi renderizado.

## Concluído

- `video/cenas.json`: falas em frases curtas, campos `fala` e `titulo_fala`, bloco `voz` com a voz B, tempos de 148,5 s.
- `video/narracao/narrar.py`: usa o texto falado, a voz padrão de `cenas.json` e monta `narracao-completa.wav`.
- `video/scripts/verificar.mjs`: zero "IA" e fala sem algarismos, "WhatsApp", siglas ou nome da barbearia.
- `video/roteiro.md` e `prompt-video.md` atualizados conforme a DEC-014.
- Só nesta máquina: `video/saida/narracao/voz-b/` (11 cenas e o áudio completo).

## Validações

`npm run verificar` aprovado; `tsc` sem erros; todas as falas cabem nas legendas; volume médio -20,6 dB e pico 0,0 dB; amostras de imagem regeneradas.

## Pendências e próxima ação

1. Arthur ouve a narração completa e aprova o roteiro. Ajustes de fala: editar `cenas.json` (campo `fala` ou texto da legenda), rodar `npm run verificar` e `narrar.py --nome voz-b`.
2. Renderização final: `<Audio>` de `@remotion/media` por cena com os WAVs de `voz-b`, normalização de volume (por exemplo, `loudnorm` do ffmpeg), `npm run render` com versão até 16 MB e versão alta, `legendas.srt` a partir de `cenas.json`, `capa.png`, `saida/frames/` e o checklist do prompt item por item.
3. A variante `ptbr` usa o decodificador principal porque o `s3gen_v3` não encaixa no pacote; reavaliar quando o Chatterbox publicar suporte oficial.
4. Seguem pendentes: Q1–Q12 do catálogo (AI-006) e o registro da reunião com o dono (AI-005).

## Arquivos de entrada

README.md, DECISIONS.md, CURRENT_STATE.md, BACKLOG.md, este HANDOFF e as duas últimas entradas de WORKLOG.md; depois AGENTS e o adaptador do cliente. Para esta tarefa: docs/propostas/barbearia/whatsapp/video/README.md e roteiro.md.
