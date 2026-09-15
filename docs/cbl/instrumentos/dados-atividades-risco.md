# Dados, atividades e risco

- GQs alimentadas: GQ-05 (insumos e acesso), GQ-06 (tipo de atividade) e GQ-07 (erros e controles); apoio a GQ-03 (etapas atuais) e GQ-08 (alternativas a comparar).
- Quando aplicar: após delimitar o processo candidato e seu fluxo atual; revisar quando mudar um insumo, uma atividade ou um limite de ação.
- Quem responde: responsável pelos dados e conhecimentos, executor do processo e responsável pelo aceite; consultor registra e confronta as fontes.
- O que produz: inventário por insumo, classificação por atividade e checklist por tipo de erro, com EVs e lacunas; alimenta F9, F10, F11, R4 e R5 da [ficha do processo](ficha-processo.md).

## Como usar

Modelo não aplicado. Não há evidência de campo neste instrumento. Crie a cópia de aplicação fora do kit público, conforme o [registro de evidência](registro-evidencia.md). Ligue-a à identificação F1 da ficha e use referências protegidas, sem reproduzir dados de pessoas ou conteúdo bruto de clientes.

Repita o grupo D para cada insumo, o grupo A para cada atividade e o grupo K para cada tipo de erro. Use IDs de instância `DADO-001`, `ATV-001` e `RISCO-001`; D1–D9, A1–A6 e K1–K8 são os campos estáveis de cada grupo. Registre valor + EV de suporte em cada resposta. Fontes discordantes recebem EVs distintos.

Nos campos abaixo, `desconhecido — sem coleta` explicita o motivo inicial; a ação indicada é a próxima coleta. Ao aplicar, substitua pelo motivo específico, responsável e data a combinar, mantendo a lacuna em S3. `Não se aplica` exige justificativa. Entrevista registra relato; inferências e propostas são hipóteses até serem confrontadas. Uma classificação ou controle proposto não equivale a aprovação ou validação.

## Inventário de dados, regras e conhecimentos — GQ-05

Inclua tanto sistemas e documentos quanto regras informais e conhecimento de pessoas. Não marque acesso como disponível apenas porque o insumo foi citado. Identifique quais insumos são indispensáveis ao recorte da investigação.

| ID / GQ | Campo a preencher por insumo | Valor e EV / próxima coleta |
|---|---|---|
| D1 / GQ-05,03 | ID do insumo e ficha F1; nome, tipo (dados/regra/conhecimento), finalidade, etapa do fluxo e atividades ATV que o usam; indispensável ou opcional e por quê | desconhecido — sem coleta; listar entradas e usos com executor |
| D2 / GQ-05 | Fonte de origem, sistema/documento/pessoa, formato, versão e referência protegida para localizar o insumo | desconhecido — sem coleta; localizar a fonte e conferir uma amostra |
| D3 / GQ-05 | Responsável pelo conteúdo, responsável pela manutenção e quem pode aprovar o acesso; papel e disponibilidade | desconhecido — sem coleta; confirmar responsabilidades com o processo |
| D4 / GQ-05 | Data da última atualização, frequência esperada, cobertura temporal e como se identifica a versão vigente | desconhecido — sem coleta; conferir histórico e rotina de atualização |
| D5 / GQ-05 | Qualidade para o uso de D1: completude, consistência, duplicidades, legibilidade e atualidade; amostra examinada, falhas encontradas e critérios ainda a acordar | desconhecido — sem coleta; inspecionar amostra e registrar E3/E4 |
| D6 / GQ-05 | Condições de acesso: quem solicita, quem acessa, finalidade, recorte necessário, local de consulta/armazenamento, restrições de cópia, compartilhamento e prazo de uso; autorização existente ou pendente e referência | desconhecido — sem coleta; combinar condições com responsável D3 |
| D7 / GQ-05 | Acesso verificado ou apenas relatado; método, data, amostra efetivamente acessível, limitações técnicas/operacionais e dependências para consultar ou extrair | desconhecido — sem coleta; verificar acesso dentro das condições D6 |
| D8 / GQ-05,07 | Indicação de dados pessoais: sim/não/desconhecido; indicação de dados sensíveis: sim/não/desconhecido; categorias suspeitas, motivo, uso necessário e responsável pela futura análise LGPD | desconhecido — sem coleta; fazer triagem com responsável pelos dados sem copiar valores identificáveis |
| D9 / GQ-05,07 | Pendências de conteúdo, qualidade ou acesso; efeito sobre a investigação, ação para resolver, responsável e data a combinar; vínculo com riscos K e síntese S1 | desconhecido — sem coleta; confrontar D2–D8 e listar impedimentos |

D8 é uma marcação de triagem para encaminhamento à futura análise LGPD, não uma conclusão jurídica nem autorização de tratamento. Se a classificação estiver incerta, mantenha `desconhecido`, registre a dúvida e quem deverá esclarecê-la. Registre somente a referência e a categoria necessária à investigação.

## Classificação das atividades — GQ-06, apoio a GQ-03 e GQ-08

