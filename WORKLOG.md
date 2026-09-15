# Histórico de trabalho

Acrescente entradas; preserve as anteriores.

## 2026-09-14T18:23:44-03:00 | AI-000 | Início do bootstrap

Solicitada criação da base de engenharia de Projeto AJ. Primeiras escritas: CURRENT_STATE e BACKLOG. Validação e conclusão serão registradas após execução; nenhuma funcionalidade ou publicação autorizada por este registro.

## 2026-09-14T18:23:44-03:00 | AI-000 | Bootstrap validado

Validação estrutural e integridade executadas com sucesso. Escopo de produto e publicação aguardam autorização própria.

## 2026-09-14T18:25:19-03:00 | AI-001 | Adaptação e leitura inicial

Agente: Codex (GPT-6 Astra), Windows. Origem technetalks consultada somente em leitura: HEAD local e remoto 6c402cd614fcce0366db27024ad9cd9a56b3bc59; sem diferenças locais em ai-kit/. As alterações de outro agente nos documentos do evento foram preservadas. O kit da origem é 1.1.0, enquanto a instalação pessoal é 1.0.0; adotada a origem solicitada. Dry-run aprovado (124 arquivos novos) e bootstrap executado com snapshot Matt Pocock 1.2.3 conferido por hash. A legenda do BACKLOG gerada pelo instalador duplicava DONE; corrigida no registro editável. Bibliotecas temporárias pypdf e PyMuPDF instaladas apenas para ler os anexos. A leitura pelo sandbox falhou por permissões e o helper passou a falhar na atualização; comandos de inspeção usam execução aprovada fora do sandbox quando necessário.

## 2026-09-14T18:34:48-03:00 | AI-001 | Contexto CBL e portabilidade preparados

Agente: Codex (GPT-6 Astra). Lidas 45 páginas dos dois PDFs; extrações por página em docs/research/fontes/; conferência visual da matriz (Mapa, p. 12), do fluxo (Mapa, p. 16) e da formulação CBL (Top perguntas, p. 16). Originais preservados com SHA-256 registrado. Síntese identifica o Challenge já existente, o refinamento entre os relatórios, capacitação opcional e ausência de dados de campo. CBL da Apple confirmado pelo usuário e consultado nas fontes primárias. Perguntas enviadas sobre vigência/marco dos 60 dias e acesso à empresa piloto; sem resposta até esta entrada.

README e AGENTS adaptados, guia de uso dos três assistentes e de Bash no Windows, glossário e mapa de Guiding Questions registrados. Copiados os 13 testes da origem, alterando apenas localização do runtime, e adicionada matriz CI de seis ambientes. Nenhuma workflow executada remotamente. Corrigida a codificação dos registros desta própria sessão: a primeira passagem pelo stdin do PowerShell havia convertido acentos em interrogações; conteúdo e horários foram restaurados, com UTF-8 explícito nas escritas seguintes. Validações finais pendentes.

## 2026-09-14T18:39:49-03:00 | AI-001 | Verificação e entrega da base local

Agente: Codex (GPT-6 Astra), Windows/Python 3.14. Executados `python -m unittest discover -s tests/ai_kit -v` (13 testes, todos aprovados), `python tools/ai-kit/scripts/bootstrap.py validate .` e `doctor .` (aprovados). Reexecução dry-run usando a origem 1.1.0 e snapshot verificado: zero arquivos novos. Verificados UTF-8 sem BOM/LF, ausência de corrupção e links Markdown locais; a checagem inicial de interrogações encontrou somente query strings legítimas das URLs transcritas, conferidas e excluídas desse diagnóstico. Confirmados 25 skills + continuidade e SHA-256 dos dois PDFs inalterados. `git check-attr` confirmou texto LF, WORKLOG merge=union e PDFs binários. Git local inicializado em main; nenhum commit ou push realizado.

Revisão independente por subagente Astra, somente leitura, comparou requisitos e padrões, conferiu 108 hashes, runtime idêntico à origem, testes alterados apenas nos caminhos e coerência dos documentos CBL: nenhum achado bloqueante ou correção necessária. O revisor executou validate, mas não repetiu a suíte ou sessões de clientes. Tracker local materializado em .scratch/README.md; changelog e passagem atualizados. Bibliotecas de PDF e renderizações temporárias removidas após conferir o caminho dentro do projeto.

