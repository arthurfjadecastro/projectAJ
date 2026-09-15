# ENSAIO DE MESA: kit aplicado ao caso comercial documental

- GQs alimentadas: GQ-01 a GQ-10, apenas como teste do kit; nenhuma resposta de campo.
- Quando aplicar: antes do primeiro cliente e depois de mudança relevante nos instrumentos.
- Quem responde: consultor, lendo somente a fonte; não há gestor, executor ou responsável pelo aceite.
- O que produz: campos preenchíveis e não preenchíveis com motivo, correções CR-01 a CR-09 e o registro EV-EN01; nenhuma nota, baseline ou ganho.

**Natureza: ENSAIO documental, EN-COMERCIAL, 15/09/2026, versão 1.** Continua o caso EX-COMERCIAL do [exemplo ilustrativo](exemplo-ilustrativo.md) (EV-EX01). Fonte: AJ-F01, **Mapa das dores**, p. 6, 12, 13 e 17–20, na [transcrição](../../research/fontes/mapa-dores.txt), com páginas pelos marcadores da transcrição. Nada abaixo descreve uma empresa; números citados são texto do relatório.

## Aplicação por instrumento

| ID / GQ | Preenchimento de ENSAIO | Fonte |
|---|---|---|
| F1–F11, R1–R5 / GQ-01..10 | Conforme o exemplo ilustrativo; R1–R5 `desconhecido` | EV-EX01 |
| P1–P4 / GQ-01,02,08 | `desconhecido`. A nota 5 × 5 × 5 = 125 para vendas é avaliação analítica do relatório; a ficha só pontua com requisitos atendidos e evidência | p. 12–13 |
| RC1–RC3, RG1–RG9, RE1–RE9 / GQ-01..05 | Não aplicados: não houve conversa. Perguntas preparadas para campo: leads por semana (RG5), quem aprova a proposta (RG4, RG7), quando o CRM é atualizado (RE3) | — |
| M1–M4 / GQ-03 | ET-001 ler conversa → ET-002 consultar produto → ET-003 redigir resposta → ET-004 criar proposta → ET-005 atualizar CRM; papel: vendedor; entradas e saídas apenas nomeadas | p. 6 |
| M5–M8 / GQ-03 | Espera, exceção e transferência `desconhecido`. "CRM fica incompleto" e "follow-up depende do vendedor" são dores documentais, não erros observados | p. 6 |
| M9–M10 / GQ-03 | M9 `documental` em todas as etapas; M10: fluxo inteiro não acompanhado | p. 6 |
| B1–B3 / GQ-04 | BL-EN01-v1, ensaio. Métrica de ensaio, não acordada: tempo até a primeira resposta ao lead (início: chegada da mensagem; fim: primeira resposta), em minutos corridos, escolhida entre as métricas da p. 19 | p. 19 |
| B4–B8, B11–B12 / GQ-02,04 | `desconhecido`: sem casos, período ou fonte. O trecho "mediana de 3h42, p90 de 17h" (p. 18) ilustra o que um log mostraria; não entra em B8 por não ter empresa, período, amostra nem método | p. 18 |
| B9–B10 / GQ-04,09 | `desconhecido`; nenhuma meta registrada | — |
| C1–C21 / GQ-02,04 | `casos.csv` sem linhas; volume `desconhecido` | — |
| D1 / GQ-05 | DADO-EN01 conversa do canal de mensagens, DADO-EN02 informação de produto, DADO-EN03 CRM; apenas nomeados | p. 6 |
| D8 / GQ-05,07 | `desconhecido`, com indício documental de dados pessoais em conversas com leads, a triar antes de qualquer acesso | p. 6 |
| A1, A3 / GQ-06 | Hipóteses: ET-001 e ET-003 linguagem; ET-002 regra fixa ou busca; ET-004 regra fixa (preço) com julgamento humano (condições); ET-005 regra fixa | p. 6 |
| K1 / GQ-07 | RISCO-EN01, hipótese: proposta com preço ou condição incorreta enviada ao lead. "Risco médio" da p. 19 é classificação do relatório, não K3 | p. 19 |
| X1 / GQ-08 | ALT-00: fluxo da p. 6. ALT-01 sem IA: modelos de resposta, tabela de preços e registro obrigatório no CRM ao enviar a proposta (hipótese do ensaio). ALT-02: "copiloto + automação + CRM", solução "provável" da p. 19, tratada como hipótese de origem documental, pois A5 está `desconhecido`. A p. 17 pede comparação sem IA × copiloto × RAG × automação × agente | p. 6, 17, 19 |
| G1–G8 / GQ-09 | `desconhecido`. A p. 18 confirma a separação do modelo: custo total com licença/API, integração, implementação, monitoramento, revisão humana, manutenção e custo de erros | p. 17–18 |
| T5–T6 / GQ-10 | T5, hipótese: a p. 20 prevê desfechos distintos para pequena empresa (WhatsApp → IA → proposta → aprovação → CRM), média e corporação. T6: este ensaio | p. 20 |

