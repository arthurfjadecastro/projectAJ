# 04: Inventário de dados, classificação de atividades e checklist de risco

- Backlog-ID: AI-004
- Spec: [kit de instrumentos](../spec.md)

**What to build:** o consultor inventaria dados, regras e conhecimentos do processo (fonte, responsável, atualização, qualidade, condições de acesso), classifica cada atividade como regra fixa, linguagem, previsão ou julgamento humano, e registra que erros podem ser aceitos, detectados ou revertidos. Sai com a justificativa de onde a IA entra, onde não entra e que supervisão é proporcional ao risco (GQ-05..GQ-07).

**Blocked by:** 01 — Registro de evidência e ficha do processo candidato

**Status:** ready-for-agent

- [ ] O inventário cobre a evidência mínima de GQ-05 e marca dados pessoais e sensíveis para análise LGPD.
- [ ] A classificação de atividades usa as quatro categorias e exige justificativa por atividade (GQ-06).
- [ ] O checklist de risco registra, por tipo de erro, aceitabilidade, forma de detecção, reversibilidade e escalonamento (GQ-07).
- [ ] O instrumento indica como apoio opcional a conversão local de documentos, com OCR hospedado desligado sem acordo sobre dados, conforme `docs/research/projetos-open-source.md`; nenhum campo depende da ferramenta.
- [ ] O resultado alimenta os requisitos eliminatórios "dados acessíveis" e "risco controlável" da ficha.
