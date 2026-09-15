# Backlog

Status: `[ ] NOT_STARTED`, `[~] IN_PROGRESS`, `[?] BLOCKED`, `[R] READY_FOR_REVIEW`, `[x] DONE`.

## [x] AI-000 — Instalar a base do AIKIT

- Status: DONE
- Autorização: pedido de bootstrap neste diretório em 2026-09-14.
- Aceite: AIKIT 1.1.0 instalado; 25 skills Matt Pocock e continuidade; validação estrutural e de integridade aprovada.
- Evidência: WORKLOG.md.

## [R] AI-001 — Adaptar o AIKIT e iniciar a descoberta CBL do Projeto AJ

- Status: READY_FOR_REVIEW
- Autorização: DEC-002; reutilização do technetalks, leitura dos materiais e início do projeto com CBL da Apple.
- Aceite: instruções dos três clientes; operação Windows/macOS documentada; fontes e síntese dos dois PDFs; roteiro CBL e perguntas; validações registradas.
- Evidência: docs/ai-kit.md, docs/research/README.md, docs/cbl/README.md e WORKLOG.md.
- Pendências de descoberta: respondidas por Arthur em 14/09/2026 e registradas em DEC-005 — não há empresa acessível nem marco vigente dos 60 dias. A consequência para a investigação é tratada em AI-002.
- Limites: publicação depende de destino próprio e autorização; a CI remota e as sessões de cada cliente ainda não foram exercitadas.

## [R] AI-002 — Avaliar projetos open source e retomar o roteiro CBL

- Status: READY_FOR_REVIEW
- Entrega: docs/research/projetos-open-source.md; docs/research/skillspector-triagem-2026-09-14.md; docs/cbl/README.md (mapa "temos / hipótese / falta"); DEC-006..DEC-008; spec e seis tickets de AI-004. Pendente de Arthur: rota até o campo (pediu esclarecimento).
- Responsável atual: Claude Code, desde 2026-09-14T19:47:21-03:00, por transferência de Arthur (antes: GitHub Copilot, interrompido sem entregáveis além de DEC-004/005).
- Autorização: DEC-004 e DEC-005; pedido de Arthur em 14/09/2026 para avaliar viabilidade e pertinência de projetos de terceiros e retomar a metodologia em seguida.
- Projetos candidatos: os 15 listados por Arthur (DeepSeek Harness, Omarchy, PhoneHarness, Herdr, Orca, Claudex Loop, SkillSpector, No AI Slop, AnyDoc, Arkify, Comp AI CRM, OpenMontage, video-use, OmniRoute, Claude of Tanks), com nomes a confirmar na fonte primária.
- Escopo: levantar projetos open source candidatos, avaliar aderência a GQ-01..GQ-10 e complexidade de adoção com fontes primárias; atualizar o roteiro CBL separando evidência, hipótese e lacuna; registrar decisões; criar spec e tickets em `.scratch/`.
- Aceite: documento de avaliação em `docs/research/` com fonte, licença, maturidade e custo de adoção por projeto; roteiro CBL atualizado com o mapa "temos / hipótese / falta"; decisões registradas; spec e tickets derivados apenas do que estiver acordado.
- Dependências: DEC-005 remove o campo real; a avaliação fica em nível de aderência analítica até existir processo, dados e baseline.
- Risco: tratar comparação de ferramentas como validação de solução. Mitigação: a escolha de arquitetura permanece condicionada à evidência de processo, conforme docs/cbl/README.md.
- Evidência: docs/research/, docs/cbl/README.md, WORKLOG.md.

## [x] AI-003 — Publicar o repositório no destino autorizado

- Status: DONE
- Evidência: commit inicial `def62f1ac1d4d6c2d35f6abac21e0964f4356ddb` publicado em `origin/main`; `git ls-remote` conferido igual ao HEAD local em 2026-09-15T00:20:24-03:00.
- Autorização: DEC-004 define o destino `github.com/arthurfjadecastro/projectAJ`; DEC-006 autoriza repositório público com PDFs e transcrições, commit e push.
- Escopo: configurar o remote, commitar, publicar e conferir o SHA remoto.
- Dependências: nenhuma pendente de decisão.
- Risco: exposição de material do cliente em repositório público. Mitigação: confirmar visibilidade antes do primeiro push.

## [R] AI-004 — Kit de instrumentos de investigação

- Status: READY_FOR_REVIEW
- Responsável: Codex desde 2026-09-15T14:37:29-03:00 (tickets 01, 02 e 04); Claude Code desde 2026-09-15T14:50:07-03:00 (tickets 03, 05 e 06 e correções CR-06 a CR-09), após o limite de uso do Codex.
- Entrega: `docs/cbl/instrumentos/` (11 arquivos) com rastreabilidade das 10 GQs e ensaio de mesa documental.
- Autorização: DEC-007 (spec e seis tickets aprovados por Arthur sem alterações); DEC-005 permite produzir instrumentos sem campo.
- Tickets: `.scratch/kit-instrumentos/issues/01..06`; frente inicial: 01.
- Escopo: roteiros, fichas, checklists e planilhas CSV que transformam GQ-01..GQ-10 em instrumentos aplicáveis, com registro de evidência padrão, rastreabilidade e ensaio de mesa.
- Aceite: conforme `.scratch/kit-instrumentos/spec.md`; cada evidência mínima do roteiro CBL coberta por ao menos um campo; ensaio registrado como ensaio, nunca como resultado.
- Dependências: nenhuma para o ticket 01; os demais seguem os bloqueios declarados.
- Risco: tratar o ensaio de mesa como validação. Mitigação: marcação explícita e WORKLOG.

## [R] AI-005 — Proposta de diagnóstico para barbearia candidata

- Status: READY_FOR_REVIEW
- Entrega: `docs/propostas/barbearia/` (apresentação PPTX de 13 slides com notas, PDF, roteiro da reunião e README). Aguarda revisão de Arthur, nome da barbearia e contato; nada foi enviado ao dono.
- Autorização: DEC-009/010; Arthur conhece o dono de uma barbearia MEI e pediu proposta/apresentação para convidá-lo. Escolheu diagnóstico inicial gratuito e implantação negociada depois.
- Escopo: enquadrar a candidata nas Guiding Questions; preparar proposta e apresentação para revisão de Arthur, com participação esperada, entregáveis e próximos passos.
- Aceite: material claro para o dono, sem alegar dores verificadas ou prometer ganho; diagnóstico gratuito separado da eventual implantação; condições ainda não acordadas identificadas como propostas.
- Dependências: nenhuma para produzir o convite; aplicação real depende do aceite do dono, acesso e condições combinadas.
- Risco: apresentar WhatsApp/IA ou prazo de 30 dias como solução ou compromisso definidos. Mitigação: investigar primeiro e negociar implantação após diagnóstico.
- Evidência: docs/cbl/barbearia-candidata.md e docs/propostas/barbearia/.