Limites reais: compatibilidade de execução observada nesta entrega somente no Windows; matriz CI Ubuntu/Windows/macOS x Python 3.10/3.14 preparada, sem execução remota. Codex e Claude CLI encontrados; copilot e gh não encontrados no PATH (não é auditoria das extensões instaladas). Descoberta das skills em sessões reais de Claude/Copilot e execução no macOS pendentes. A pasta está local e sem remote; retomada por clone depende de destino/autorização de publicação próprios. AI-001 entregue em READY_FOR_REVIEW, sem arquivos em edição, aguardando as respostas sobre prazo e acesso ao piloto.

## 2026-09-14T19:29:21-03:00 | AI-002 | Abertura pelo GitHub Copilot

Agente: GitHub Copilot (Claude Opus 5), Windows. Registro reconstruído pelo Claude Code a partir dos arquivos gravados, porque a sessão foi interrompida antes de acrescentar esta entrada. Arthur respondeu às pendências de AI-001: destino `github.com/arthurfjadecastro/projectAJ` (DEC-004) e inexistência de empresa acessível e de marco dos 60 dias (DEC-005). O Copilot assumiu AI-002 em CURRENT_STATE/BACKLOG e iniciou a consulta à API do GitHub para os 15 projetos listados por Arthur; nenhum resultado foi gravado.

## 2026-09-14T22:25:53-03:00 | AI-002 | Passagem ao Claude Code, avaliação e roteiro

Agente: Claude Code (Claude Opus 5), Windows. Arthur transferiu a tarefa. Reconciliação: após a entrega de AI-001, apenas CURRENT_STATE, BACKLOG e DECISIONS haviam mudado; sem edição concorrente. Tomada registrada em CURRENT_STATE e BACKLOG antes das demais escritas.

Metadados dos 15 repositórios coletados pela API do GitHub: todos existem; `basecamp/omarchy` redireciona para `omacom/omarchy`; PhoneHarness sem licença; OpenMontage AGPL-3.0; Claudex Loop NOASSERTION. Leitura aprofundada delegada a subagente (skill research) usando README, LICENSE, SECURITY/SAFETY, feeds de release e issues, sem instalar, clonar ou executar nada. Resultado em docs/research/projetos-open-source.md, revisado: 1 "usar agora" (SkillSpector, apoio interno, depende de autorização para instalar), 1 "testar quando houver campo" (anydoc), 6 adiados, 7 descartados. Refutado que Arkify seja mapa de código; confirmado o preview sem auditoria do DeepSeek Harness; OmniRoute descartado por disfarce de tráfego, compartilhamento de assinatura e chaves em texto puro; alerta de typosquatting do OpenMontage confirmado como PSA de usuário, não dos mantenedores. Não verificados: releitura de estrelas/datas (limite anônimo da API), licença do dataset do PhoneHarness, suporte pt-BR do no-ai-slop e benchmarks declarados pelos próprios projetos.

Roteiro CBL reescrito nas seções afetadas: respostas de DEC-005, mapa "temos / hipótese / falta", caminho em seis passos até a solução, rotas possíveis até o campo (não decididas) e regra de que ferramenta não responde Guiding Question. README e síntese de pesquisa atualizados nos trechos desatualizados. Spec rascunho do kit de instrumentos em `.scratch/kit-instrumentos/spec.md` (AI-004, NOT_STARTED); tickets não publicados, aguardando aprovação da divisão. Validações: UTF-8 sem BOM, LF e links locais dos arquivos alterados conferidos por script; `python -m unittest discover -s tests/ai_kit` com 13 testes aprovados; `validate .` aprovado após atualizar HANDOFF. Nenhum commit ou push.

## 2026-09-15T00:07:28-03:00 | AI-002 | Decisões de Arthur, tickets e triagem SkillSpector

