# 06: Matriz de rastreabilidade e ensaio de mesa do kit

- Backlog-ID: AI-004
- Spec: [kit de instrumentos](../spec.md)

**What to build:** Arthur vê, numa matriz GQ → instrumento → campo, que toda evidência mínima de GQ-01..GQ-10 tem ao menos um campo e que nenhum campo existe sem GQ. Em seguida o kit é ensaiado sobre um caso descrito nos PDFs, marcado como ensaio, e as lacunas encontradas voltam como correções nos instrumentos antes do primeiro cliente.

**Blocked by:** 02 — Roteiros de conversa e mapa AS-IS; 03 — Protocolo de baseline e planilha de casos; 04 — Inventário de dados, classificação de atividades e checklist de risco; 05 — Matriz de alternativas, ganho/benefício e retrospectiva

**Status:** ready-for-agent

- [ ] A matriz cobre as dez linhas da tabela de Guiding Questions do roteiro CBL, sem lacuna.
- [ ] O ensaio usa um caso dos PDFs com página citada, é rotulado como ensaio em todos os artefatos e não produz nota, baseline ou ganho apresentado como real.
- [ ] Os campos não preenchíveis no ensaio são listados com motivo, e as correções decorrentes estão aplicadas ou registradas.
- [ ] O roteiro CBL passa a apontar para o kit, e `bootstrap.py validate .` continua aprovado.
