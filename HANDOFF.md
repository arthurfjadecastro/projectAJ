# Passagem de responsabilidade

- Atualizado em: 2026-10-02T22:21:23-03:00
- Tarefa: AI-007 — Vídeo explicativo do atendente para o dono da barbearia (READY_FOR_REVIEW).
- Status: Claude Code encerrou a edição; arquivos liberados.

## Ponto exato

Etapa 1 entregue e três amostras de voz da cena 2 geradas com Chatterbox local (DEC-013). Aguardando Arthur aprovar o roteiro e as amostras visuais e escolher a voz. Nada do vídeo completo foi renderizado.

## Concluído

- `video/`: roteiro, `config.json`, `cenas.json`, projeto Remotion, `npm run verificar`, `npm run amostras` e amostras visuais das cenas 2, 5 e 9.
- `video/narracao/`: `requirements.txt` (Python 3.11, torch 2.6.0 CUDA 12.4, chatterbox e Perth fixados em commits do GitHub, `setuptools<81`) e `narrar.py`, que gera e posiciona cada fala no tempo da legenda.
- Amostras de voz, só nesta máquina (fora do Git): `video/saida/narracao/ptbr-padrao`, `ptbr-calma` e `multi-padrao`.

## Validações

As três amostras cabem nas legendas e têm volume normal (`ffmpeg volumedetect`); CUDA ativo na RTX 3060 Ti. O agente não avaliou a qualidade das vozes, porque não ouve áudio.

## Pendências e próxima ação

1. Arthur escolhe a voz e aprova o roteiro.
2. Etapa 2: `narrar.py --nome final --modelo <escolhido>` para as 11 cenas; corrigir trechos que passarem do tempo; ligar o áudio ao Remotion (`<Audio>` de `@remotion/media` por cena), normalizar volume, criar `npm run render` (versão até 16 MB e versão alta), `legendas.srt`, `capa.png` e `saida/frames/`; conferir o checklist do prompt item por item.
3. A variante `ptbr` usa o decodificador principal porque o `s3gen_v3` não encaixa no pacote; reavaliar quando o Chatterbox publicar suporte oficial.
4. Seguem pendentes: Q1–Q12 do catálogo (AI-006) e o registro da reunião com o dono (AI-005).

## Arquivos de entrada

README.md, DECISIONS.md, CURRENT_STATE.md, BACKLOG.md, este HANDOFF e as duas últimas entradas de WORKLOG.md; depois AGENTS e o adaptador do cliente. Para esta tarefa: docs/propostas/barbearia/whatsapp/video/README.md e roteiro.md.