Agente: Claude Code (Claude Opus 5), Windows. Arthur respondeu às quatro escolhas: repositório público com PDFs e transcrições (DEC-006), spec e seis tickets aprovados sem alterações (DEC-007), SkillSpector autorizado em ambiente isolado (DEC-008). A rota até o campo não foi decidida: Arthur declarou estar confuso nesse ponto e ela segue em aberto no roteiro CBL.

Tickets 01..06 publicados em `.scratch/kit-instrumentos/issues/` com Backlog-ID AI-004 e bloqueios; spec marcada ready-for-agent. SkillSpector v2.11.2 instalado por pip num venv Python 3.14 na pasta de rascunho da sessão, fora do repositório. Scan `--no-llm` em JSON das 26 skills e do adaptador do Claude: 20 com nota 0; maior nota 32 (MEDIUM, setup-matt-pocock-skills); nenhuma DO_NOT_INSTALL. Os oito achados foram triados como falso positivo, limite de cobertura ou comportamento por desenho, e registrados em docs/research/skillspector-triagem-2026-09-14.md. O primeiro parser buscou `findings` e mostrou zero achados; o relatório usa `issues`, e a tabela foi refeita. Venv removido; nenhum resíduo do scanner no repositório; `validate .` aprovado. AI-002 entregue em READY_FOR_REVIEW.

## 2026-09-15T00:20:24-03:00 | AI-003 | Primeira publicação no GitHub

Agente: Claude Code (Claude Opus 5), Windows. Autorização: DEC-004 e DEC-006. O destino `github.com/arthurfjadecastro/projectAJ` existia, público, com branch padrão main e vazio. Antes do commit: busca por segredos (padrões de chave, token e senha) e por caminhos absolutos de usuário sem ocorrências; `.claude/settings.local.json` confirmado como ignorado. Commit inicial com 147 arquivos, incluindo os dois PDFs e as transcrições, autoria da identidade Git configurada na máquina. `git remote add origin` e `git push -u origin main` concluídos; `git ls-remote origin refs/heads/main` retornou `def62f1ac1d4d6c2d35f6abac21e0964f4356ddb`, igual ao HEAD local. A primeira tentativa de commit falhou antes de gravar, porque o PowerShell não repassa here-string como stdin; refeita com arquivo de mensagem. Os registros deste encerramento seguem num commit posterior, cujo SHA é conferido fora desta entrada. Sem force push.

## 2026-09-15T00:27:00-03:00 | AI-003 | Primeira execução da CI remota

