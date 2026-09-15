# AIKIT no Projeto AJ

## Procedência

Base: [technetalks no commit 6c402cd](https://github.com/arthurfjadecastro/technetalks/tree/6c402cd614fcce0366db27024ad9cd9a56b3bc59/ai-kit), AIKIT 1.1.0. Em 14/09/2026, o HEAD do clone consultado correspondia ao HEAD remoto e `ai-kit/` não tinha mudanças locais. A cópia pessoal de bootstrap era 1.0.0; foi usada a origem solicitada, sem atualizar configurações globais.

Matt Pocock: [skills no commit 3cca18b](https://github.com/mattpocock/skills/tree/3cca18b368ae95cdbdebbff572ccafa662551015), versão 1.2.3. O bootstrap conferiu os arquivos do snapshot local contra o lock antes de copiar. O projeto instalado não depende desse cache. Licença em `.agents/skills/MATTPOCOCK-LICENSE`.

Inclui o perfil completo da origem: 25 skills de engineering/productivity, recursos auxiliares, `project-continuity`, adaptador Claude de continuidade, templates, instalador, validador, regras Git/LF/UTF-8 e CI. `misc` e `in-progress` não integram esse perfil. Não foram herdados documentos do evento, autorizações de publicação, credenciais ou escolhas comerciais do technetalks.

## Usar as skills

| Cliente | Instrução de entrada | Como chegar à skill |
|---|---|---|
| Codex | `AGENTS.md` | `.agents/skills/`; seletor ou pedido explícito pelo caminho |
| Claude Code | `CLAUDE.md` | `/project-continuity-claude`; para Matt Pocock, plugin se disponível ou leitura explícita do SKILL.md canônico |
| GitHub Copilot | `.github/copilot-instructions.md` | `.agents/skills/`; seleção conforme o cliente ou leitura explícita pelo caminho |

Exemplo portável:

> Leia e aplique `.agents/skills/grill-with-docs/SKILL.md`, resolvendo as skills referenciadas em `.agents/skills/`. Use `docs/cbl/README.md`, `CONTEXT.md` e os registros do projeto. Comece pelas perguntas ainda sem resposta; preserve o Challenge documentado.

Os arquivos Matt Pocock permanecem iguais ao upstream. Quando uma skill menciona `Skill`, `AskUserQuestion`, `Task`, `/nome` ou ferramenta de tracker, use a capacidade equivalente disponível no cliente. Se não houver invocador, leia o SKILL.md e suas referências. Publicação no tracker significa arquivo em `.scratch/`, conforme `docs/agents/issue-tracker.md`. Se uma etapa exigir ferramenta inexistente, registre a limitação; uma revisão feita pelo próprio agente não deve ser anunciada como independente.

O Claude não recebe automaticamente 25 comandos locais em `.claude/skills/`: o kit original usa leitura canônica como fallback. Plugins podem ter versões e nomes diferentes. Escolha uma cópia por execução; para reproduzir esta base, priorize a cópia local fixada. Invocar todas as skills de uma vez não faz parte do fluxo.

Seleção de métodos em [workflow](agents/workflow.md); aplicação ao AJ em [CBL](cbl/README.md).

## Operação entre máquinas

Texto UTF-8 sem BOM e LF, caminhos relativos e nenhum symlink/junction versionado. O CLI requer somente Python 3.10+; Git é necessário para sincronização. Scripts `.sh` upstream exigem Bash e as ferramentas indicadas pela própria skill. Credenciais e configuração do assistente são locais a cada máquina.

Antes de editar: confira branch, upstream, arquivos pendentes e reservas no CURRENT_STATE. Com upstream e árvore limpa, `git pull --ff-only`. Sem upstream, registre trabalho local e prossiga no escopo autorizado. Preserve mudanças locais antes de reconciliar divergências; nunca force push.

Na entrega: valide, sincronize os registros, inspecione diff e, quando o destino e publicação estiverem autorizados, faça commit/push. Confirme que `git ls-remote origin refs/heads/<branch>` corresponde ao HEAD. Somente então anuncie que outro clone recebeu a entrega.

## Validação e manutenção

Comandos no README. Os 13 testes de origem foram incorporados em `tests/ai_kit/`, adaptando somente o caminho do runtime. Cobrem instalação mínima, idempotência, relocação, conflito, integridade, registro e bootstrap pessoal. A instalação real das 25 skills é validada pelo inventário e pelo lock.

`validate` confere registros e hashes; `doctor` acrescenta inventário de ferramentas. Eles não comprovam descoberta em clientes, resultado do piloto, autorização humana nem execução remota de CI.

Runtime, skills e templates instalados ficam protegidos por hashes. Personalizações do AJ estão nos registros, `docs/`, testes e workflow adicional. Atualizar a base exige gerar uma instalação temporária, comparar mudanças e integrar conscientemente. Evite alterar o manifesto para simplesmente silenciar um erro. O histórico dos PDFs permanece independente do kit.

## Fontes de compatibilidade

Consultadas em 14/09/2026:

- [OpenAI: descoberta de skills locais](https://learn.chatgpt.com/docs/build-skills): `.agents/skills`, carregamento por escopo e nomes duplicados.
- [Claude Code: skills](https://code.claude.com/docs/en/skills): diretório `.claude/skills` e plugins com namespace; justifica o fallback explícito deste kit.
- [GitHub Copilot: agent skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills): diretórios de projeto `.agents/skills`, `.claude/skills` e `.github/skills`.

A configuração está preparada para os três clientes. As sessões reais de Claude e Copilot e a execução no macOS ainda precisam ser exercitadas nesses ambientes.
