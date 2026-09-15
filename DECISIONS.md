# Decisões

## DEC-001 — Bootstrap de Projeto AJ

Em 2026-09-14T18:23:44-03:00, a execução do bootstrap autorizou criar a base local de engenharia. O produto e a publicação exigem escopo próprio. Não há autorização herdada para remote, push ou serviços externos.
Padrões: tracker Markdown local versionado; labels padrão; CONTEXT único e ADRs em `docs/adr/`; continuidade compartilhada entre assistentes. A escolha do perfil e as versões instaladas estão em `.ai-kit.json`.
Registre novas decisões com motivo, fonte, impacto, status e eventual decisão substituída. Não use a conversa como única memória dessas escolhas.

## DEC-002 — Reutilização e descoberta autorizadas

Em 2026-09-14T18:25:19-03:00, registrado o pedido do usuário de reutilizar toda a lógica do AIKIT do technetalks, com Windows/macOS, Codex, Claude Code, GitHub Copilot e skills Matt Pocock; ler os dois PDFs e iniciar a descoberta. O usuário confirmou que CBL se refere à metodologia da Apple (Challenge Based Learning). A preferência da sessão é trabalhar com Astra; isso não é dependência do kit nem obrigação dos outros clientes.

AI-001 abrange configuração local, documentação e descoberta. O tracker segue Markdown local, as labels e o glossário seguem os padrões do kit. O Challenge já descrito nos materiais é a base da investigação, com prazo/marco e acesso ao piloto a esclarecer. Remote e política de publicação pertencem ao Projeto AJ e ainda não foram definidos. Autorizações do technetalks não foram transferidas.

## DEC-003 — Procedência preservada e adaptações do AJ

Adotado AIKIT 1.1.0 da origem solicitada, commit `6c402cd614fcce0366db27024ad9cd9a56b3bc59`, com Matt Pocock 1.2.3 no commit `3cca18b368ae95cdbdebbff572ccafa662551015`. A cópia pessoal 1.0.0 não foi usada como fonte final nem atualizada globalmente.

O runtime e as skills foram preservados com hashes originais. Personalizações locais ficam em instruções e registros editáveis, docs, testes da origem com caminho adaptado e uma workflow adicional para Windows/macOS/Linux. Motivo: manter reprodução e atualização auditáveis. Astra é preferência da sessão; outras máquinas e assistentes usam o mesmo contexto sem um modelo global obrigatório.

## DEC-004 — Destino do repositório

Em 2026-09-14T19:29:21-03:00, Arthur indicou `https://github.com/arthurfjadecastro/projectAJ.git` como destino deste projeto. Isso define o ponto de encontro entre máquinas e assistentes e substitui a ausência de remote descrita em DEC-001; a autorização do technetalks continua não transferida.

Ressalva registrada antes do primeiro push: o repositório contém os dois PDFs originais do cliente e suas transcrições integrais em `docs/research/fontes/`. Se o destino for público, publicá-los expõe material de terceiros. A visibilidade e a lista do que pode ser publicado precisam ser confirmadas por Arthur; até lá o push não é executado e AI-003 permanece NOT_STARTED. Não usar `push --force` nem reescrever histórico publicado.

## DEC-005 — Sem empresa piloto e sem marco dos 60 dias

Em 2026-09-14T19:29:21-03:00, respondendo às duas perguntas deixadas por AI-001, Arthur declarou que **não existe empresa em que possa atuar** e que, por consequência, **não há marco vigente** para o prazo de 60 dias. Fonte: declaração do próprio usuário nesta sessão; substitui a pendência aberta em `docs/cbl/README.md`, não a formulação documental do Challenge.

Impacto: o Challenge dos materiais permanece como base documental, mas sem público real, sem baseline e sem contagem de prazo. GQ-01..GQ-10 continuam sem evidência de campo e não podem ser respondidas por suposição. Enquanto não houver acesso a um processo real, o trabalho permanece em Investigate, produzindo instrumentos e hipóteses; nenhuma afirmação de piloto validado, ganho medido ou modelo replicável pode ser feita. A fase Act do CBL fica condicionada à obtenção de um campo de observação.

## DEC-006 — Repositório público com todo o material

Em 2026-09-14T23:05:56-03:00, Arthur decidiu publicar o Projeto AJ como repositório **público** em `github.com/arthurfjadecastro/projectAJ`, incluindo os dois PDFs originais e as transcrições em `docs/research/fontes/` ("não tem problema subir os PDFs"). Resolve a ressalva de DEC-004 e autoriza AI-003: commit na branch main, push para esse destino e conferência do SHA remoto. Continua proibido `push --force` ou reescrever histórico publicado. Configurações locais já ignoradas (`.claude/settings.local.json`, `.env`, `.codex/config.local.toml`) permanecem fora. Os commits trazem a identidade Git configurada na máquina.

## DEC-007 — Kit de instrumentos aprovado

Em 2026-09-14T23:05:56-03:00, Arthur aprovou sem alterações a spec `.scratch/kit-instrumentos/spec.md` e a divisão em seis tickets. AI-004 passa a estar autorizada para execução, com o escopo e o "fora do escopo" da spec. Ensaios de mesa são testes de instrumento, nunca resultado de campo (DEC-005).

## DEC-008 — SkillSpector em ambiente isolado

Em 2026-09-14T23:05:56-03:00, Arthur autorizou instalar o NVIDIA SkillSpector num ambiente Python temporário, fora do repositório, e rodá-lo em modo estático, sem LLM e sem chave, sobre `.agents/skills/`. O relatório é triagem de governança, não garantia de segurança. O ambiente é removido após o uso e não vira dependência do projeto. Instalar outras ferramentas avaliadas em AI-002 exige nova autorização.

A rota até o campo (empresa da rede, processo próprio, caso simulado) **não foi decidida**: Arthur pediu esclarecimento. Permanece em aberto no roteiro CBL.


## DEC-009 — Retomada no Codex e barbearia candidata

Em 2026-09-15T14:37:29-03:00, Arthur pediu pull e continuidade após trocar Claude Code por Codex. A retomada executa AI-004 já autorizada por DEC-007 e prepara AI-005: proposta/apresentação para convidar o dono de uma barbearia MEI. Fonte: declarações de Arthur nesta sessão. Arthur confirmou que existe esse contato, mas precisa convencê-lo a participar.

Impacto: há uma candidata pela rede de contatos; ainda não há participação aceita, processo observado, acesso a dados ou início dos 60 dias. Atualiza a disponibilidade de um contato em DEC-005, preservando suas condições de evidência e marco. Atendimento no WhatsApp, organização da agenda e redução de faltas são hipóteses do texto trazido à conversa. Não há escolha de arquitetura nem autorização para contatar o dono por ferramenta.

## DEC-010 — Diagnóstico inicial gratuito

Em 2026-09-15T14:37:29-03:00, Arthur escolheu para AI-005: **diagnóstico inicial gratuito; implantação negociada depois**. Fonte: resposta explícita à pergunta sobre a oferta ao dono da barbearia.

Impacto: a apresentação oferece diagnóstico gratuito. Prazo, participação esperada e atividades descritos são sugestões a combinar com o dono. Implantação, custos externos, manutenção e uso do caso dependem de acordo posterior; não há valor, ferramenta ou ganho prometido. A elaboração e revisão do material estão autorizadas agora. Não é aceite do piloto pelo participante.
