# CBL do Projeto AJ

Atualização: 15/09/2026 (AI-004 e AI-005). CBL da Apple confirmado por Arthur. Este documento organiza o ponto de partida dos PDFs, o estado da evidência e a investigação; não declara um piloto validado.

## Ponto de retomada

O material mais recente, **Mapa das dores**, p. 1–2 e 15–21, trata o Challenge como já adotado e recomenda entrar nas Guiding Questions. O material anterior, **Top perguntas**, p. 15–17, contém Big Idea, Essential Question e a proposta original. [Fontes, versões e transcrições](../research/README.md).

**Big Idea documental:** IA aplicada à transformação do trabalho e dos processos empresariais.

**Essential Question documental:** como transformar a IA de uma ferramenta de perguntas e respostas em uma capacidade empresarial que melhore processos de forma mensurável, segura e escalável?

**Challenge documental vigente como base de trabalho:**

> Criar e validar, em até 60 dias, um modelo replicável de consultoria em IA capaz de transformar um processo empresarial real e comprovar ganho mensurável de produtividade, qualidade, custo ou receita, com riscos controlados e potencial de escala.

O prazo aparece como parâmetro do projeto, não como benchmark. Em 14/09/2026 Arthur declarou que não há empresa acessível e, portanto, nenhum marco vigente (DEC-005): nenhum vencimento é calculado, e a contagem só começa quando houver campo e marco explícitos. “AJ AI Process Accelerator” aparece como sugestão de oferta no PDF anterior, sem confirmação de nome comercial. Capacitação estruturada aparece como módulo opcional no mapa, p. 18; treinamento necessário à operação do piloto deve ser investigado com o cliente.

## Candidata para o primeiro campo

Em 15/09/2026 Arthur informou conhecer o dono de uma barbearia MEI e decidiu oferecer **diagnóstico inicial gratuito, com implantação negociada depois** (DEC-009/010). Há uma candidata pela rede de contatos; o dono ainda precisa aceitar o convite. Atendimento no WhatsApp, agenda e faltas são hipóteses a confrontar. [Estado, perguntas e próxima conversa](barbearia-candidata.md). Sem aceite, acesso e marco explícitos, permanece Investigate sem coleta de campo e sem contagem dos 60 dias.

## Como aplicar o método

