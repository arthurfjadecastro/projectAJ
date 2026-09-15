# Projetos open source avaliados para o Projeto AJ (AI-002)

Data da consulta: 2026-09-14. Escopo: 15 repositórios do GitHub indicados por uma conversa anterior com outro assistente, que aqui é tratada como fonte secundária e não confiável.

## Método e limites

- **Fontes primárias:** README bruto (`https://raw.githubusercontent.com/<repo>/HEAD/README.md`), arquivo de licença bruto (`.../HEAD/LICENSE`), feed de releases (`https://github.com/<repo>/releases.atom`), arquivos SECURITY/SAFETY e issues do próprio repositório. As URLs estão em cada seção.
- **Metadados** (estrelas, criação, último push, licença detectada): coletados uma vez pela API do GitHub em 2026-09-14, no início de AI-002. Na leitura aprofundada, o limite anônimo da API (60 req/h) se esgotou; por isso, estrelas e datas não foram consultadas de novo. O redirecionamento `basecamp/omarchy` → `omacom/omarchy` foi confirmado pela própria API.
- **Nada foi instalado, clonado ou executado.** A avaliação é só de aderência analítica: sem campo (DEC-005), nenhuma ferramenta responde uma GQ. O papel máximo possível é **instrumento**, **candidata de intervenção** (a comparar em GQ-08) ou **apoio interno** ao método do AJ.
- **Estrelas não são evidência** de qualidade, segurança ou adequação. Cinco repositórios têm menos de três meses. Benchmarks e estatísticas citados nos READMEs são alegações do próprio projeto e não foram verificados.

## Tabela-resumo

| Projeto | Papel | GQs | Licença | Esforço | Veredito |
|---|---|---|---|---|---|
| NVIDIA/SkillSpector | Apoio interno (governança de skills) | GQ-07 só se a intervenção usar skills/MCP | Apache-2.0 | Baixo | **Usar agora (sem campo)** |
| firecrawl/anydoc | Instrumento; componente de candidata | GQ-03, GQ-05, GQ-08 | MIT | Baixo | **Testar quando houver campo** |
| chaseai-yt/claudex-loop | Apoio interno (revisão de planos) | nenhuma (fase Act) | MIT com preâmbulo (API: NOASSERTION) | Médio | **Adiar** |
| petergyang/no-ai-slop | Apoio interno (qualidade de texto) | nenhuma | MIT | Baixo | **Adiar** |
| trycompai/crm | Candidata de intervenção (vendas) | GQ-08; referência para GQ-07 | MIT | Alto | **Adiar** |
| deepseek-ai/deepseek-harness | Candidata genérica (harness de agente) | GQ-08 (potencial) | MIT | Médio | **Adiar** |
| herdrdev/herdr | Apoio interno (operar agentes) | nenhuma | Apache-2.0 | Médio | **Adiar** |
| stablyai/orca | Apoio interno (operar agentes) | nenhuma | MIT | Médio | **Adiar** |
| diegosouzapw/OmniRoute | nenhum aceitável | nenhuma | MIT | Médio | **Descartar** |
| PhoneHarness/PhoneHarness | Leitura conceitual (artigo) | GQ-06/07 só como referência | sem licença | Alto | **Descartar** (como ferramenta) |
| calesthio/OpenMontage | nenhum | nenhuma | AGPL-3.0 | Alto | **Descartar** |
| browser-use/video-use | nenhum | nenhuma | MIT | Médio | **Descartar** |
| omacom/omarchy | nenhum | nenhuma | MIT | Alto | **Descartar** |
| aaaalabs/arkify | nenhum | nenhuma | MIT | Baixo | **Descartar** |
| Kevin-Liu-01/Claude-of-Tanks | nenhum | nenhuma | MIT + conteúdo reservado | n/a | **Descartar** |

## Fichas

