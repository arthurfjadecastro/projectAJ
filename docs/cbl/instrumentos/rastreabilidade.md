# Rastreabilidade do kit

- GQs alimentadas: GQ-01 a GQ-10, como verificação de cobertura; não produz evidência de campo.
- Quando aplicar: ao revisar o kit, depois de qualquer mudança de campo e antes da primeira aplicação.
- Quem responde: consultor ou revisor do kit; Arthur confere a cobertura.
- O que produz: matriz GQ → evidência mínima → instrumento → campos e verificação inversa campo → GQ.

A evidência mínima reproduz a tabela "Guiding Questions e evidência necessária" do [roteiro CBL](../README.md). Um campo indica onde a evidência será registrada; não indica que ela exista. E0–E7 do [registro de evidência](registro-evidencia.md) e F10 da ficha servem a todas as GQs e não são repetidos abaixo.

Instrumentos: [ficha](ficha-processo.md) (F, R, P), [roteiros e mapa](roteiros-conversa.md) (RC, RG, RE, M), [baseline](protocolo-baseline.md) (B) com [casos.csv](casos.csv) (C), [dados, atividades e risco](dados-atividades-risco.md) (D, A, K, S, O) e [alternativas, ganho e retrospectiva](alternativas-ganho-retrospectiva.md) (X, G, T).

## Matriz GQ → instrumento → campo

| ID / GQ | Evidência mínima (roteiro CBL) | Instrumentos | Campos por elemento da evidência |
|---|---|---|---|
| GQ-01 | Lista de processos, impacto relatado, exemplos reais e fonte | ficha, roteiros, registro | lista de processos: F3, RG1; impacto relatado: F3, RG2, P1; exemplos reais: RG1, RE1; fonte: E1, E4, RC1; recorte e participação: F1, F2, F4, R3, RC2, RC3, RG3, RG4, RG9, RE8, M1, P4 |
| GQ-02 | Volume e variabilidade por período; janela de observação | ficha, roteiros, baseline, casos | volume por período: F5, RG5, B7, C1, C5, C6, C19, C20; variabilidade: B7, RE5, C9; janela: B4, B5, B11, B12, R2; priorização: P2, P3, P4 |
| GQ-03 | Mapa AS-IS com etapas, responsáveis, exceções e transferências | roteiros, ficha, casos, dados | etapas: M1, M3, M4, F4, F6, RE2, C7; responsáveis: M2, RE2; exceções: M7, RE5, A2; transferências: M8; esperas, erros e retrabalho: M5, M6, RE3, RE4, C15, C16; natureza e divergências: M9, M10, RC3, RG3, RG9, RE1, RE8, RE9; apoio: D1, A1, O1, C21 |
| GQ-04 | Definição da métrica, unidade, período, amostra e critério de sucesso acordado | baseline, casos, ficha, roteiros | métrica: B2, F7, RG6, RE7; unidade: B3, C10, C12; período: B4; amostra: B5, E3; método: B6, C8; critério de sucesso acordado: B9, F8, RG7; valor e requisito: B8, B11, R1; meta separada: B10; registro de casos: B1, B12, C1–C4, C9, C11, C13, C14, C17–C21; priorização: P3 |
| GQ-05 | Fonte, responsável, atualização, qualidade e condições de acesso | dados, ficha, roteiros, casos | fonte: D1, D2, C17; responsável: D3; atualização: D4; qualidade: D5; condições de acesso: D6, D7, RC2; dados pessoais e pendências: D8, D9; síntese: S1, S3, R4, F9; perguntas: RG8, RE6; apoio: O1, X5, P3 |
| GQ-06 | Separação das atividades e justificativa da intervenção | dados, ficha | separação: A1, A2, A3; justificativa: A4, A5, A6; síntese: S3, F11; apoio: K1 |
| GQ-07 | Critérios de qualidade, escalonamento e supervisão proporcionais | dados, ficha, baseline, alternativas | critérios de qualidade: K3, B9, C14; detecção e reversão: K4, K5; escalonamento e supervisão: K6; parada e aprovação: K7, K8; erros e consequências: K1, K2, D8, D9, A4, C15, C16; síntese: S2, S3, R5; por alternativa: X7, G3; priorização: P3 |
| GQ-08 | Qualidade, tempo, esforço de integração e custo operacional comparáveis | alternativas, casos, dados, ficha | qualidade: X3; tempo: X4; esforço de integração: X5; custo operacional: X6; mesmos casos e decisão: X1, X2, X7, X8, X9, C4; hipóteses a comparar: A5, A6, S3, O1; síntese: F11, P3, P4 |
| GQ-09 | Ganho observado, custos completos e benefício efetivamente realizado separados | alternativas, baseline, ficha | ganho observado: G1, G2, G3; custos completos: G4, X6; benefício realizado: G5, G6, G7; validação: G8; referência: B8, B10; síntese: F11 |
| GQ-10 | Núcleo reutilizável, adaptações, evidência existente e limites de generalização | alternativas, ficha | núcleo reutilizável: T2, T7; adaptações: T3, T6; evidência existente: T4; limites de generalização: T5; identificação: T1; síntese: F11 |

Resultado: as dez linhas têm ao menos um campo para cada elemento da evidência mínima; nenhuma lacuna.

## Verificação inversa: campo → GQ

| Campos | Instrumento | GQs declaradas | Situação |
|---|---|---|---|
| E0–E7 | registro | GQ-01..10, indicadas em E0 | transversal |
| F1–F11 | ficha | GQ-01..10 | ok |
| R1–R5 | ficha | GQ-01, 02, 04, 05, 07 | ok |
| P1–P4 | ficha | GQ-01, 02, 04, 05, 07, 08 | ok; coluna `ID / GQ` incluída (V-01 resolvida) |
| RC1–RC3, RG1–RG9, RE1–RE9 | roteiros | GQ-01..05 | ok |
| M1–M10 | roteiros | GQ-01, 03 | ok |
| D1–D9, A1–A6, K1–K8, S1–S3, O1 | dados | GQ-03, 05, 06, 07, 08 | ok |
| B1–B12 | baseline | GQ-02, 04, 09 | ok |
| C1–C21 | casos.csv (documentado no protocolo) | GQ-02, 03, 04, 05, 07, 08 | ok |
| X1–X9, G1–G8, T1–T7 | alternativas | GQ-04, 05, 07, 08, 09, 10 | ok |

Códigos de instância (`EV`, `BL`, `CASO`, `ET`, `DADO`, `ATV`, `RISCO`, `ALT`) identificam registros, não são campos. A tabela de categorias de A3 é critério de classificação, não campo. Resultado: nenhum campo sem GQ nos arquivos novos ou existentes.

Exceção formal, sem lacuna de cobertura:

- **V-01** — [ficha](ficha-processo.md), tabela P1–P3: cabeçalho `ID` sem GQ; as GQs estão no parágrafo anterior e P4 no texto seguinte. Resolvida em 15/09/2026: a tabela passou a ter a coluna `ID / GQ`.

Achados do [ensaio de mesa](ensaio-mesa.md) que afetam instrumentos existentes estão em CR-06 a CR-09.

## Registro de evidência

Registre cada revisão da matriz com [E0–E7](registro-evidencia.md): natureza documental, arquivos e versões conferidos (E1), método de conferência (E2), campos examinados (E3), lacunas encontradas (E4/E5) e correções pendentes (E7). A matriz não é evidência de campo.