## Campos não preenchíveis e motivo

| Motivo | Campos |
|---|---|
| Sem participante: nenhum gestor, executor ou responsável pelo aceite | F2, F8, R3, RC1–RC3, RG1–RG9, RE1–RE9, B9, D3, A6, K3, K8, X9, G8 |
| Sem casos, logs ou acesso a dados | F5, R1, R2, R4, B4–B8, B11–B12, C1–C21, M5–M8, A2, A4, A5, D2, D4–D9, K2, K4–K7, S1, S3, O1, X2–X8, G1–G7 |
| Regra do kit impede usar a fonte documental como valor | P1–P4 (nota analítica, p. 12); B8 (números ilustrativos, p. 18); B10 (meta só com participante); X9 (solução "provável", p. 19); R5 e S2 (classificação de risco da p. 19 não é controle) |
| Sem ciclo concluído | T1–T4, T7 |

## Correções decorrentes

| ID | Achado no ensaio | Correção | Estado |
|---|---|---|---|
| CR-01 | Conversão, ticket e receita (p. 19) não são tempo; a planilha teria só tempo e desfecho categórico | Colunas `valor_resultado` e `unidade_resultado` (C11–C12) | Aplicada: casos.csv e protocolo-baseline.md |
| CR-02 | Lead sem resposta até o fim do período ficaria sem regra; excluí-lo ou zerá-lo distorceria B8 | Regra de casos `em_aberto` no cálculo de B7 | Aplicada: protocolo-baseline.md |
| CR-03 | Casos de canal de mensagens (p. 6) tendem a ser identificados por telefone | `caso_id` nunca derivado de telefone, nome, e-mail ou número identificável | Aplicada: protocolo-baseline.md |
| CR-04 | A p. 18 define ROI como razão; o modelo teria só a diferença | G7 com (G6 − G4) ÷ G4, somente com valores medidos | Aplicada: alternativas-ganho-retrospectiva.md |
| CR-05 | Solução "provável" (p. 19) e nota 125 (p. 12) poderiam ser lidas como decisão | Solução de documento é hipótese de ALT; nota documental não pontua | Aplicada: alternativas-ganho-retrospectiva.md; a ficha já cobre a nota |
| CR-06 | K1 aceita natureza relatado/observado/hipótese/ensaio, sem `documental`, que existe em E0; o risco da p. 19 ficou sem natureza própria | Incluir `documental` em K1 | Aplicada em 15/09/2026: dados-atividades-risco.md |
| CR-07 | F7 do exemplo omite SQL rate, ticket e receita, também citados na p. 19 | Completar a lista ou indicar que é parcial | Aplicada em 15/09/2026: exemplo-ilustrativo.md |
| CR-08 | Os roteiros não perguntam por casos que ficam sem desfecho, necessários à regra CR-02 | Acrescentar a RE3 ou RE5 pergunta sobre casos abandonados ou sem conclusão | Aplicada em 15/09/2026: roteiros-conversa.md (RE3) |
| CR-09 | Tabela P sem coluna `ID / GQ` (V-01 da [rastreabilidade](rastreabilidade.md)); F5, R1 e R2 não citam os campos B | Cabeçalho `ID / GQ`; citar B7/B11 em F5 e R2 e B2–B8 em R1 | Aplicada em 15/09/2026: ficha-processo.md |

## Resultado do ensaio

Todo campo do kit tem lugar para registrar evidência ou lacuna. Com fonte documental, o ensaio preencheu apenas definições e hipóteses de GQ-01, 03, 04, 05, 06, 07, 08 e 10; GQ-02 e GQ-09 ficaram inteiramente `desconhecido`. Nenhuma nota, baseline, meta, ganho ou benefício foi produzido. R1–R5 continuam `desconhecido`, e o processo comercial não está selecionado. As correções CR-06 a CR-09 nos instrumentos existentes foram aplicadas em 15/09/2026.

## Registro de evidência EV-EN01

- E0: EV-EN01, GQ-01..10, natureza ensaio documental; sustenta os preenchimentos acima marcados com página.
- E1: AJ-F01, p. 6, 12, 13 e 17–20; recorte da fonte até 01/09/2026; consulta pelo Claude Code em 15/09/2026, America/Sao_Paulo.
- E2: análise documental da transcrição, sem entrevista, observação ou histórico.
- E3: sete páginas como amostra documental; **nenhum caso operacional observado**.
- E4: o relatório descreve sequência comercial genérica, métricas candidatas, solução provável, classificação de risco, separação entre hora poupada e ROI e composição do custo total.
- E5: o material permite exercitar definições e hipóteses em todos os instrumentos; não comprova perda, volume, baseline, adequação de IA nem benefício.
- E6: médio para testar a forma do kit; nenhum para concluir sobre uma operação.
- E7: obter campo e participante; aplicar roteiros, protocolo e inventário; CR-06 a CR-09 aplicadas em 15/09/2026.