### NVIDIA/SkillSpector — https://github.com/NVIDIA/SkillSpector
- **O que faz:** escaneia skills de agentes (Claude Code, Codex, MCP) antes da instalação. Procura injeção de prompt, exfiltração de dados, código perigoso e riscos de cadeia de suprimentos, e devolve uma nota de risco de 0 a 100 em terminal, JSON, Markdown ou SARIF.
- **Licença:** Apache-2.0 (arquivo LICENSE); permite uso comercial, com aviso de licença e de modificações. O README avisa que a instalação baixa software de terceiros com licenças próprias.
- **Maturidade:** criado em 2026-03-21; releases frequentes, última v2.11.2 em 2026-09-09.
- **Adoção: Baixo.** Python 3.12+ com `uv`/pip, ou Docker. O modo estático (`--no-llm`) dispensa chave de API.
- **Dados e riscos:** no modo LLM, o conteúdo da skill vai ao provedor configurado (o padrão é `nv_build`; há Anthropic, OpenAI, Ollama local e outros). A regra SC4 consulta o OSV.dev, com fallback offline. O README cita 26,1% de skills vulneráveis e 5,2% com indício de intenção maliciosa num conjunto de 31.132 skills; o número é do próprio projeto.
- **Relação com GQs:** apoio interno. O repositório do AJ usa skills em `.agents/skills/` e cogita adicionar skills de terceiros; o escaneamento é controle de governança do próprio método. Se um piloto futuro usar skills/MCP, entra como controle em GQ-07.
- **Veredito: Usar agora (sem campo)** no modo `--no-llm` sobre `.agents/skills/` e antes de instalar qualquer skill externa. O resultado é triagem, não garantia. Autorizado em DEC-008 e executado em 14/09/2026: [triagem das skills do AJ](skillspector-triagem-2026-09-14.md), sem nenhum DO_NOT_INSTALL.
- Fontes: https://raw.githubusercontent.com/NVIDIA/SkillSpector/HEAD/README.md · https://raw.githubusercontent.com/NVIDIA/SkillSpector/HEAD/LICENSE · https://github.com/NVIDIA/SkillSpector/releases.atom

### firecrawl/anydoc — https://github.com/firecrawl/anydoc
- **O que faz:** biblioteca em Rust que converte Word, PowerPoint, Excel, OpenDocument, RTF, EPUB, CSV e PDF com texto em Markdown limpo. Tem CLI, bindings para Node e Python, WebAssembly e uma skill de agente.
- **Licença:** MIT (Sideguide Technologies Inc.); uso livre com aviso de copyright.
- **Maturidade:** criado em 2026-08-03; série 0.x, última v0.2.4 em 2026-08-27. O benchmark do README usa LLM como juiz, foi feito pelo próprio fornecedor e o corpus não é redistribuível.
- **Adoção: Baixo.** Basta `npx @firecrawl/anydoc`, `pip install firecrawl-anydoc` ou `cargo add anydoc`, e não pede conta.
- **Dados e riscos:** a conversão é local; o crate Rust não faz chamadas de rede. PDFs escaneados falham com `NeedsOcr`. Com `--ocr hosted`, o documento inteiro vai para a Firecrawl Parse, que não aceita seleção de páginas.
- **Relação com GQs:** instrumento para GQ-05 (inventário e amostra de documentos, regras e manuais do cliente) e GQ-03 (ler procedimentos escritos). Também é componente de candidata em GQ-08 para processamento documental financeiro ou busca de conhecimento interno. A ausência de OCR local é limite relevante para notas e comprovantes escaneados.
- **Veredito: Testar quando houver campo**, com documentos reais e OCR hospedado desligado até haver acordo sobre os dados.
- Fontes: https://raw.githubusercontent.com/firecrawl/anydoc/HEAD/README.md · https://raw.githubusercontent.com/firecrawl/anydoc/HEAD/LICENSE · https://github.com/firecrawl/anydoc/releases.atom