O [framework CBL](https://www.challengebasedlearning.org/framework/) conecta Engage (Big Idea, Essential Question, Challenge), Investigate (Guiding Questions, atividades/recursos e síntese) e Act (desenvolver, implementar e avaliar a solução com público real). Documentar, refletir e compartilhar acompanham o ciclo; novas descobertas podem exigir retorno a uma fase anterior. A [publicação da Apple](https://www.apple.com/ca/education/docs/Apple-ChallengedBasedLearning.pdf) complementa a origem e a prática do método.

Aplicação proposta ao AJ:

| Etapa | Situação em 14/09/2026 | Evidência para avançar | Skills úteis |
|---|---|---|---|
| Engage — reconciliar | Challenge mantido; sem marco e sem público real (DEC-005) | Campo de observação com responsável e marco declarado | grill-with-docs, domain-modeling |
| Investigate — sem campo | Preparar instrumentos e avaliar recursos; formular hipóteses | Instrumentos revisados e prontos para o primeiro campo | research, prototype quando um experimento ajudar |
| Investigate — com campo | Bloqueada até existir processo acessível | Perguntas respondidas com fonte, amostra e lacunas explícitas | grill-with-docs, research |
| Act | Bloqueada até a investigação com campo | Comparação com baseline e critérios acordados; limites de replicação | to-spec, to-tickets, implement/tdd e code-review quando houver software |

Não é necessário reiniciar toda a fase Engage. A reconciliação é restrita às lacunas que afetam a investigação. Também não é necessário executar todas as skills; elas apoiam o trabalho e os meios de validação escolhidos.

## Primeira rodada de perguntas — respondida

1. **Vigência e marco dos 60 dias:** não há marco vigente (DEC-005).
2. **Empresa ou processo acessível:** não existe empresa em que Arthur possa atuar (DEC-005).

Consequência: o trabalho continua em Investigate, restrito a instrumentos, recursos e hipóteses. Nenhuma afirmação de piloto validado, ganho medido ou modelo replicável pode ser feita. Responsável pelo aceite, disponibilidade, orçamento, amostra, métricas e limites de ação continuam sem resposta e dependem do campo; não preencher por suposição.

## Mapa de evidência: temos, hipótese, falta

**Temos:** fonte documental ou decisão registrada. **Hipótese:** proposição dos materiais ou desta análise, ainda não testada. **Falta:** o que precisa existir para avançar.

| Elemento | Temos | Hipótese | Falta |
|---|---|---|---|
| Big Idea e Essential Question | Formulação documental (AJ-F02, p. 15–16; AJ-F01, p. 1–2) | — | Nada para a investigação; revisar só se o campo contradisser |
| Challenge | Formulação refinada de AJ-F01, mantida como base (DEC-005) | Que 60 dias bastam para validar um modelo replicável | Marco inicial e público real |
| Público / empresa | Contato com dono de barbearia MEI informado por Arthur (DEC-009), sem participação aceita | Que a candidata possa se tornar o primeiro campo | Aceite, disponibilidade e acesso delimitado a processo e dados |
| Processo candidato | Cinco famílias sugeridas e service desk; notas analíticas de AJ-F01, p. 12 | Que atendimento, vendas, documentos, conhecimento interno ou relatórios oferecem melhor impacto × frequência × viabilidade | Seleção com evidência e requisitos eliminatórios atendidos |
| GQ-01..GQ-04 — problema, volume, fluxo, baseline | Perguntas e evidência mínima definidas | Tese das lacunas de AJ-F01, p. 9–10 | Entrevistas, logs, mapa AS-IS e baseline de um processo real |
| GQ-05..GQ-07 — dados, tipo de atividade, erros | Critério regra/linguagem/previsão/julgamento; exigência de risco controlado | Que dados, integração e governança são os gargalos principais | Inventário de dados real e critérios do responsável |
| GQ-08 — menor complexidade suficiente | Princípio documental; [avaliação de 15 projetos open source](../research/projetos-open-source.md) | Que ferramentas prontas reduzem custo de coleta ou integração | Comparação em casos reais contra o processo atual |
| GQ-09 — ganho em resultado | Distinção entre ganho mensurável e benefício realizado ([CONTEXT](../../CONTEXT.md)) | Faixas de ganho dos casos citados nos PDFs, que não são do AJ | Medição controlada e validação do responsável |
| GQ-10 — replicação | Conceito de Playbook AJ | Que o método se repete entre clientes | Segundo contexto |
| Instrumentos de investigação | [Kit de instrumentos](instrumentos/README.md) em execução sob DEC-007 | Que a aplicação seja suficiente para registrar o primeiro diagnóstico | Revisão dos instrumentos e aplicação real após aceite |
| Solução / arquitetura | Nenhuma escolhida; multiagentes é arquitetura, não objetivo | Uso de LLM, busca em documentos ou automação conforme o caso | Evidência de processo, dados e critério de resultado |

## Caminho até a solução

1. **Instrumentos, agora e sem campo:** transformar GQ-01..GQ-10 em roteiros, fichas e planilhas que um consultor aplica em poucos dias.
2. **Obter campo, decisão de Arthur:** definir a rota até um processo real (ver abaixo).
3. **Ficha do processo e baseline:** aplicar os instrumentos para responder GQ-01..GQ-05.
4. **Classificar e comparar alternativas:** GQ-06..GQ-08, incluindo não usar IA quando uma regra fixa bastar.
5. **Act:** implementar a menor solução suficiente e medir contra o baseline (GQ-09).
6. **Playbook e segundo contexto:** registrar o núcleo reutilizável e testá-lo em outro processo (GQ-10).

Rotas possíveis para obter campo, ainda não decididas: (a) um processo do próprio AJ ou de Arthur, acessível já, mas sujeito a viés de autoavaliação e sem cliente externo; (b) empresa da rede de contatos com responsável disposto a fornecer dados; (c) caso simulado com dados públicos, útil apenas para ensaiar instrumentos e nunca para validar ganho. Arthur indicou uma candidata pela rota (b) em DEC-009, ainda sem aceite ou acesso. A confirmação do campo e o marco devem ser registrados em DECISIONS.

## Guiding Questions e evidência necessária

Mapa de investigação adaptado do **Mapa das dores**, p. 16–21. Todas continuam sem evidência de campo neste repositório.

| ID | Pergunta | Atividade/recurso | Evidência mínima |
|---|---|---|---|
| GQ-01 | Onde existe perda frequente e relevante de tempo, qualidade, custo ou receita? | Conversa com gestor e executor, observação de casos | Lista de processos, impacto relatado, exemplos reais e fonte |
| GQ-02 | O volume permite observar mudança no prazo do Challenge? | Logs, CRM, tickets ou planilhas | Volume e variabilidade por período; janela de observação |
| GQ-03 | Como o trabalho acontece hoje e onde estão esperas, erros e retrabalho? | Acompanhamento do processo | Mapa AS-IS com etapas, responsáveis, exceções e transferências |
| GQ-04 | Qual é o baseline e qual diferença terá valor para o cliente? | Amostra histórica e medição direta | Definição da métrica, unidade, período, amostra e critério de sucesso acordado |
| GQ-05 | Que dados, regras e conhecimentos existem e estão acessíveis para o piloto? | Inventário e amostra de casos | Fonte, responsável, atualização, qualidade e condições de acesso |
| GQ-06 | Quais atividades exigem regra fixa, linguagem, previsão ou julgamento humano? | Análise de casos típicos e exceções | Separação das atividades e justificativa da intervenção |
| GQ-07 | Que erros e ações podem ser aceitos, detectados ou revertidos? | Discussão com responsável e ensaio controlado | Critérios de qualidade, escalonamento e supervisão proporcionais |
| GQ-08 | Qual alternativa produz o resultado com menor complexidade suficiente? | Comparar processo atual e alternativas em casos reais | Qualidade, tempo, esforço de integração e custo operacional comparáveis |
| GQ-09 | O ganho observado se converte em resultado útil? | Comparação controlada e validação do responsável | Ganho observado, custos completos e benefício efetivamente realizado separados |
| GQ-10 | O que se repete em outro cliente ou processo? | Retrospectiva e comparação com segundo contexto | Núcleo reutilizável, adaptações, evidência existente e limites de generalização |

Para cada resposta, registrar: fonte/data, método, amostra, observação, interpretação, grau de confiança e próxima lacuna. Entrevistas formulam hipóteses; observação, histórico e experimento permitem confrontá-las. Evidências comerciais e a comprovação de repetição precisam ser construídas, mesmo que o primeiro piloto funcione.

## Ferramentas de terceiros

Uma ferramenta não responde uma Guiding Question; no máximo reduz o esforço de coletar ou analisar a evidência (instrumento), entra na comparação de GQ-08 (candidata de intervenção) ou melhora a qualidade e a segurança do próprio trabalho do AJ (apoio interno). A avaliação de 14/09/2026, com licença, maturidade, esforço e veredito por projeto, está em [projetos-open-source.md](../research/projetos-open-source.md). Estrelas e popularidade não são evidência de adequação a um processo.

## Seleção de candidatos

Os materiais sugerem atendimento assistido, vendas/follow-up/propostas, busca de conhecimento interno, processamento documental financeiro e relatórios administrativos. Service desk é outro candidato quando há operação formalizada. Nenhum foi selecionado para o AJ.

Antes de pontuar: baseline possível, volume suficiente, responsável disponível, dados acessíveis e risco controlável (Mapa, p. 13). Se faltar informação, marcar **desconhecido** e investigar; não atribuir nota favorável.

A matriz documental usa Impacto × Frequência × Viabilidade em 60 dias, notas 1–5 e teto 125 (Mapa, p. 12). São notas analíticas, não probabilidades nem resultados do cliente. Reavaliar com evidência real e registrar a justificativa. Uma boa nota não compensa falha num requisito eliminatório.

## Próxima entrega de investigação

O **[kit de instrumentos](instrumentos/README.md)** do passo 1 executa a spec aprovada em DEC-007, com [rastreabilidade](instrumentos/rastreabilidade.md) e [ensaio documental](instrumentos/ensaio-mesa.md). A [proposta para a barbearia](../propostas/barbearia/README.md) prepara o convite sob DEC-009/010. Com campo definido: delimitar o acesso e produzir a ficha do processo candidato com problema, responsável, volume, fluxo atual, fontes, baseline possível, lacunas e próxima atividade. Um piloto posterior deverá ter público real, critério de sucesso e condições de execução acordados. Arquitetura, framework, plataforma e multiagentes serão avaliados a partir dessas evidências.

As decisões vão para `DECISIONS.md`; o andamento, para `CURRENT_STATE.md` e `BACKLOG.md`; a reflexão e a evidência da rodada, para `WORKLOG.md`. Specs e tickets ficam em `.scratch/`.
