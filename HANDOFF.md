# Passagem de responsabilidade

- Atualizado em: 2026-09-15T17:36:29-03:00
- Tarefa: AI-005 — Proposta de diagnóstico e apresentação para a barbearia candidata (READY_FOR_REVIEW). Também entregue nesta sessão: AI-004 — Kit de instrumentos de investigação (READY_FOR_REVIEW).
- Status: Claude Code encerrou a edição; arquivos liberados.
- Histórico: Codex retomou em 15/09 (DEC-009/010, tickets 01, 02 e 04) e atingiu o limite de uso; Arthur transferiu ao Claude Code, que concluiu os tickets 03, 05 e 06, as correções CR-06 a CR-09 e a apresentação.

## Ponto exato

Apresentação e roteiro prontos para revisão de Arthur. O dono da barbearia ainda não foi convidado; nada foi enviado a ele. Não há trabalho em andamento.

## Concluído

- docs/propostas/barbearia/: `apresentacao-diagnostico-barbearia.pptx` (13 slides com notas do apresentador), PDF equivalente, `roteiro-reuniao.md` (checklist, agenda de 30 min, folha de anotação em blocos A–D ligada ao kit, passos pós-reunião) e README.
- docs/cbl/instrumentos/: kit completo (registro de evidência, ficha, exemplo, roteiros e mapa AS-IS, protocolo de baseline, `casos.csv`, dados/atividades/risco, alternativas/ganho/retrospectiva, rastreabilidade e ensaio de mesa).
- `privado/.gitignore`: pasta para dados de participantes, com todo o conteúdo ignorado pelo Git.

## Validações

UTF-8 sem BOM, LF e links locais dos 24 arquivos alterados; 13 testes de `tests/ai_kit` aprovados; `bootstrap.py validate .` aprovado com este HANDOFF; `git check-ignore` confirma `privado/`; revisão visual das 13 prévias da apresentação. A apresentação foi gerada por automação COM do PowerPoint; o script gerador ficou fora do repositório, e edições futuras devem ser feitas direto no PPTX.

## Pendências e próxima ação

1. Arthur revisa a apresentação, troca `[nome da barbearia]` (slide 1) e `[WhatsApp]` / `[e-mail]` (slide 13), e regera o PDF pelo PowerPoint se quiser a versão de reserva atualizada.
2. Reunião com o dono seguindo `roteiro-reuniao.md`. Depois dela: ficha e anotações em `privado/barbearia/`; no repositório, só o fato, a resposta e o próximo passo. Se ele topar, registrar em DECISIONS o aceite, o que foi autorizado e o marco.
3. Aceite de Arthur para AI-001, AI-002, AI-004 e AI-005.

Limites: nenhuma evidência de campo; dores de atendimento, agenda e faltas continuam hipóteses. O ensaio de mesa testa instrumentos, não o Challenge.

## Arquivos de entrada

README.md, DECISIONS.md, CURRENT_STATE.md, BACKLOG.md, este HANDOFF e as duas últimas entradas de WORKLOG.md; depois AGENTS e o adaptador do cliente. Para a barbearia: docs/cbl/barbearia-candidata.md e docs/propostas/barbearia/. Para o kit: docs/cbl/instrumentos/README.md.