### chaseai-yt/claudex-loop — https://github.com/chaseai-yt/claudex-loop
- **O que faz:** skills para Claude Code e Codex. Um provedor escreve requisitos e plano; o outro revisa o plano com evidências (APPROVED/REVISE/BLOCKED); depois, uma sessão nova do outro provedor inspeciona o código construído. Inclui ainda `claudex-route`, que recomenda qual modelo deve tratar cada tarefa.
- **Licença:** o texto é MIT (Chase AI) com um preâmbulo que declara partes adaptadas das skills de Matt Pocock (também MIT). Esse preâmbulo explica por que a API detecta NOASSERTION. Na prática, é reutilizável como MIT, mantendo os avisos e os THIRD-PARTY-NOTICES.
- **Maturidade:** criado em 2026-06-05, sem releases publicadas; antes se chamava `grill-me-codex` e `crucible`. O próprio README diz que a rodada de 55 achados "não é benchmark controlado".
- **Adoção: Médio.** Exige as CLIs do Claude Code e do Codex instaladas e autenticadas (duas contas) e Python 3.10+.
- **Dados e riscos:** o código e o plano vão para os dois provedores. O construtor edita arquivos com permissões limitadas, e o README avisa que um worktree não é sandbox de segurança.
- **Relação com GQs:** apoio interno para specs e planos da fase Act. Hoje não há software a construir.
- **Veredito: Adiar** até existir plano de implementação de um piloto; antes de instalar, passar pelo SkillSpector e checar sobreposição com as skills de Matt Pocock já adotadas.
- Fontes: https://raw.githubusercontent.com/chaseai-yt/claudex-loop/HEAD/README.md · https://raw.githubusercontent.com/chaseai-yt/claudex-loop/HEAD/LICENSE

### petergyang/no-ai-slop — https://github.com/petergyang/no-ai-slop
- **O que faz:** skill (SKILL.md + eval.md) que remove mais de 20 padrões de "texto com cara de IA" preservando a voz do autor, ou só aponta os padrões encontrados.
- **Licença:** MIT (Peter Yang).
- **Maturidade:** criado em 2026-07-07; v1.0.0 a v1.0.6 entre 2026-07-26 e 2026-08-01.
- **Adoção: Baixo.** Instala com `npx skills add` e não pede chave.
- **Dados e riscos:** são só instruções; o texto não sai do agente hospedeiro. Os padrões e exemplos são em inglês e o README não declara suporte a português.
- **Relação com GQs:** nenhuma. No máximo, apoio à redação de entregáveis.
- **Veredito: Adiar.** O ganho é marginal enquanto não houver entregável externo, e a adequação ao pt-BR não foi verificada.
- Fontes: https://raw.githubusercontent.com/petergyang/no-ai-slop/HEAD/README.md · https://raw.githubusercontent.com/petergyang/no-ai-slop/HEAD/skills/no-ai-slop/SKILL.md · https://github.com/petergyang/no-ai-slop/releases.atom

### trycompai/crm — https://github.com/trycompai/crm
- **O que faz:** CRM "agentic-first". Um agente autônomo lê o histórico de e-mails e reuniões, enriquece contatos e empresas, agenda os próprios follow-ups e registra só fatos observados. Evidência fraca vira sugestão para um humano decidir.
- **Licença:** MIT (Comp AI).
- **Maturidade:** criado em 2026-07-31; v1.15.3 em 2026-08-21.
- **Adoção: Alto.** Monorepo com Bun, Docker, Postgres, Next.js e NestJS; deploy previsto em Vercel (AI Gateway, Sandbox, Blob); OAuth Google (Gmail/Calendar) ou Microsoft (Mail.Read); single-tenant.
- **Dados e riscos:** lê as caixas de e-mail dos vendedores e, de forma opcional, enriquece pessoas via Context (LinkedIn) e Perplexity, o que exige análise LGPD. O sandbox do agente não tem rede nem `DATABASE_URL`. A telemetria é desligável com `CRM_TELEMETRY_DISABLED=1`.
- **Relação com GQs:** candidata de intervenção em GQ-08, só se o processo escolhido for vendas/follow-up. Substituir o CRM do cliente contraria a "menor complexidade suficiente". O princípio de registrar só o observado e o ledger de evidência servem de referência de desenho para GQ-07.
- **Veredito: Adiar.** O esforço é alto e implica troca de sistema do cliente sem processo definido.
- Fontes: https://raw.githubusercontent.com/trycompai/crm/HEAD/README.md · https://raw.githubusercontent.com/trycompai/crm/HEAD/LICENSE · https://github.com/trycompai/crm/releases.atom

