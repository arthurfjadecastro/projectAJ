# Passagem de responsabilidade

- Atualizado em: 2026-10-02T23:14:39-03:00
- Tarefa: AI-007 — Vídeo explicativo do atendente para o dono da barbearia (READY_FOR_REVIEW).
- Status: Claude Code encerrou a edição; arquivos liberados.

## Ponto exato

Vídeo final pronto em `docs/propostas/barbearia/whatsapp/video/saida/video_whatsapp.mp4`. Aguarda Arthur assistir no celular e aceitar. Nada foi enviado ao dono.

## Concluído

- `video_whatsapp.mp4`: 148,5 s, 1080×1920, H.264 Main yuv420p faixa tv, AAC 48 kHz, faststart, 4,9 MB. `legendas.srt` (34 blocos) e `capa.png` (cena 2) no Git; `video_alta.mp4` e `saida/frames/` só nesta máquina.
- `npm run audio` (`scripts/preparar-audio.mjs`): normaliza a narração para -16 LUFS e corta uma faixa por cena em `public/narracao/` (versionada).
- `npm run render` (`scripts/render.mjs`): verificador, versão alta, versão para WhatsApp (CRF 21 com teto; duas passadas se passar de 15 MB), `.srt`, capa e frames. `--reaproveitar` refaz as saídas sem nova renderização.
- Primeiro quadro com conteúdo para a miniatura; esmaecimento no topo do chat; plural do contador corrigido.

## Validações

Checklist do prompt conferido item por item no WORKLOG. Não verificado pelo agente: assistir com som num celular real e a compreensão sem som por um leigo.

## Pendências e próxima ação

1. Arthur assiste e aceita ou pede ajustes. Mudança de texto na tela: editar `cenas.json` e `npm run render`. Mudança de fala: editar `cenas.json`, `narracao/narrar.py --nome voz-b` (ambiente em `video/narracao/.venv`), `npm run audio` e `npm run render`.
2. Para personalizar: trocar BARBEARIA e DONO em `config.json` e `npm run render`; o nome do cliente (Pedro) é falado na cena 4.
3. Enviar ao dono é decisão e ação de Arthur, com a mensagem de acompanhamento do `roteiro.md`.
4. Seguem pendentes: Q1–Q12 do catálogo (AI-006) e o registro da reunião com o dono (AI-005).

## Arquivos de entrada

README.md, DECISIONS.md, CURRENT_STATE.md, BACKLOG.md, este HANDOFF e as duas últimas entradas de WORKLOG.md; depois AGENTS e o adaptador do cliente. Para esta tarefa: docs/propostas/barbearia/whatsapp/video/README.md e roteiro.md.
