# Prompt para o agente dev: vídeo explicativo do atendente da barbearia

> Versão corrigida em 02/10/2026 (AI-007, DEC-012). O original de Arthur está no commit `b6b42ee`. A etapa 1 foi executada pelo Claude Code neste repositório; este texto continua válido para retomar com qualquer agente.
>
> Copie tudo abaixo da linha e cole no agente.

---

## Antes de começar

Este trabalho acontece dentro do repositório `arthurfjadecastro/projectAJ`, que tem protocolo de continuidade entre agentes. Leia `AGENTS.md` e siga a ordem de leitura dos registros. A tarefa é a **AI-007** no `BACKLOG.md`: registre-a em `CURRENT_STATE.md` antes de qualquer outra escrita e feche com `WORKLOG.md` e `HANDOFF.md`.

## Papel e objetivo

Você vai produzir um **vídeo curto, vertical e autoexplicativo** que será enviado pelo WhatsApp ao dono de uma barbearia. Ele não é técnico e vai assistir no celular, provavelmente sem som no primeiro momento. Ao final do vídeo, ele precisa entender, sem ninguém explicar ao vivo:

1. **O que** é a solução: uma assistente virtual no WhatsApp da barbearia.
2. **O que a assistente faz sozinha** e **o que ela sempre passa para ele**.
3. **Como ele entra na conversa** e como a assistente fica em silêncio quando ele entra.
4. **O que ainda precisamos que ele decida** (5 perguntas), para responder pelo próprio WhatsApp.

O tom é de conversa entre parceiros, não de vendedor. Nada de jargão técnico.

## Fontes da verdade (leia antes de escrever qualquer coisa)

- Mapa de cenários e regras: `docs/propostas/barbearia/whatsapp/cenarios.md` (99 cenários, regra geral, 4 estados, seção 7 com as questões em aberto).
- Decisões: **DEC-011** (nesta primeira versão a assistente não promete vaga; horário, reclamação e decisões vão para o dono) e **DEC-012** (vocabulário e execução deste vídeo), em `DECISIONS.md`.
- Falas prontas: `docs/propostas/barbearia/whatsapp/simulador.html`, no array `SCENARIOS` do script. **Reaproveite essas falas**, encurtando quando o tempo de leitura exigir: o vídeo conta a mesma história do simulador. A versão publicada do simulador é uma página privada de Arthur; use o arquivo do repositório.

Se algo no vídeo contradisser o `cenarios.md` ou as decisões, o documento vence. Não invente regra nova.

## Regras de negócio que o vídeo precisa deixar claras

- A assistente **tira dúvidas** usando apenas a ficha da barbearia (serviços, preços, horário de funcionamento, endereço, pagamento, promoções cadastradas).
- A assistente **manda mensagens personalizadas** com base no histórico de cada cliente: "faz 2 semanas da sua barba, bora dar aquele talento?", aniversário, Dia dos Pais. Isso vale só para quem **aceitou receber**, e qualquer cliente pode pedir para parar a qualquer momento.
- Quando o assunto é **horário, reclamação, desconto ou qualquer decisão**, a assistente **monta o pedido** (quem, o quê, quando, com qual barbeiro) e **chama o dono**. Ela **não promete vaga, não dá desconto e não decide nada**.
- O dono recebe um **resumo pronto**, sem precisar ler a conversa toda.
- Quando o dono **escreve na conversa, a assistente para na hora**. Depois ele devolve a conversa para ela.
- A assistente **nunca finge ser gente**. Se perguntarem "é robô?", ela diz que é a assistente virtual e oferece falar com o dono.

Traduza os 4 estados para a linguagem do dono, sem códigos:
`E1` → "A assistente está atendendo" · `E2` → "Esperando você" · `E3` → "Você está na conversa" · `E4` → "Voltou para a assistente".
**Não mostre** os códigos de cenário (A04, B02, F01...) nem `E1–E4` na tela.

## Vocabulário

- Na narração e nas legendas, diga **"assistente"** (no feminino). **Não diga "IA"**: soa mal na voz sintética (DEC-014, que substitui a regra anterior de dizer "IA" uma vez).
- **Frases curtas e pausadas**, uma por legenda, para o dono entender com clareza.
- A fala evita palavras com dicção ruim na voz sintética: palavras estrangeiras ("WhatsApp"), siglas, números em algarismos e o nome da barbearia (que é variável). Na tela eles podem aparecer.
- Proibido na narração: modelo, API, prompt, n8n, automação, LGPD ou qualquer termo técnico. Exceção na tela, sem narração: uma única linha pequena no fim, "Antes de ligar de verdade, conferimos as regras do WhatsApp e da LGPD."
- O simulador ainda usa "o assistente"; nome e gênero definitivos estão em aberto (Q10 do `cenarios.md`).

