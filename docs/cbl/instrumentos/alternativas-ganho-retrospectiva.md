# Alternativas, ganho e retrospectiva

- GQs alimentadas: GQ-08 (menor complexidade suficiente), GQ-09 (ganho, custos e benefício) e GQ-10 (núcleo reutilizável e limites); apoio a GQ-04 (baseline como referência) e GQ-07 (riscos por alternativa).
- Quando aplicar: matriz depois de B9 aceito e de A5 e K1–K8 preenchidos; ganho e benefício depois da comparação controlada; retrospectiva ao encerrar o ciclo, antes de outro processo ou cliente.
- Quem responde: consultor compara e registra; executor aplica as alternativas aos casos; responsável pelo processo decide a alternativa e valida o benefício, com quem responde por custos e receita quando houver valor financeiro.
- O que produz: matriz `ALT-00`…`ALT-nn` (X1–X9), registro de ganho e benefício (G1–G8) e retrospectiva (T1–T7); alimenta F11 da [ficha do processo](ficha-processo.md) e o Playbook AJ.

## Como usar

Modelo não aplicado; não há comparação, ganho ou retrospectiva de campo. Crie a cópia de aplicação fora do kit público, conforme o [registro de evidência](registro-evidencia.md). Hipóteses e ensaios mantêm o rótulo e nunca viram resultado.

## Matriz de alternativas — GQ-08

- A matriz inclui sempre **ALT-00, processo atual**, cuja referência é o baseline B8 do [protocolo](protocolo-baseline.md), e **ALT-01, sem IA**: regra fixa, modelo padronizado, checklist, mudança de fluxo ou automação determinística. Alternativas com IA começam em `ALT-02` e vêm das hipóteses A5 de [dados, atividades e risco](dados-atividades-risco.md).
- Todas usam **os mesmos casos reais** do conjunto (`caso_id` de `casos.csv`, com `condicao` igual ao código ALT), a métrica B2, a unidade B3 e os limites de qualidade B9. Caso de ensaio ou demonstração não entra na comparação.
- Estrelas, popularidade, número de funcionalidades ou demonstração de fornecedor não são critério ([avaliação open source](../../research/projetos-open-source.md)). Solução indicada como "provável" em documento é hipótese de ALT, não decisão.
- **Suficiente** é a alternativa que atende B9 sem violar K3 nem depender de controle K4–K7 não aprovado em K8. Entre as suficientes, escolha a de menor esforço de integração e custo operacional; em empate, a mais simples de operar e reverter. Manter ALT-00 é resultado válido.

| ID / GQ | Critério, nos mesmos casos | ALT-00 processo atual | ALT-01 sem IA | ALT-02 com IA |
|---|---|---|---|---|
| X1 / GQ-08 | Descrição, atividades `ATV` afetadas, origem (baseline ou A5) e natureza (campo/ensaio/hipótese) | desconhecido | desconhecido | desconhecido |
| X2 / GQ-08 | Conjunto de casos: `caso_id`, período, n e exclusões; indicar se é o mesmo de ALT-00 | desconhecido | desconhecido | desconhecido |
| X3 / GQ-08,04 | Qualidade: proporção de casos com `qualidade = atende`, erros `RISCO` observados e n | desconhecido | desconhecido | desconhecido |
| X4 / GQ-08,04 | Tempo: mediana e p90 na unidade B3 e diferença para B8 | desconhecido | desconhecido | desconhecido |
| X5 / GQ-08,05 | Esforço de integração: insumos `DADO`, acessos D6/D7, sistemas tocados, mudança de fluxo e horas-pessoa; estimado ou medido | desconhecido | desconhecido | desconhecido |
| X6 / GQ-08,09 | Custo operacional por caso ou mês: serviço ou licença, revisão humana, monitoramento e manutenção; estimado ou medido | desconhecido | desconhecido | desconhecido |
| X7 / GQ-08,07 | Riscos `RISCO` aplicáveis, controles K4–K7 exigidos e estado K8 | desconhecido | desconhecido | desconhecido |
| X8 / GQ-08 | Suficiente frente a B9 e K: sim/não/desconhecido, justificativa e EV | desconhecido | desconhecido | desconhecido |
| X9 / GQ-08 | Decisão: escolhida/descartada/desconhecido e motivo; quem decidiu (papel), data e referência em F11 | desconhecido | desconhecido | desconhecido |