As quatro categorias abaixo orientam perguntas sobre o trabalho. Não determinam uma ferramenta. Quando uma atividade misturar tipos, separe subatividades se houver fronteiras observáveis; se isso não for possível, registre tipo principal, tipos associados e a justificativa.

| Categoria de A3 / GQ-06 | Critério de investigação |
|---|---|
| Regra fixa | Há condições explícitas para decidir ou transformar a entrada; verificar se cobrem casos típicos e exceções e se uma execução determinística basta. |
| Linguagem | É necessário interpretar ou produzir texto/fala em contexto; identificar o que torna uma resposta correta e quando exige revisão. |
| Previsão | É necessário estimar algo desconhecido ou futuro; identificar dados de referência, resultado observável para comparação e como tratar a incerteza. |
| Julgamento humano | É necessário ponderar contexto, valores, exceções ou responsabilidade de decisão; identificar quem decide e que informação apoia essa decisão. |

| ID / GQ | Campo a preencher por atividade | Valor e EV / próxima coleta |
|---|---|---|
| A1 / GQ-06,03 | ID ATV, ficha F1 e etapa/subetapa do fluxo; executor, gatilho, entrada, saída e transferência; referência aos insumos DADO | desconhecido — sem coleta; acompanhar a etapa com executor |
| A2 / GQ-06,03 | Casos típicos e exceções examinados, critérios de acerto usados hoje e diferença entre procedimento escrito e prática observada | desconhecido — sem coleta; observar casos e confrontar regras |
| A3 / GQ-06 | Categoria principal: regra fixa/linguagem/previsão/julgamento humano; categorias associadas e justificativa baseada em A2, incluindo casos que desafiam a classificação | desconhecido — sem coleta; classificar com executor e EVs dos casos |
| A4 / GQ-06,07 | Decisões e ações da atividade; o que requer julgamento/aceite humano, por quem e em que momento; limites da atuação e riscos RISCO relacionados | desconhecido — sem coleta; identificar decisões e responsáveis |
| A5 / GQ-06,08 | Hipótese de intervenção: onde IA poderia ajudar, onde não entra e por quê; explicitar se regra fixa, mudança de processo ou execução humana podem bastar; evidência que falta para comparar | desconhecido — sem coleta; formular alternativas após A2–A4, sem escolher arquitetura |
| A6 / GQ-06,07,08 | Revisão da classificação e da hipótese: responsável, data, concordâncias/divergências, EVs, lacunas e próxima atividade; referência a F11 para futura comparação | desconhecido — sem coleta; revisar com responsável pelo processo |

Uma atividade de linguagem não implica uso de IA; uma atividade de julgamento pode admitir apoio sem transferir a decisão. A5 registra hipóteses para GQ-08, sem selecionar modelo, plataforma ou arquitetura.

## Checklist por tipo de erro — GQ-07

Considere erros do processo atual e os possíveis erros das hipóteses de A5, com naturezas separadas. Um risco imaginado recebe natureza de hipótese; ocorrência observada exige EV de campo. Reversibilidade não torna um erro aceitável por si só. Não substitua critérios por notas de risco sem justificativa.

| ID / GQ | Campo a preencher por tipo de erro | Valor e EV / próxima coleta |
|---|---|---|
| K1 / GQ-07,06 | ID RISCO, ficha F1, atividade ATV e insumos DADO; tipo de erro, ação envolvida, condição de ocorrência e natureza (relatado/observado/documental/hipótese/ensaio) com EV | desconhecido — sem coleta; listar falhas típicas e exceções com executor |
| K2 / GQ-07 | Consequência, pessoas/processos afetados, alcance e momento do efeito; frequência conhecida e sua amostra ou desconhecido, sem estimar por suposição | desconhecido — sem coleta; confrontar casos e impactos com responsável |
| K3 / GQ-07 | Aceitabilidade: aceitável sob condições/não aceitável/desconhecido; critério de qualidade, limite de erro e unidade quando couber, justificativa e quem deve aprovar em K8 | desconhecido — sem coleta; acordar critérios por tipo de erro |
| K4 / GQ-07 | Detecção: sinal/regra de verificação, quando ocorre em relação ao efeito, cobertura e falhas possíveis da detecção, quem verifica; separar controle proposto de controle testado e citar evidência do teste | desconhecido — sem coleta; definir verificação e ensaio controlado a combinar |
| K5 / GQ-07 | Reversibilidade: integral/parcial/irreversível/desconhecido; ação de recuperação, responsável, prazo limite, custo/esforço e efeitos residuais; procedimento proposto ou testado com EV | desconhecido — sem coleta; conferir recuperação possível com responsável |
| K6 / GQ-07 | Supervisão e escalonamento: revisão antes/depois da ação, gatilho, destinatário e substituto, canal acordado, prazo de resposta e procedimento caso ninguém responda | desconhecido — sem coleta; combinar responsabilidades e continuidade segura |
| K7 / GQ-07 | Critérios para parar: ocorrência/limite que interrompe a atividade ou investigação, escopo da parada, quem a executa e como preserva evidência; condição e autoridade para retomar | desconhecido — sem coleta; definir parada e retomada com responsável |
| K8 / GQ-07 | Quem aprova critérios K3 e controles K4–K7: papel, disponibilidade, decisão (proposto/aprovado/rejeitado/desconhecido), condições, data e EV; validações pendentes e próxima coleta | desconhecido — sem coleta; obter revisão explícita e registrar divergências |

