# Projeto AJ

Construção e validação de um modelo replicável de consultoria em IA, orientado a melhorar um processo empresarial real e comprovar resultado. A metodologia é **Challenge Based Learning (CBL), da Apple**, confirmada por Arthur em 14/09/2026.

Os materiais fornecidos já apresentam Big Idea, Essential Question e um Challenge de até 60 dias. O ponto de retomada é a investigação por **Guiding Questions**. Em 14/09/2026 Arthur informou que não há empresa acessível nem marco vigente (DEC-005): a investigação prepara instrumentos e hipóteses até existir um processo real. Não há aplicação ou stack de produto definida.

## Começar pela descoberta

- [Ponto de partida CBL e perguntas de investigação](docs/cbl/README.md)
- [Síntese dos dois PDFs e limites das evidências](docs/research/README.md)
- [Avaliação de projetos open source de terceiros](docs/research/projetos-open-source.md)
- [Glossário do projeto](CONTEXT.md)
- [Decisões e autorização](DECISIONS.md)
- [Estado e próxima ação](CURRENT_STATE.md)

Os PDFs originais permanecem na raiz. Transcrições por página em `docs/research/fontes/` facilitam a leitura pelos três assistentes; tabelas e diagramas devem ser conferidos no original.

## Retomar com qualquer assistente

> Continue o Projeto AJ pelo estado persistido. Verifique Git e sincronize se houver upstream configurado e árvore limpa. Leia README.md, DECISIONS.md, CURRENT_STATE.md, BACKLOG.md, HANDOFF.md e as duas últimas entradas de WORKLOG.md. Depois leia AGENTS.md e o adaptador do seu cliente. Consulte docs/cbl/README.md e as fontes indicadas para retomar a investigação. Apresente tarefa, status e próxima ação; prossiga no escopo já autorizado.

Codex usa `AGENTS.md`; Claude Code usa `CLAUDE.md`; GitHub Copilot usa `.github/copilot-instructions.md`. A preferência por Astra nesta sessão não cria dependência de modelo no projeto.

## Base reutilizável

AIKIT **1.1.0** proveniente do technetalks, com **25 skills Matt Pocock 1.2.3** e `project-continuity`. Conteúdo canônico em `.agents/skills/`, recursos e licença incluídos; versão e checksums em `.ai-kit.json`. Runtime autocontido em `tools/ai-kit/`.

O tracker é Markdown local em `.scratch/`; `BACKLOG.md` mantém os status de execução. [Uso, compatibilidade e procedência](docs/ai-kit.md).

## Verificar no Windows

Requisitos do kit: Python 3.10+ e Git. Na raiz, PowerShell:

```powershell
python tools/ai-kit/scripts/bootstrap.py validate .
python tools/ai-kit/scripts/bootstrap.py doctor .
python -m unittest discover -s tests/ai_kit -v
```

## Verificar no macOS

Na raiz do clone, Terminal:

```sh
python3 tools/ai-kit/scripts/bootstrap.py validate .
python3 tools/ai-kit/scripts/bootstrap.py doctor .
python3 -m unittest discover -s tests/ai_kit -v
```

A workflow `AJ compatibility` está preparada para Ubuntu, Windows e macOS com Python 3.10 e 3.14. Preparar a matriz não equivale a executá-la. Resultados realmente observados ficam no WORKLOG.

Scripts Bash de algumas skills, como `wizard`, precisam de Bash (por exemplo, Git Bash no Windows); o kit Python não instala essas ferramentas. Descoberta no seletor e funcionamento de cada assistente devem ser conferidos no cliente em uso.

## Sincronização

O Git local guarda o trabalho; a retomada por clone em outra máquina depende de um remote do **Projeto AJ**, commit e push conferidos. O destino é o repositório público `github.com/arthurfjadecastro/projectAJ` (DEC-004 e DEC-006), com a branch main publicada; em outra máquina, clone-o e siga a seção **Retomar com qualquer assistente**. O repositório technetalks é somente a origem do kit.