### deepseek-ai/deepseek-harness — https://github.com/deepseek-ai/deepseek-harness
- **O que faz:** harness de agente com interface web local, em que tudo é plugin. O agente lê e edita arquivos do workspace, executa comandos, delega trabalho e mantém um plano.
- **Licença:** MIT (DeepSeek), com THIRD_PARTY_NOTICES.
- **Maturidade:** criado em 2026-08-13. O README declara "developer preview" e "THERE WILL BE COMPATIBILITY-BREAKING CHANGES". Só há releases alpha/rc; a última é v0.1.5-rc.2, de 2026-09-10.
- **Adoção: Médio.** Roda com Node.js e `npx @deepseek-ai/dsh web` (porta 3080). Pede chave da API DeepSeek por padrão; outros provedores e endpoints compatíveis com OpenAI têm guia próprio.
- **Dados e riscos:** o SAFETY.md afirma que o software não passou por auditoria de segurança, não está pronto para produção e pode expor dados ou credenciais; recomenda VM descartável.
- **Relação com GQs:** candidata genérica em GQ-08, mas não resolve um processo por si.
- **Veredito: Adiar**, por instabilidade declarada e risco de execução.
- Fontes: https://raw.githubusercontent.com/deepseek-ai/deepseek-harness/HEAD/README.md · https://raw.githubusercontent.com/deepseek-ai/deepseek-harness/HEAD/SAFETY.md · https://raw.githubusercontent.com/deepseek-ai/deepseek-harness/HEAD/docs/user/guide/index.md · https://github.com/deepseek-ai/deepseek-harness/releases.atom

### herdrdev/herdr — https://github.com/herdrdev/herdr
- **O que faz:** gerencia terminais persistentes onde rodam agentes de código (Claude Code, Codex etc.), mostra o estado de cada painel (trabalhando, bloqueado, ocioso) e expõe uma API por socket para agentes abrirem painéis e conversarem entre si.
- **Licença:** Apache-2.0.
- **Maturidade:** criado em 2026-03-27; v0.9.0 em 2026-09-07, além de builds "preview".
- **Adoção: Médio.** É um binário Rust. A instalação usa `curl | sh` ou, no Windows, `irm | iex` (script remoto executado direto); para Windows com proteção de endpoint, a documentação aponta uma página "windows-beta".
- **Dados e riscos:** roda localmente e pode acessar máquinas remotas via SSH; o marketplace de plugins é código de terceiros.
- **Relação com GQs:** nenhuma. O gargalo atual do AJ é o acesso a campo, não o paralelismo de agentes.
- **Veredito: Adiar.**
- Fontes: https://raw.githubusercontent.com/herdrdev/herdr/HEAD/README.md · https://github.com/herdrdev/herdr/releases.atom

### stablyai/orca — https://github.com/stablyai/orca
- **O que faz:** aplicativo desktop (macOS, Windows, Linux) com app móvel companheiro para rodar vários agentes de código em paralelo, cada um num git worktree próprio, e comparar os resultados.
- **Licença:** MIT (Lovecast Inc.).
- **Maturidade:** criado em 2026-03-17; lançamentos quase diários, última v1.4.202 em 2026-09-13; build Windows assinado via SignPath.
- **Adoção: Médio.** Instalação por instalador; usa as assinaturas próprias do usuário.
- **Dados e riscos:** coleta telemetria anônima com opt-out; um relay pareia o celular com o desktop; tem recurso de "computer use" em apps do desktop.
- **Relação com GQs:** nenhuma.
- **Veredito: Adiar**, pelo mesmo motivo do herdr.
- Fontes: https://raw.githubusercontent.com/stablyai/orca/HEAD/README.md · https://github.com/stablyai/orca/releases.atom

