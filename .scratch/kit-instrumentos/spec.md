# Spec: kit de instrumentos de investigação do AJ

- Backlog-ID: AI-004
- Status: ready-for-agent (aprovada por Arthur sem alterações em DEC-007; tickets em `issues/`)
- Origem: DEC-005 (sem campo, o trabalho produz instrumentos e hipóteses) e [roteiro CBL](../../docs/cbl/README.md), passo 1 do caminho até a solução.

## Problem Statement

O AJ ainda não tem empresa nem processo piloto. Quando surgir o primeiro campo, o consultor precisará coletar evidência para GQ-01..GQ-10 em poucos dias, com o mesmo padrão em qualquer cliente, sem improvisar perguntas e sem trocar evidência por opinião ou por comparação de ferramentas. Hoje as perguntas e a evidência mínima existem só como tabela no roteiro CBL; não há roteiro de conversa, ficha, planilha ou critério que se aplique diretamente.

## Solution

Um kit versionado de instrumentos em Markdown e CSV, um por necessidade de evidência, cada um ligado às Guiding Questions que alimenta. Com o kit, o consultor sai da primeira conversa com uma ficha do processo candidato preenchida ou com as lacunas marcadas como **desconhecido**, e segue para baseline, inventário de dados, classificação de atividades, comparação de alternativas e retrospectiva. Toda resposta usa o mesmo registro de evidência: fonte/data, método, amostra, observação, interpretação, grau de confiança e próxima lacuna.

## User Stories

1. Como consultor do AJ, quero um registro de evidência padrão, para que qualquer resposta a uma GQ diga de onde veio, como foi obtida e quanto confio nela.
2. Como consultor, quero uma ficha do processo candidato, para consolidar problema, responsável, volume, fluxo atual, fontes, baseline possível, lacunas e próxima atividade num só lugar.
3. Como consultor, quero que a ficha verifique os requisitos eliminatórios (baseline possível, volume suficiente, responsável disponível, dados acessíveis, risco controlável), para descartar cedo um processo inviável.
4. Como consultor, quero marcar um campo como **desconhecido**, para que falta de informação nunca vire nota favorável.
5. Como consultor, quero um roteiro de conversa com o gestor, para levantar onde há perda de tempo, qualidade, custo ou receita (GQ-01).
6. Como consultor, quero um roteiro de conversa com quem executa o processo, para confrontar a visão do gestor com a operação real.
7. Como consultor, quero que os roteiros separem relato de observação, para que entrevistas gerem hipóteses e não conclusões.
8. Como consultor, quero um modelo de mapa AS-IS, para registrar etapas, responsáveis, exceções, esperas, erros e transferências (GQ-03).
9. Como consultor, quero um protocolo de baseline, para definir métrica, unidade, período, amostra, método e critério de sucesso antes de qualquer intervenção (GQ-04).
10. Como consultor, quero uma planilha de registro de casos, para medir volume e variabilidade por período e decidir se a janela de observação basta (GQ-02).
11. Como consultor, quero um inventário de dados e conhecimento, para saber fonte, responsável, atualização, qualidade e condições de acesso de cada insumo (GQ-05).
12. Como consultor, quero classificar cada atividade como regra fixa, linguagem, previsão ou julgamento humano, para justificar onde a IA entra e onde não entra (GQ-06).
13. Como consultor, quero um checklist de erros aceitáveis, detectáveis e reversíveis, para propor supervisão proporcional ao risco (GQ-07).
14. Como consultor, quero uma matriz de comparação de alternativas que inclua o processo atual e uma solução sem IA, para escolher a menor complexidade suficiente (GQ-08).
15. Como consultor, quero que a matriz registre qualidade, tempo, esforço de integração e custo operacional em casos reais, para comparar alternativas no mesmo critério.
16. Como consultor, quero separar ganho observado, custos completos e benefício realizado, para não apresentar horas poupadas como retorno financeiro (GQ-09).
17. Como consultor, quero um modelo de retrospectiva, para registrar o núcleo reutilizável, as adaptações e os limites de generalização (GQ-10).
18. Como Arthur, quero uma matriz de rastreabilidade GQ → instrumento → campo, para ver que nenhuma evidência mínima ficou sem instrumento.
19. Como Arthur, quero que o kit seja ensaiado antes do primeiro cliente, para corrigir lacunas sem expor o cliente a um instrumento incompleto.
20. Como outro assistente (Codex, Claude Code, Copilot), quero instrumentos em texto versionado, para retomar o preenchimento sem depender de ferramenta proprietária.
21. Como responsável no cliente, quero ver quais dados serão pedidos e por quê, para autorizar o acesso com conhecimento do uso.

