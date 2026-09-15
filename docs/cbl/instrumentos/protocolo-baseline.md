# Protocolo de baseline e planilha de casos

- GQs alimentadas: GQ-04 (métrica, unidade, período, amostra, método e critério de sucesso acordado) e GQ-02 (volume, variabilidade e janela de observação); apoio a GQ-03 (etapas `ET`) e GQ-08/09 (referência de comparação).
- Quando aplicar: depois do recorte F4 e do mapa AS-IS, **antes de qualquer intervenção**; abrir nova versão se a definição da métrica mudar.
- Quem responde: responsável pelo processo propõe e aceita o critério de sucesso; executor e responsável pelos dados indicam fontes e medições; consultor registra os casos e calcula.
- O que produz: protocolo `BL-001` com campos B1–B12, casos em [casos.csv](casos.csv) (colunas C1–C21) e transporte para F5, F7, F8, R1 e R2 da [ficha do processo](ficha-processo.md).

## Como usar

Modelo não aplicado; não há caso registrado. Crie a cópia do protocolo e da planilha fora do kit público, conforme o [registro de evidência](registro-evidencia.md). O `casos.csv` do kit contém apenas o cabeçalho.

Defina B1–B6 antes de registrar casos. Mudança posterior em B2–B6 cria nova versão de B1 e novo período; não misture casos de versões diferentes no mesmo cálculo.

**Baseline** é a medição do processo atual, com período, amostra, unidade e método ([CONTEXT](../../../CONTEXT.md)). Não é meta nem estimativa de ganho: o valor medido fica em B8, o critério acordado em B9 e qualquer meta em B10, sempre separados.

## Definição do baseline — GQ-04 e GQ-02

| ID / GQ | Campo | Valor e EV / próxima coleta |
|---|---|---|
| B1 / GQ-04 | ID `BL-___`, versão, ficha F1, natureza (campo/ensaio), data e fuso; recorte F4 e etapas `ET` incluídas | desconhecido |
| B2 / GQ-04 | Métrica principal e secundárias: nome, definição operacional (o que é um caso, evento de início, evento de fim, desfecho aceitável), fórmula e dimensão (tempo/qualidade/custo/receita) | desconhecido |
| B3 / GQ-04 | Unidade de cada métrica (minutos, horas úteis, dias, %, valor por caso), calendário corrido ou útil e arredondamento | desconhecido |
| B4 / GQ-02,04 | Período: início, fim, fuso e subperíodo de agregação (semana ou mês); sazonalidade, feriados e eventos atípicos conhecidos, com EV | desconhecido |
| B5 / GQ-02,04 | Amostra: população do recorte, seleção (todos/consecutivos/aleatória), tamanho pretendido e obtido, exclusões com motivo e cobertura da fonte | desconhecido |
| B6 / GQ-04 | Método: histórico, medição direta, observação ou amostragem de tempo; fonte `DADO` e EV, quem mede e como confere; relato não substitui medida | desconhecido |
| B7 / GQ-02 | Volume e variabilidade por subperíodo calculados de `casos.csv`, com n, exclusões e casos em aberto | desconhecido |
| B8 / GQ-04 | Valor do baseline: mediana e p90 (ou proporção) na unidade B3, com n, período, cobertura e limitações | desconhecido |
| B9 / GQ-04 | **Acordo final do critério de sucesso**: diferença mínima que terá valor, limites de qualidade que devem permanecer, quem aceitou (papel), data, estado (proposto/aceito/rejeitado/desconhecido) e EV | desconhecido |
| B10 / GQ-04,09 | Meta ou estimativa de ganho, se houver: valor, origem e natureza (hipótese); nunca preenche B7, B8 ou B9 | desconhecido |
| B11 / GQ-02,04 | Janela de observação: suficiente/insuficiente/desconhecido e justificativa; estados propostos para R1 e R2 | desconhecido |
| B12 / GQ-02,04 | Desvios do protocolo, lacunas, próxima coleta, responsável e data a combinar; destino F10 | desconhecido |

B9 fecha o critério proposto em RG7 e F8. Enquanto B9 não estiver `aceito`, não há referência para comparar alternativas (GQ-08) nem ganho (GQ-09).

## Volume e variabilidade por período — GQ-02

Use somente linhas com `condicao = baseline` e `incluido = sim`, agregadas pelo subperíodo B4 na coluna `periodo`.

1. **Volume:** número de `caso_id` distintos por subperíodo; registre total, mínimo e máximo entre subperíodos.
2. **Variabilidade do volume:** mediana, mínimo e máximo por subperíodo; com seis ou mais subperíodos, acrescente o coeficiente de variação (desvio-padrão ÷ média).
3. **Variabilidade da métrica:** por subperíodo e no total, mediana, p90 e amplitude interquartil de `tempo_valor` ou `valor_resultado`, ou a proporção de `resultado`/`qualidade` que atende B2. Em tempos assimétricos, prefira mediana e p90 à média. Subperíodo com menos de cinco casos não recebe mediana isolada: agregue e registre em B12.
4. **Casos em aberto** no fim do período (sem evento de fim): mantenha a linha com `resultado = em_aberto` e `tempo_valor` vazio. Conte-os em B7, sem excluí-los nem tratá-los como zero; se forem frequentes, estenda o período ou revise B2.
5. **Relatos** (`metodo_medicao = relato`) ficam fora de B7 e B8; servem apenas para planejar a amostra.