### diegosouzapw/OmniRoute — https://github.com/diegosouzapw/OmniRoute
- **O que faz:** gateway local (`localhost:20128/v1`) que distribui chamadas de LLM entre centenas de provedores. O próprio README se contradiz nos números: 352 ou 356 provedores, 150+ ou 152 gratuitos. As chamadas passam por quatro camadas (assinatura → chave de API → barato → grátis), com compressão de tokens, MCP e A2A.
- **Licença:** MIT.
- **Maturidade:** criado em 2026-02-13; v3.8.50 em 2026-09-02.
- **Adoção: Médio.** Node 22/24 via npm, Docker ou Electron.
- **Dados e riscos:**
  - Anuncia "TLS stealth" (imitação da impressão digital TLS JA3/JA4) e proxy de três níveis contra "AI blocked".
  - Oferece "key pools" para "team sharing one subscription".
  - O próprio catálogo marca 13 provedores como "avoid" por risco de termos de uso.
  - O guardrail de PII é fail-open.
  - Sem `STORAGE_ENCRYPTION_KEY`, as chaves ficam em texto puro.
- **Relação com GQs:** nenhuma aceitável. Para comparar custos em GQ-08, um provedor contratado diretamente é mais simples e auditável.
- **Veredito: Descartar.** O risco contratual e de dados é incompatível com "riscos controlados".
- Fontes: https://raw.githubusercontent.com/diegosouzapw/OmniRoute/HEAD/README.md · https://raw.githubusercontent.com/diegosouzapw/OmniRoute/HEAD/SECURITY.md · https://github.com/diegosouzapw/OmniRoute/releases.atom

### PhoneHarness/PhoneHarness — https://github.com/PhoneHarness/PhoneHarness
- **O que faz:** harness e benchmark para agentes que operam celulares Android em emulador, combinando CLI, GUI e MCP. A avaliação é por efeitos colaterais verificáveis, com traces auditáveis. Tem artigo (arXiv 2606.14832) e dataset no Hugging Face.
- **Licença:** nenhum arquivo LICENSE, LICENSE.md, LICENSE.txt, COPYING ou LICENCE na HEAD (todos 404). Sem licença, valem todos os direitos reservados: a consultoria pode ler, mas não pode copiar, modificar nem redistribuir o código. A licença do dataset não foi verificada.
- **Maturidade:** criado em 2026-05-13; sem releases; último push em 2026-06-17.
- **Adoção: Alto.** Emulador Pixel 6/API 33, Termux, ADB e endpoints compatíveis com OpenAI.
- **Dados e riscos:** executa `shell_exec`/`python_exec` no dispositivo; exige credenciais de modelo.
- **Relação com GQs:** só como leitura. Duas ideias servem de referência metodológica para GQ-06/GQ-07: preferir o caminho determinístico (CLI/regra exata) antes da GUI e avaliar por efeitos verificáveis.
- **Veredito: Descartar como ferramenta.** Não tem licença e o domínio (celular) está fora dos processos-alvo.
- Fontes: https://raw.githubusercontent.com/PhoneHarness/PhoneHarness/HEAD/README.md · https://github.com/PhoneHarness/PhoneHarness/releases.atom

### calesthio/OpenMontage — https://github.com/calesthio/OpenMontage
- **O que faz:** sistema agêntico de produção de vídeo, com pipelines, ferramentas e dezenas de provedores de vídeo, imagem, voz e música.
- **Licença:** AGPL-3.0. Uma versão modificada oferecida como serviço de rede obriga a disponibilizar o código-fonte aos usuários, e qualquer obra derivada distribuída herda a AGPL.
- **Maturidade:** criado em 2026-03-29; sem releases (feed vazio).
- **Adoção: Alto.** Python 3.10+, FFmpeg e Node 18+; chaves pagas opcionais; GPU opcional para geração local.
- **Dados e riscos:**
  - Os prompts e ativos vão aos provedores de nuvem escolhidos.
  - A issue #626 (PSA aberta pelo usuário `alabsi`) denuncia o repositório falso `OpenMontage-app/OpenMontage`, que distribuiria o trojan "PureRat", e afirma que o projeto "ships NO binaries".
  - A issue #444 relata o Defender detectando `OpenMontage-x64.7z` como trojan.