## Roteiro (estrutura obrigatória, ajuste o texto)

Duração alvo: **90 a 150 segundos**. Se passar de 150 s, corte cenas; não acelere a fala nem encurte o tempo de leitura.

A tabela abaixo é a estrutura original. As falas e os tempos finais estão em `video/roteiro.md` (frases curtas, sem "IA"; 148,5 s).

| # | Tempo aprox. | Cena | O que aparece | Narração / legenda (sugestão) |
|---|---|---|---|---|
| 0 | 0–7 s | Gancho | Celular com várias mensagens chegando | "E se o WhatsApp da {BARBEARIA} respondesse sozinho, e você só entrasse quando precisasse?" |
| 1 | 7–14 s | O problema | Tesoura e notificações acumulando, sem pessoas | "Você está com a tesoura na mão, e o cliente quer saber preço, endereço, horário..." |
| 2 | 14–25 s | A solução em 3 frases | 3 cartões grandes: **Responde** · **Lembra** · **Chama você** | "Conheça a assistente: uma IA que tira as dúvidas, manda lembretes para cada cliente e, quando o assunto é com você, te chama." |
| 3 | 25–38 s | Cena: dúvidas | "Três dúvidas numa mensagem", em 2 balões | "Três perguntas de uma vez? Ela responde tudo, só com as informações da sua barbearia." |
| 4 | 38–55 s | Cena: lembrete | "Bora dar aquele talento?" até o pedido montado, em 3 balões | "Ela sabe que o Pedro faz a barba a cada duas semanas. No dia certo, ela puxa conversa e monta o pedido." |
| 5 | 55–75 s | Cena: você entra | Resumo do pedido; selo "Esperando você" → "Você está na conversa" → "Voltou para a assistente"; dono confirma em 2 balões | "O pedido chega pronto para você. Quando você escreve, a assistente fica quieta. Quem confirma o horário é sempre você." |
| 6 | 75–87 s | Datas especiais | Aniversário e Dia dos Pais, 1 balão cada | "Aniversário, Dia dos Pais, promoção da semana: só os benefícios que você aprovar." |
| 7 | 87–105 s | Limites | 3 mini-cenas de 2 balões: reclamação vai ao dono; "é robô?"; "não me manda mais isso" | "Reclamação vem direto para você. Ela não finge ser gente. E quem pede para parar, para na hora." |
| 8 | 105–111 s | Regra de ouro | Tela limpa, frase grande | "A assistente atende. **Quem decide é você.**" |
| 9 | 111–137 s | O que precisamos de você | As 5 perguntas curtas, uma por vez, acumulando na tela | "Para começar, preciso de cinco respostas suas." |
| 10 | 137–145 s | Chamada final | Nome da barbearia + "Me responde aqui mesmo no WhatsApp" | "Me responde por aqui que a gente ajusta tudo do seu jeito." |

**Continuidade das cenas 4 e 5:** a conversa do lembrete termina com o pedido montado e esperando o dono. A cena 5 continua **essa mesma conversa** (barba, amanhã no fim da tarde, com o Rafael); as falas do dono são adaptadas do cenário "Pedido de horário vai para o dono" do simulador.

**Orçamento de balões:** cada balão fica na tela no mínimo 1,5 s + 60 ms por caractere. Com isso, cabem 2 a 3 balões por cena de conversa. Use as falas do simulador como base e encurte; nunca derrube a regra de leitura para caber mais falas.

**As 5 perguntas da cena 9** (texto curto na tela, uma por vez; a versão completa vai na mensagem que acompanha o vídeo):

| Na tela | Versão completa (mensagem de acompanhamento) |
|---|---|
| **Agenda:** onde você anota seus horários hoje? | Onde você anota seus horários hoje? É para a assistente mandar lembrete na véspera. |
| **Devolver a conversa:** uma palavra, um botão ou automático? | Como prefere devolver o atendimento para a assistente: uma palavra, um botão ou automático depois de um tempo? |
| **Mensagens:** no máximo uma por semana por cliente? | No máximo quantas mensagens por cliente? Uma por semana está bom? |
| **Áudio e foto:** a assistente deve entender? | A assistente deve entender áudio? E foto de corte de referência, ela comenta ou passa para o barbeiro? |
| **Benefícios:** quais você toparia de verdade? | Quais benefícios você toparia de verdade? Aniversário, Dia dos Pais, combo em dia fraco? |

## Requisitos de formato (WhatsApp, no celular)

