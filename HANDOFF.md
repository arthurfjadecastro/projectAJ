# Passagem de responsabilidade

- Atualizado em: 2026-09-14T22:25:53-03:00
- Tarefa: AI-002 — Avaliar projetos open source como apoio às perguntas do AJ e retomar o roteiro CBL.
- Status: IN_PROGRESS. Claude Code (Claude Opus 5) aguarda decisões de Arthur; nenhum arquivo em edição ativa.
- Histórico: Codex entregou AI-001 (READY_FOR_REVIEW); GitHub Copilot abriu AI-002 e foi interrompido; Arthur transferiu AI-002 ao Claude Code.

## Ponto exato

Avaliação, roteiro e spec rascunho concluídos. Faltam as escolhas de Arthur, apresentadas no fim da sessão: (1) rota até o campo; (2) aprovação da spec e dos seis tickets do kit de instrumentos; (3) autorização para instalar o SkillSpector em modo estático e escanear `.agents/skills/`; (4) visibilidade do repositório e o que publicar (AI-003).

## Concluído

- docs/research/projetos-open-source.md: 15 projetos com fonte primária, licença, maturidade, esforço, riscos e veredito. SkillSpector "usar agora" (depende de autorização); anydoc "testar quando houver campo"; seis adiados; sete descartados.
- docs/cbl/README.md: respostas de DEC-005, mapa "temos / hipótese / falta", caminho em seis passos, rotas possíveis até o campo e regra sobre ferramentas.
- .scratch/kit-instrumentos/spec.md: spec rascunho (needs-triage) do kit de instrumentos, AI-004 NOT_STARTED no BACKLOG.
- README.md e docs/research/README.md: trechos desatualizados sobre destino e marco corrigidos. CHANGELOG e WORKLOG atualizados.

## Validações

UTF-8 sem BOM, LF e links locais conferidos por script nos arquivos alterados; 13 testes de `tests/ai_kit` aprovados; `bootstrap.py validate .` executado após esta passagem. Nada instalado, clonado ou executado dos projetos avaliados.

## Pendências e próxima ação

1. Registrar em DECISIONS as escolhas de Arthur (DEC-006 em diante) com fonte e impacto.
2. Se a spec for aprovada: publicar os tickets em `.scratch/kit-instrumentos/issues/` conforme a skill to-tickets, mudar a spec para ready-for-agent e colocar AI-004 como autorizada. Depois, fechar AI-002 em READY_FOR_REVIEW.
3. Se o SkillSpector for autorizado: instalar em ambiente isolado, rodar `--no-llm` sobre `.agents/skills/` e registrar o relatório como triagem.
4. AI-003 continua dependente da visibilidade; nenhum commit ou push foi feito.

Limites: sem empresa, processo, dados ou baseline; a avaliação é analítica. Não verificados: releitura de estrelas/datas, licença do dataset do PhoneHarness, suporte pt-BR do no-ai-slop, benchmarks declarados pelos projetos.

## Arquivos de entrada

README.md, DECISIONS.md, CURRENT_STATE.md, BACKLOG.md, este HANDOFF e as duas últimas entradas de WORKLOG.md; depois AGENTS e adaptador do cliente. Para esta tarefa: docs/cbl/README.md, docs/research/projetos-open-source.md e .scratch/kit-instrumentos/spec.md.