- **Relação com GQs:** nenhuma.
- **Veredito: Descartar.** Está fora do escopo e soma AGPL a risco de clones falsos.
- Fontes: https://raw.githubusercontent.com/calesthio/OpenMontage/HEAD/README.md · https://raw.githubusercontent.com/calesthio/OpenMontage/HEAD/LICENSE · https://github.com/calesthio/OpenMontage/issues/626 · https://github.com/calesthio/OpenMontage/issues/444 · https://github.com/calesthio/OpenMontage/releases.atom

### browser-use/video-use — https://github.com/browser-use/video-use
- **O que faz:** skill para Claude Code/Codex que edita vídeo bruto (corta hesitações, gradua cor, legenda) a partir da transcrição com carimbos de tempo.
- **Licença:** MIT (Browser Use).
- **Maturidade:** criado em 2026-04-12; sem releases.
- **Adoção: Médio.** FFmpeg e chave da ElevenLabs.
- **Dados e riscos:** o áudio de cada arquivo vai para a ElevenLabs Scribe.
- **Relação com GQs:** nenhuma.
- **Veredito: Descartar**, por estar fora do escopo de processos empresariais.
- Fontes: https://raw.githubusercontent.com/browser-use/video-use/HEAD/README.md · https://raw.githubusercontent.com/browser-use/video-use/HEAD/LICENSE

### omacom/omarchy — https://github.com/omacom/omarchy
- **O que faz:** distribuição Linux "beautiful, fun & agentic" de DHH, com manual próprio.
- **Licença:** MIT (copyright David Heinemeier Hansson).
- **Maturidade:** criado em 2025-06-01; v4.0.3 em 2026-09-08.
- **Adoção: Alto.** Exige instalar outro sistema operacional (inclusive dual boot); o AJ opera em Windows.
- **Dados e riscos:** não se aplicam ao AJ.
- **Relação com GQs:** nenhuma.
- **Veredito: Descartar.**
- Fontes: https://raw.githubusercontent.com/omacom/omarchy/HEAD/README.md · https://raw.githubusercontent.com/omacom/omarchy/HEAD/LICENSE · https://github.com/omacom/omarchy/releases.atom

### aaaalabs/arkify — https://github.com/aaaalabs/arkify
- **O que faz:** MVP "Phase 0" que gera uma imagem PNG 800×800 em grade 2×2 (stack, horas, custo, aprendizado) a partir de um YAML, para postar em redes sociais. Diagramas de arquitetura estão só no roadmap (Phase 2).
- **Licença:** MIT.
- **Maturidade:** 0 estrelas; sem releases; último push em 2026-04-18.
- **Adoção: Baixo.** Python 3.8+ e Pillow; busca logos na CDN SimpleIcons.
- **Relação com GQs:** nenhuma.
- **Veredito: Descartar.**
- Fontes: https://raw.githubusercontent.com/aaaalabs/arkify/HEAD/README.md · https://raw.githubusercontent.com/aaaalabs/arkify/HEAD/LICENSE

### Kevin-Liu-01/Claude-of-Tanks — https://github.com/Kevin-Liu-01/Claude-of-Tanks
- **O que faz:** jogo de combate de tanques no navegador (Three.js).
- **Autoria:** o README credita Kevin B. Liu como autor, com Claude e Codex como "ferramentas de desenvolvimento".
- **Licença:** o arquivo LICENSE é MIT, mas o README exclui como "Reserved Content" proprietário os veículos, mapas, ativos e marca, e remete a LICENSE-POLICY.md antes de qualquer reúso.
- **Relação com GQs:** nenhuma.
- **Veredito: Descartar.**
- Fontes: https://raw.githubusercontent.com/Kevin-Liu-01/Claude-of-Tanks/HEAD/README.md · https://raw.githubusercontent.com/Kevin-Liu-01/Claude-of-Tanks/HEAD/LICENSE

## Correções à lista original

