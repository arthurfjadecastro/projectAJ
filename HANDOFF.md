# Passagem de responsabilidade

- Atualizado em: 2026-10-02T21:53:31-03:00
- Tarefa: AI-007 — Vídeo explicativo do atendente para o dono da barbearia (READY_FOR_REVIEW; etapa 1 entregue).
- Status: Claude Code encerrou a edição; arquivos liberados.

## Ponto exato

Etapa 1 do prompt concluída e parada para aprovação de Arthur, como o próprio prompt exige. Nada do vídeo completo foi renderizado.

## Concluído

- `docs/propostas/barbearia/whatsapp/prompt-video.md`: prompt de Arthur corrigido (original no commit `b6b42ee`).
- `docs/propostas/barbearia/whatsapp/video/`: `roteiro.md` (145 s, 11 cenas, mais a mensagem de acompanhamento com as 5 perguntas completas), `config.json`, `cenas.json`, projeto Remotion (`src/`), `scripts/verificar.mjs`, `scripts/amostras.mjs`, README e amostras das cenas 2, 5 e 9 em `saida/amostras/`.

## Validações

`npm run verificar` aprovado (duração, leitura, "IA" uma vez, sem códigos internos, nomes preenchidos); `npx tsc` sem erros; amostras revisadas visualmente; UTF-8 e LF nos arquivos do projeto; `bootstrap.py validate .` e 13 testes de `tests/ai_kit`.

## Pendências e próxima ação

1. Arthur aprova ou ajusta o roteiro e as amostras.
2. Etapa 2: escolher a narração (voz sintética PT-BR; se não houver uma boa, trilha livre de direitos e aviso); criar `npm run render` com versão até 16 MB e versão alta, gerar `legendas.srt` a partir de `cenas.json`, `capa.png` e `saida/frames/`; conferir o checklist do prompt item por item. `video_alta.mp4` e `frames/` ficam fora do Git.
3. Retomar o projeto em outra máquina exige `npm i` dentro da pasta do vídeo.
4. Seguem pendentes: as questões Q1–Q12 do catálogo (AI-006) e o registro da reunião com o dono (AI-005).

## Arquivos de entrada

README.md, DECISIONS.md, CURRENT_STATE.md, BACKLOG.md, este HANDOFF e as duas últimas entradas de WORKLOG.md; depois AGENTS e o adaptador do cliente. Para esta tarefa: docs/propostas/barbearia/whatsapp/prompt-video.md e video/.