Acrescente colunas `ALT-03` em diante conforme A5. Valor estimado em X5 ou X6 permanece hipótese até ser medido; X8 não pode ser `sim` com X3 ou X4 desconhecidos.

## Ganho observado, custos completos e benefício realizado — GQ-09

São três grandezas separadas. **Ganho mensurável** é a mudança observada na métrica comparada ao baseline; **benefício realizado** é a parcela convertida em capacidade útil, redução de custo ou receita ([CONTEXT](../../../CONTEXT.md)).

Horas poupadas são ganho observado de tempo (G2), nunca benefício (G6) nem retorno (G7). Multiplicar horas por custo-hora produz no máximo uma hipótese em E5, salvo quando G5 mostra a conversão: hora extra paga que deixou de existir, casos adicionais atendidos com receita registrada ou contratação evitada por decisão do responsável. "Hora poupada não é automaticamente ROI" (AJ-F01, p. 18).

| ID / GQ | Campo | Valor e EV / próxima coleta |
|---|---|---|
| G1 / GQ-09,04 | Desenho: `BL` e B8 de referência, ALT comparada, casos, período, antes/depois ou paralelo, fatores concorrentes (sazonalidade, equipe, preço) | desconhecido |
| G2 / GQ-09 | Ganho observado: diferença na métrica B2 (unidade B3, n, período) e se atinge B9; só natureza `campo` sustenta ganho mensurável | desconhecido |
| G3 / GQ-09,07 | Efeitos em qualidade e erros: limites B9 preservados, novos erros K1 e efeitos adversos | desconhecido |
| G4 / GQ-09 | Custos completos no mesmo período: licença ou serviço, integração, implementação, monitoramento, revisão humana, manutenção, custo de erros e treinamento necessário; cada item estimado ou medido, com unidade monetária (AJ-F01, p. 18) | desconhecido |
| G5 / GQ-09 | Destino da capacidade liberada: o que efetivamente mudou (mais casos, menos hora extra, receita, nenhum uso observado), com EV | desconhecido |
| G6 / GQ-09 | Benefício realizado: parcela convertida em capacidade útil, redução de custo ou receita; valor, unidade, período e EV | desconhecido |
| G7 / GQ-09 | Resultado líquido G6 − G4 e ROI = (G6 − G4) ÷ G4 (AJ-F01, p. 18), somente com G4 e G6 medidos no mesmo período | desconhecido |
| G8 / GQ-09 | Validação: quem validou G2, G4 e G6 (papel), data, estado (validado/contestado/pendente) e divergências | desconhecido |

Sem G8 validado, apresente G2 apenas como ganho observado, com G6 e G7 pendentes. Meta B10 nunca aparece como G2 ou G6.

## Retrospectiva — GQ-10

| ID / GQ | Campo | Valor e EV / próxima coleta |
|---|---|---|
| T1 / GQ-10 | Ciclo, ficha F1, processo, contexto (porte, canal, sistemas; sem nome do cliente), período, natureza e papéis participantes | desconhecido |
| T2 / GQ-10 | Núcleo reutilizável: passos, instrumentos, critérios e métricas usados sem mudança, com EV de que funcionaram | desconhecido |
| T3 / GQ-10 | Adaptações: o que mudou, por quê e se é específico do contexto ou geral | desconhecido |
| T4 / GQ-10 | Evidência existente: o que foi medido e validado (B8, G2, G6, G8) e o que continua hipótese | desconhecido |
| T5 / GQ-10 | Limites de generalização: condições das quais o resultado depende (volume, dados, canal, regulação, responsável) e o que um só contexto não sustenta | desconhecido |
| T6 / GQ-10 | Correções do kit: campo, problema, arquivo corrigido ou pendente e registro no WORKLOG | desconhecido |
| T7 / GQ-10 | Entrada no Playbook AJ: itens de T2 com estado (validado em n contextos/hipótese), próximo contexto de teste, responsável e data a combinar | desconhecido |

Um único contexto não comprova Replicabilidade. Com um contexto, T7 registra os itens como "a testar em segundo contexto".

## Registro de evidência

Feche cada parte com o padrão [E0–E7](registro-evidencia.md), ligado a X1–X9, G1–G8 e T1–T7. Custos e benefício financeiro recebem EV próprio, com a fonte do valor e o papel de quem o confirmou. Sem coleta, mantenha `desconhecido`, motivo e próxima atividade; não abra EV fictício de campo.
