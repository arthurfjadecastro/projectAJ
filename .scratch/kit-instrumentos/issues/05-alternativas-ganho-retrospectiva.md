# 05: Matriz de alternativas, ganho/benefício e retrospectiva

- Backlog-ID: AI-004
- Spec: [kit de instrumentos](../spec.md)

**What to build:** o consultor compara, nos mesmos casos, o processo atual, uma solução sem IA e as alternativas com IA, pelos mesmos critérios (qualidade, tempo, esforço de integração, custo operacional), e escolhe a menor complexidade suficiente (GQ-08). Depois separa ganho observado, custos completos e benefício realizado (GQ-09) e registra numa retrospectiva o núcleo reutilizável, as adaptações e os limites de generalização (GQ-10).

**Blocked by:** 03 — Protocolo de baseline e planilha de casos; 04 — Inventário de dados, classificação de atividades e checklist de risco

**Status:** ready-for-agent

- [ ] A matriz de alternativas inclui obrigatoriamente o processo atual e uma opção sem IA, e usa o baseline do ticket 03 como referência.
- [ ] A matriz exige que a comparação use casos reais do mesmo conjunto; estrelas ou popularidade de ferramentas não são critério.
- [ ] O modelo de ganho/benefício impede apresentar horas poupadas como retorno financeiro e registra quem validou o benefício.
- [ ] A retrospectiva registra núcleo reutilizável, adaptações, evidência existente e limites de generalização, e alimenta o Playbook AJ.