Marque B11 como `insuficiente` quando ocorrer qualquer condição:

- menos de quatro subperíodos com casos, ou período que não cobre a sazonalidade relatada (RE5, B4);
- volume por subperíodo que não permite repetir, na janela de comparação, a amostra B5;
- diferença mínima de B9 menor que a oscilação típica entre subperíodos (por exemplo, a amplitude entre medianas semanais): a mudança não se distinguiria da variação normal;
- cobertura da fonte, exclusões ou casos em aberto que comprometem a representatividade do recorte;
- mudança em B2–B6 durante o período.

Esses são mínimos do kit, não teste estatístico; critério mais rigoroso pode ser acordado e registrado em B11. Sem casos medidos, B11 permanece `desconhecido`.

## Resultado para a ficha

| Campo do protocolo | Destino | Regra |
|---|---|---|
| B7, B11 | F5 e R2 (volume suficiente) | `atende` só com B7 calculado e B11 suficiente; volume insuficiente nas condições atuais é `não atende` |
| B2, B3, B6, B8 | F7 e R1 (baseline possível) | `atende` só com B2–B6 definidos, acesso à fonte verificado (D7) e medição anterior à mudança |
| B9, B10 | F8 | critério aceito com papel e data; meta separada, nunca no lugar de B9 |
| B12 | F10 | lacunas e próxima coleta por GQ |

## Colunas de casos.csv — GQ-02 e GQ-04

UTF-8 sem BOM, separador vírgula, uma linha por caso × etapa × condição; texto com vírgula vai entre aspas duplas; datas `AAAA-MM-DD`. Não registre nome, telefone, e-mail, conteúdo de mensagem ou documento. `caso_id` é código gerado pelo consultor, nunca derivado de telefone, nome, e-mail ou número identificável.

| ID / GQ | Coluna | Conteúdo |
|---|---|---|
| C1 / GQ-02,04 | `caso_id` | `CASO-001` etc.; o mesmo caso mantém o código em todas as condições |
| C2 / GQ-04 | `natureza` | `campo` ou `ensaio` |
| C3 / GQ-04 | `protocolo_id` | B1 com versão, ex.: `BL-001-v1` |
| C4 / GQ-04,08 | `condicao` | `baseline` ou código `ALT-xx` da [matriz de alternativas](alternativas-ganho-retrospectiva.md) |
| C5 / GQ-02 | `data_caso` | data do evento de início definido em B2 |
| C6 / GQ-02 | `periodo` | subperíodo B4, ex.: `2026-W38` ou `2026-09` |
| C7 / GQ-03,04 | `etapa_codigo` | `ET-xxx` do mapa AS-IS ou `total` para o recorte inteiro |
| C8 / GQ-04 | `metodo_medicao` | `historico`, `medicao_direta`, `observacao` ou `relato` |
| C9 / GQ-02,04 | `tempo_valor` | número; vazio se em aberto, desconhecido ou não se aplica |
| C10 / GQ-04 | `tempo_unidade` | unidade B3 do tempo |
| C11 / GQ-04 | `valor_resultado` | número de métrica não temporal de B2 (ex.: valor da proposta); vazio se não se aplica |
| C12 / GQ-04 | `unidade_resultado` | unidade B3 de C11 |
| C13 / GQ-04 | `resultado` | desfecho categórico definido em B2, `em_aberto` ou `desconhecido` |
| C14 / GQ-04,07 | `qualidade` | `atende`, `nao_atende` ou `desconhecido` frente aos limites de B9 |
| C15 / GQ-03,07 | `erro_retrabalho` | `sim`, `nao` ou `desconhecido`; `sim` exige C16 |
| C16 / GQ-03,07 | `erro_ref` | código `RISCO-xxx` ou tipo curto do erro ou retrabalho |
| C17 / GQ-04,05 | `fonte_ref` | referência protegida da fonte (`DADO-xxx`, log, observação), sem conteúdo |
| C18 / GQ-04 | `ev_id` | EV que sustenta a linha |
| C19 / GQ-02,04 | `incluido` | `sim` ou `nao` (exclusão prevista em B5) |
| C20 / GQ-02,04 | `motivo_exclusao` | motivo quando `incluido = nao` |
| C21 / GQ-03,04 | `observacao` | nota curta, sem dado pessoal |

## Registro de evidência

Feche a aplicação com o padrão [E0–E7](registro-evidencia.md), ligado a B1–B12 e às linhas de `casos.csv` pela coluna `ev_id`. A fonte de cada lote de casos recebe um EV com E3 descrevendo unidade, período, seleção e exclusões. Sem coleta, mantenha `desconhecido`, motivo e próxima atividade; não abra EV fictício de campo nem registre casos inventados.