Agente: Claude Code (Claude Opus 5). Registros de encerramento publicados em `f84237e924367edd99166799bef5eb4a1ca20665`, conferido por `git ls-remote`. Para o commit `def62f1`, a API do GitHub Actions mostra `AI continuity` (job validate) e `AJ compatibility` com os seis jobs aprovados: ubuntu-latest, windows-latest e macos-latest, cada um em Python 3.10 e 3.14 ([run 34924498870](https://github.com/arthurfjadecastro/projectAJ/actions/runs/34924498870), [run 34924498843](https://github.com/arthurfjadecastro/projectAJ/actions/runs/34924498843)). É a primeira execução observada do kit fora do Windows local. As execuções de `f84237e` ainda estavam em fila no momento desta entrada. Sessões reais de Claude e Copilot em macOS continuam não exercitadas.

## 2026-09-15T14:37:29-03:00 | AI-004 | Retomada e reconciliação no Codex

Arthur transferiu a continuidade do Claude ao Codex e solicitou pull. Git: main/origin/main em fc6ec80, árvore limpa, git pull --ff-only retornou Already up to date. HANDOFF encerrou edição do Claude e liberou arquivos. Nenhuma execução de AI-004 existia; preservados AI-001/002 em READY_FOR_REVIEW. Primeiras escritas: CURRENT_STATE, depois BACKLOG. Execução seguirá DEC-007 e os seis tickets, com integrador único dos registros. Skills lidas: project-continuity, using-superpowers, brainstorming (design do kit já aprovado), implement e dispatching-parallel-agents. Leitura de fontes delegada sem escrita. Terminal e node falharam pelo helper do sandbox; exec_command fora do isolamento passou por aprovação e funciona. A primeira gravação sofreu conversão pelo pipeline PowerShell; detectada imediatamente e refeita com UTF-8 explícito, preservando integralmente os registros anteriores do HEAD.

## 2026-09-15T14:37:29-03:00 | AI-005 | Candidata e oferta esclarecidas

Arthur informou que existe dono de barbearia MEI a convidar e pediu proposta/apresentação para obter participação. Escolheu diagnóstico gratuito, com implantação negociada depois (DEC-009/010). Ainda não há campo autorizado nem observação. A skill Presentations orienta o material. Nenhuma mensagem enviada ao dono e nenhum resultado de campo inferido.

## 2026-09-15T17:36:29-03:00 | AI-004 | Passagem ao Claude Code e conclusão dos tickets

Agente: Claude Code (Claude Opus 5), Windows. O Codex atingiu o limite de uso durante AI-004/AI-005, e Arthur transferiu a continuidade. Reconciliação: `main` igual a `origin/main` em `fc6ec80`; alterações do Codex sem commit (registros, DEC-009/010, barbearia-candidata.md, índices e instrumentos dos tickets 01, 02 e 04, conferidos completos). Tickets 03, 05 e 06 e a pasta da proposta não existiam; os subagentes do Codex pararam junto com ele. Tomada registrada em CURRENT_STATE antes das demais escritas.

Tickets 03, 05 e 06 implementados por subagente, com arquivos disjuntos: protocolo-baseline.md (B1–B12, B9 = acordo final do critério, como RG7 já referenciava), casos.csv (cabeçalho de 21 colunas, sem dados), alternativas-ganho-retrospectiva.md (X1–X9 com ALT-00 processo atual e ALT-01 sem IA obrigatórios; G1–G8; T1–T7), rastreabilidade.md (10 GQs cobertas; 142 campos com GQ) e ensaio-mesa.md (ENSAIO documental sobre o caso comercial de AJ-F01, p. 6, 12, 13 e 17–20, sem nota, baseline ou ganho). As correções CR-06 a CR-09 e V-01, que o ensaio apontou em instrumentos existentes, foram aplicadas pelo integrador: natureza `documental` em K1, métricas completas da p. 19 no exemplo (conferidas na transcrição), pergunta sobre casos sem desfecho em RE3, coluna `ID / GQ` na priorização e referências B em F5, R1 e R2. AI-004 entregue em READY_FOR_REVIEW.

## 2026-09-15T17:36:29-03:00 | AI-005 | Apresentação e roteiro da reunião

Arthur pediu um PPT para uma reunião de 30 minutos no escritório dele, que primeiro apresente a ideia e encante, depois deixe claro o que é preciso saber e o que se quer fazer. Criados em docs/propostas/barbearia/: apresentacao-diagnostico-barbearia.pptx (13 slides, 16:9, notas do apresentador com tempo, fala e o que anotar) e o PDF equivalente, gerados pela automação COM do PowerPoint 16 instalado, sem biblioteca nova; roteiro-reuniao.md, com checklist, agenda, folha de anotação em blocos A–D ligada aos campos do kit e passos pós-reunião; e README. Ordem: problema na voz do dono, possibilidade como exemplo ilustrativo, por que diagnosticar primeiro, proposta em três passos, entregas, o que é pedido, seis perguntas, medição sem número prometido, garantias, depois do diagnóstico e pedido direto. Sem preço, prazo de resultado ou ferramenta definida (DEC-010); nome da barbearia e contato de Arthur ficam como campos a preencher. Revisão visual das 13 prévias em PNG, com ajustes de espaçamento e remoção de setas no slide 6.

A primeira geração falhou porque o PowerPoint rejeitava tamanhos de fonte fracionários passados como argumento do PowerShell; resolvido tipando o parâmetro. Para os dados do participante foi criada `privado/` com um `.gitignore` próprio que ignora todo o conteúdo. A primeira tentativa, que alterava o `.gitignore` da raiz, quebrava o inventário do AIKIT e foi revertida. Validações: UTF-8 sem BOM, LF e links locais de 24 arquivos alterados sem problema; 13 testes de `tests/ai_kit` aprovados; `git check-ignore` confirmou a proteção de `privado/`. Nada foi enviado ao dono. AI-005 entregue em READY_FOR_REVIEW para revisão de Arthur.