- **Vertical 9:16, 1080×1920**, 30 fps, **MP4 (H.264 + AAC)**.
- Arquivo final **até 16 MB**. Se passar, reduza o bitrate e não a resolução do texto. Gere também uma versão maior em alta qualidade.
- **Legendas embutidas obrigatórias**, em português do Brasil, grandes, com no máximo 2 linhas e contraste alto. O vídeo tem que funcionar 100% sem som. As legendas podem ser desenhadas pelo próprio Remotion a partir dos mesmos dados que geram o `.srt`.
- **Narração em PT-BR** (voz sintética natural, calma). Se não houver uma de qualidade disponível, entregue sem narração, com trilha leve e livre de direitos, e avise.
- Texto mínimo de **48 px** na tela; balões legíveis num celular comum.
- Margens seguras: nada importante nos 150 px de cima e nos 250 px de baixo (a interface do WhatsApp cobre).
- Identidade visual: a do simulador (fundo creme `#F3EDE3`, latão `#8E6A2C`, vermelho de poste `#A8322D`, balão do dono azul `#DCE7EE`, fontes Young Serif e Figtree).
- **Não use logo, ícone ou marca do WhatsApp** nem de outras empresas. A tela do celular é um chat genérico, como no simulador.

## Conteúdo: o que não pode

- Preços e benefícios são **fictícios**. Mostre um selo fixo "valores de exemplo" sempre que aparecer preço ou benefício.
- Nomes da barbearia e do dono são **variáveis** (`{BARBEARIA}`, `{DONO}`) em um único arquivo de configuração. Valores padrão: "Barbearia Exemplo" e "João". O cliente fictício é o "Pedro" e o barbeiro, o "Rafael", como no simulador.
- Não prometa nada que a DEC-011 exclui: **não mostre a assistente marcando horário**.
- Não use pessoas reais, rostos gerados nem música com direitos.

## Abordagem técnica

- **Remotion (React)**, com as cenas de conversa **geradas a partir de dados** (`cenas.json`, adaptado do `SCENARIOS` do simulador), para que trocar o nome ou ajustar uma fala seja só editar o JSON e renderizar de novo.
- Legendas: gere um `.srt` sincronizado com a narração a partir dos mesmos dados.
- Tudo reproduzível com **um comando** (`npm run render`), documentado no README da pasta, rodando em Windows e macOS.

## Entregáveis

Na pasta `docs/propostas/barbearia/whatsapp/video/`:

1. `roteiro.md`: roteiro final com tempo, cena, texto na tela e narração (fonte do conteúdo; `cenas.json` é a tradução para o código e os dois andam juntos).
2. `config.json` (nomes) e `cenas.json` (falas e tempos).
3. Código-fonte do vídeo e `README.md` com o comando de render.
4. `saida/video_whatsapp.mp4` (até 16 MB) e `saida/video_alta.mp4`.
5. `saida/legendas.srt` e `saida/capa.png` (1080×1920, para a miniatura).
6. `saida/frames/`: um print por cena, para revisão rápida.

O repositório é público e o GitHub limita arquivos grandes. Versione apenas `video_whatsapp.mp4`, `capa.png`, `legendas.srt` e as amostras da etapa 1; deixe `video_alta.mp4` e `saida/frames/` fora do Git.

## Processo

1. **Etapa 1:** entregue só `roteiro.md`, `config.json`, `cenas.json` e 3 frames de amostra (cenas 2, 5 e 9). Pare e aguarde a aprovação de Arthur antes de renderizar o vídeo completo.
2. **Etapa 2**, depois da aprovação: renderize, revise e publique. Nesta sessão o commit vai para a `main`, como as demais tarefas (DEC-006). Se outro agente assumir em outro ambiente, use uma branch `video-barbearia` e abra PR.

## Checklist de aceite (confira antes de entregar e reporte item por item)

- [ ] Assistindo **sem som**, alguém leigo entende o que a assistente faz, o que ela passa para o dono e o que se espera dele.
- [ ] Duração entre 90 e 150 s; arquivo para WhatsApp ≤ 16 MB; 1080×1920.
- [ ] Nenhum código interno (A04, E2, DEC-011...) aparece na tela.
- [ ] A assistente nunca aparece marcando horário, dando desconto ou fingindo ser pessoa.
- [ ] "IA" não aparece; a fala não tem palavras estrangeiras, siglas, algarismos nem o nome da barbearia.
- [ ] Selo "valores de exemplo" em toda tela com preço ou benefício.
- [ ] Cada balão respeita o tempo mínimo de leitura.
- [ ] Trocar `{BARBEARIA}` e `{DONO}` no `config.json` e renderizar de novo funciona.
- [ ] As 5 perguntas aparecem e o vídeo termina pedindo resposta pelo WhatsApp.
- [ ] Sem logo do WhatsApp nem música ou imagem com direitos.
- [ ] Assistido do começo ao fim num celular real (ou emulado em 390 px de largura) e todo o texto foi lido sem pausar.