Acorde em K7 o tratamento de erro não aceitável, falha de detecção, recuperação indisponível, ausência do supervisor e uso de dados fora de D6. Esses são pontos de discussão do modelo, não ocorrências nem limites já aceitos. Um controle ainda não demonstrado continua com validação pendente em K8. Lacunas que impeçam avaliar detecção, supervisão ou interrupção impedem marcar R5 como atendido.

## Síntese para a ficha — GQ-05, GQ-07, apoio a GQ-06 e GQ-08

| ID / GQ | Campo | Valor e EV / próxima coleta |
|---|---|---|
| S1 / GQ-05 | Dados acessíveis: atende/não atende/desconhecido; insumos indispensáveis D1, condições D6, verificação D7, pendências D9, justificativa e EV; transportar para R4 e referenciar inventário em F9 | desconhecido — sem coleta; conferir todos os insumos indispensáveis |
| S2 / GQ-07 | Risco controlável: atende/não atende/desconhecido; cobertura dos erros K1, critérios, detecção, recuperação, supervisão, parada e aprovações K3–K8; justificativa e EV; transportar para R5 | desconhecido — sem coleta; revisar riscos e evidência dos controles |
| S3 / GQ-05,06,07,08 | Lacunas por campo/GQ, motivo, próxima coleta, responsável e data a combinar; referências de classificação e riscos para F11 e pendências para F10; hipóteses de A5 a comparar depois | desconhecido — sem coleta; consolidar pendências sem presumir responsáveis ou datas |

Em S1/S2, use `não atende` quando houver evidência de impedimento nas condições atuais; `desconhecido` quando faltar evidência para julgar. Para `atende`, documente cobertura do recorte e justificativa sustentada pelos EVs. Acesso apenas relatado, autorização pendente ou controle apenas proposto não sustentam, sozinhos, um `atende`. Aplique a regra de R4/R5 da ficha: pendências impedem aprovação e pontuação, e atendimento não autoriza implantação ou publicação.

## Apoio opcional — GQ-05, apoio a GQ-03 e GQ-08

A [avaliação de projetos open source de 14/09/2026](../../research/projetos-open-source.md) indica AnyDoc para **testar quando houver campo**. Conversão local de documentos pode apoiar a leitura do inventário e de procedimentos. O inventário também pode ser preenchido por leitura direta e amostragem manual; nenhum campo depende de uma ferramenta.

Mantenha OCR hospedado desligado sem acordo sobre os dados. Conforme a avaliação citada, esse modo envia o documento inteiro à Firecrawl Parse, e documentos escaneados exigem tratamento adicional. Não transforme a falha de conversão em autorização de envio externo. Este instrumento não instala nem executa AnyDoc.

| ID / GQ | Campo de um eventual teste futuro | Valor e EV / próxima coleta |
|---|---|---|
| O1 / GQ-05,03,08 | Necessidade de conversão, insumos DADO e finalidade; acesso D6, condições de dados, modo local previsto, amostra, conferência contra original e critério para julgar o apoio; estado proposto/executado/não necessário com EV | desconhecido — sem campo e sem teste; avaliar a necessidade quando houver documentos acessíveis |

O1 documenta apoio à coleta. Não escolhe a arquitetura de uma intervenção.

## Registro de evidência — GQs indicadas em E0

Feche a aplicação com o padrão [E0–E7](registro-evidencia.md), ligado aos campos D1–D9, A1–A6, K1–K8, S1–S3 e O1. Repita o registro quando fontes ou naturezas diferirem.

| Campo padrão / GQ de E0 | Preenchimento |
|---|---|
| E0 — ID, GQs e natureza | EV-___; GQ-___; documental/hipótese/campo/ensaio; campos e instâncias que sustenta |
| E1 — Fonte e data | Fonte e referência protegida; data da fonte e da coleta com fuso; responsável pela coleta |
| E2 — Método | Relato/observação/histórico/experimento/análise documental e como foi obtido |
| E3 — Amostra | Unidade, quantidade, período, seleção e exclusões; distinguir documentos de casos operacionais |
| E4 — Observação | O que a fonte mostra ou relata, atribuído à fonte, sem extrapolação |
| E5 — Interpretação | Inferência, hipóteses alternativas e limites; decisão do usuário referencia DEC |
| E6 — Grau de confiança | Baixo/médio/alto, com justificativa de cobertura, qualidade e convergência |
| E7 — Próxima lacuna | O que falta e por quê; próxima coleta, responsável e data a combinar |

Sem coleta, mantenha `desconhecido`, motivo e próxima atividade. Não abra um EV fictício de campo para preencher o modelo.
