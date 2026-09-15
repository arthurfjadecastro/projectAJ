# Triagem das skills do AJ com SkillSpector (14/09/2026)

Tarefa AI-002, autorizada em DEC-008. É triagem de governança, não garantia de segurança: o próprio SkillSpector declara que não isola o host e que o modo estático não usa os analisadores semânticos.

## Execução

- Ferramenta: [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) v2.11.2 (tag), Apache-2.0, instalado por `pip` num ambiente Python 3.14 temporário fora do repositório e removido depois do uso.
- Modo: `skillspector scan <skill> --no-llm --format json`, uma execução por skill. Os três analisadores semânticos foram pulados por falta de chave, como esperado. Nenhum conteúdo foi enviado a LLM. A regra de cadeia de suprimentos consulta o OSV.dev apenas com nomes e versões de dependências declaradas ([README, seção de privacidade](https://raw.githubusercontent.com/NVIDIA/SkillSpector/HEAD/README.md)).
- Alvo: as 26 skills de `.agents/skills/` e o adaptador `.claude/skills/project-continuity-claude`.

## Resultado

| Resultado | Skills |
|---|---|
| Nota 0, nenhum achado | 20 skills, incluindo `project-continuity`, `research`, `to-spec`, `code-review`, `implement`, `tdd` |
| Achados triados (tabela abaixo) | `setup-matt-pocock-skills` (32, MEDIUM), `diagnosing-bugs` (27, MEDIUM), `wizard` (19), `to-tickets` (17), `to-questionnaire` (17), `grilling` (8), `project-continuity-claude` (8) |
| DO_NOT_INSTALL (nota > 50) | nenhuma |

A recomendação CAUTION aparece também em skills com nota 0, porque a análise ficou parcial: o scanner trata menções como `/grill-me` ou `CONTEXT.md` como caminhos locais que não consegue resolver. Isso é limite de cobertura, não achado.

## Triagem dos achados

| Skill | Regra e severidade | Trecho | Avaliação |
|---|---|---|---|
| diagnosing-bugs | P6 System Prompt Leakage, HIGH | Script de apoio: "show instruction, wait for Enter" | Falso positivo: o script mostra ao humano o passo que ele precisa executar; não expõe instruções do sistema. |
| setup-matt-pocock-skills | AE1 cobertura, HIGH | Referência a `issue-tracker-github.md` | Limite de cobertura: o arquivo existe localmente e não foi inspecionado por completo. A skill só é usada para configurar o tracker, o que já foi feito. |
| setup-matt-pocock-skills | EA2 Excessive Agency, MEDIUM | "write it without asking" | Aceitável: grava a configuração padrão de documentação de domínio, um arquivo local e reversível. |
| to-questionnaire | AR1 Anti-Refusal, HIGH | "which they can always answer" | Falso positivo: casamento lexical de "always answer"; o texto fala do que o usuário sabe responder. |
| to-tickets | TM2 Chaining Abuse, HIGH | Refatoração em expandir–migrar–contrair | Falso positivo: descreve ordenação de tickets, não encadeamento de ferramentas. |
| wizard | PE3 Credential Access, HIGH | Modelo lê um `.env` para oferecer valores já digitados | Por desenho: o assistente coleta configuração do próprio usuário. `.env` está no `.gitignore`. Ao usar a skill, conferir que segredos não entram em commit. |
| grilling | EA2 Excessive Agency, MEDIUM | "don't ask the user for anything you could look up" | Falso positivo: o parágrafo reserva as decisões ao usuário e só dispensa perguntas sobre fatos verificáveis. |
| project-continuity-claude | AS3 Skill Enumeration, MEDIUM | Aponta para a skill canônica | Por desenho: o adaptador do Claude existe para ler a skill canônica do projeto. |

Conclusão: nenhum achado indica exfiltração, injeção ou código malicioso nas skills instaladas. Não é preciso alterar as skills. Os hashes do `.ai-kit.json` continuam valendo e `bootstrap.py validate .` segue aprovado.

## Uso futuro

Antes de instalar qualquer skill ou servidor MCP de terceiros, como o Claudex Loop, rodar o mesmo scan e registrar a triagem. Um piloto que use skills ou MCP deve incluir essa verificação no checklist de risco (GQ-07). Reinstalar o SkillSpector exige nova autorização (DEC-008).