| Afirmação da fonte secundária | Resultado na fonte primária |
|---|---|
| Omarchy em `basecamp/omarchy` | **Corrigido:** o repositório canônico agora é `omacom/omarchy` (a API redireciona). É uma distribuição Linux de DHH, não ferramenta de IA para empresas. |
| DeepSeek Harness em "developer preview" com mudanças incompatíveis | **Confirmado** (README). Complemento: o SAFETY.md declara ausência de auditoria de segurança, e só há releases alpha/rc 0.1.x. |
| Arkify é "mapa/visualização de código" | **Refutado:** gera imagem PNG de "breakdown" de projeto para redes sociais a partir de YAML; diagramas só no roadmap. A descrição da API está correta. |
| OpenMontage teve typosquatting com .exe e "os mantenedores alertaram" | **Parcial:** existe a PSA #626 sobre o repositório falso `OpenMontage-app/OpenMontage` com trojan, mas foi aberta pelo usuário `alabsi`, e não se viu resposta do dono `calesthio`. O alerta dos mantenedores **não foi confirmado**. A issue #444 relata detecção de trojan num `.7z`, embora o repositório oficial não publique binários. |
| OmniRoute roteia para provedores "grátis" | **Confirmado, mas incompleto:** também roteia para assinaturas, chaves pagas e provedores baratos, com "TLS stealth" e compartilhamento de assinatura. |
| Claudex Loop alterna Claude e Codex em revisão adversarial | **Confirmado,** com nuance: o revisor e o inspetor são sempre o provedor oposto ao construtor; o repositório também traz `claudex-route`. A licença NOASSERTION é MIT com preâmbulo. |
| Claude-of-Tanks (descrição da API): "121 tanks, 20 battlefields", "built end-to-end by a multi-agent Claude/Codex pipeline" | **Divergente:** o README fala em 171 veículos e 30 campos de batalha, e credita o autor humano, com Claude/Codex como assistentes. |
| PhoneHarness: licença "NENHUMA" | **Confirmado:** não há arquivo de licença na HEAD. |

## Alertas

1. **Licenças.**
   - PhoneHarness não tem licença: não reutilizar código.
   - OpenMontage é AGPL-3.0: evitar em qualquer entrega a cliente ou serviço de rede.
   - Claude-of-Tanks tem conteúdo reservado apesar do LICENSE MIT.
   - Claudex Loop exige manter os avisos de terceiros (Matt Pocock).
   - SkillSpector baixa dependências com licenças próprias.
2. **Execução de código.**
   - DeepSeek Harness, herdr, Orca e Claudex Loop executam comandos gerados por modelo; usar só em ambiente isolado e sem credenciais de cliente.
   - herdr instala com script remoto executado direto (`curl | sh`, `irm | iex`).
   - Skills de terceiros rodam com confiança implícita: escanear antes (SkillSpector).
3. **Typosquatting.**
   - Clonar apenas das URLs canônicas desta ficha.
   - Não baixar binários de forks ou "apps" homônimos. OpenMontage oficial não publica binários (issue #626).
   - Confirmar redirecionamentos de organização, como `basecamp` → `omacom`.
4. **Dados para terceiros.** Nenhum desses fluxos pode receber dado de cliente sem acordo contratual e análise LGPD.

   | Projeto | O que sai da máquina | Para onde |
   |---|---|---|
   | anydoc | documento inteiro, com `--ocr hosted` | Firecrawl Parse |
   | video-use | áudio | ElevenLabs |
   | trycompai/crm | e-mails e dados de pessoas | Context/LinkedIn, Perplexity, Vercel AI Gateway |
   | OmniRoute | prompts | provedores gratuitos com termos variados (sem cifragem por padrão) |
   | SkillSpector (modo LLM) | conteúdo da skill | provedor de LLM; OSV.dev recebe as consultas de dependências |
   | DeepSeek Harness | arquivos do workspace | provedor de modelo |
   | Orca | telemetria anônima (opt-out) | desenvolvedor do Orca |
5. **Maturidade.** Cinco repositórios foram criados há menos de três meses: deepseek-harness, anydoc, crm, Claude-of-Tanks e no-ai-slop. Número alto de estrelas em projeto novo não substitui teste com casos reais do campo.