## Implementation Decisions

- O kit é documentação, não software. Formatos: Markdown para roteiros, fichas, checklists e modelos; CSV para planilhas, porque é texto que funde no Git e abre em qualquer planilha. Nada de binários.
- Idioma português do Brasil e vocabulário de CONTEXT.md (Processo piloto, Baseline, Ganho mensurável, Benefício realizado, Replicabilidade, Playbook AJ).
- Cada instrumento abre com as GQs que alimenta, quando aplicar, quem responde e o que produz; e fecha com o registro de evidência padrão.
- O registro de evidência e a ficha do processo candidato são a base comum; os demais instrumentos gravam neles.
- Os requisitos eliminatórios vêm de AJ-F01, p. 13, e a pontuação Impacto × Frequência × Viabilidade de AJ-F01, p. 12; notas só com evidência, e **desconhecido** nunca pontua.
- Os instrumentos ficam junto do roteiro CBL, numa pasta própria de instrumentos; preenchimentos de um cliente real ficam fora do kit, em pasta por cliente, com política de publicação a decidir (DEC-004).
- Ferramentas de terceiros entram só como apoio opcional indicado no próprio instrumento (por exemplo, conversão de documentos para o inventário), conforme o veredito de [projetos-open-source.md](../../docs/research/projetos-open-source.md); nenhum instrumento depende delas.

## Testing Decisions

- O teste é de comportamento do kit: dado um processo, o consultor consegue preencher cada evidência mínima de GQ-01..GQ-10 com algum campo de algum instrumento.
- Verificação 1 — rastreabilidade: cada evidência mínima da tabela do roteiro CBL aponta para ao menos um campo; nenhum campo existe sem GQ.
- Verificação 2 — ensaio de mesa: aplicar o kit a um caso descrito nos PDFs, marcado como ensaio e nunca como resultado, registrando os campos que não puderam ser preenchidos e por quê.
- Verificação 3 — forma: UTF-8 sem BOM, LF, links locais válidos, CSV com cabeçalho e separador consistentes.
- Referência existente: a tabela de Guiding Questions e as regras de registro do roteiro CBL; `bootstrap.py validate` continua aprovado.

## Out of Scope

- Escolher empresa, processo ou rota até o campo (decisão de Arthur).
- Preencher o kit com dados reais ou declarar baseline, ganho ou piloto.
- Arquitetura, plataforma, modelos de IA ou multiagentes da solução.
- Instalar ou integrar ferramentas de terceiros.
- Proposta comercial, precificação e nome da oferta.

## Further Notes

O ensaio de mesa testa o instrumento, não o Challenge. Quando houver campo, a primeira aplicação real pode revelar ajustes; eles voltam como correção do kit e ficam registrados no WORKLOG.

Divisão aprovada em tickets, publicados em `issues/`:

1. Registro de evidência e ficha do processo candidato — sem bloqueio.
2. Roteiros de conversa (gestor e executor) e mapa AS-IS — bloqueado por 1.
3. Protocolo de baseline e planilha de casos — bloqueado por 1.
4. Inventário de dados, classificação de atividades e checklist de risco — bloqueado por 1.
5. Matriz de alternativas, ganho/benefício e retrospectiva — bloqueado por 3 e 4.
6. Matriz de rastreabilidade e ensaio de mesa do kit — bloqueado por 2, 3, 4 e 5.
