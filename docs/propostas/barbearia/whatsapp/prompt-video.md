# Prompt para o agente dev: vídeo explicativo do Atendente de IA da barbearia

> Copie tudo abaixo da linha e cole no agente.

---

## Papel e objetivo

Você vai produzir um **vídeo curto, vertical e autoexplicativo** que será enviado pelo WhatsApp ao dono de uma barbearia. Ele não é técnico e vai assistir no celular, provavelmente sem som no primeiro momento. Ao final do vídeo, ele precisa entender, sem ninguém explicar ao vivo:

1. **O que** é a solução: um atendente de IA no WhatsApp da barbearia.
2. **O que a IA faz sozinha** e **o que ela sempre passa para ele**.
3. **Como ele entra na conversa** e como a IA fica em silêncio quando ele entra.
4. **O que ainda precisamos que ele decida** (5 perguntas), para responder pelo próprio WhatsApp.

O tom é de conversa entre parceiros, não de vendedor. Nada de jargão técnico.

## Fontes da verdade (leia antes de escrever qualquer coisa)

- Repositório: `arthurfjadecastro/projectAJ`
- Mapa de cenários e regras: `docs/propostas/barbearia/whatsapp/cenarios.md` (99 cenários, regra geral, 4 estados, seção 7 com as questões em aberto)
- Decisão registrada: **DEC-011** (nesta primeira versão a IA não promete vaga; horário, reclamação e decisões vão para o dono)
- Simulador já publicado (referência visual e de falas): https://claude.ai/artifact/6MjvhmRNBKFxbSpMssG9aF. O array `SCENARIOS` dele tem as falas prontas das 10 conversas. **Reaproveite essas falas**: o vídeo deve contar a mesma história do simulador.

Se algo no vídeo contradisser o `cenarios.md` ou a DEC-011, o documento vence. Não invente regra nova.

## Regras de negócio que o vídeo precisa deixar claras

- A IA **tira dúvidas** usando apenas a ficha da barbearia (serviços, preços, horário de funcionamento, endereço, pagamento, promoções cadastradas).
- A IA **manda mensagens personalizadas** com base no histórico de cada cliente: "faz 2 semanas da sua barba, bora dar aquele talento?", aniversário, Dia dos Pais. Isso vale só para quem **aceitou receber**, e qualquer cliente pode pedir para parar a qualquer momento.
- Quando o assunto é **horário, reclamação, desconto ou qualquer decisão**, a IA **monta o pedido** (quem, o quê, quando, com qual barbeiro) e **chama o dono**. Ela **não promete vaga, não dá desconto e não decide nada**.
- O dono recebe um **resumo pronto**, sem precisar ler a conversa toda.
- Quando o dono **escreve na conversa, a IA para na hora**. Depois ele devolve a conversa para a IA.
- A IA **nunca finge ser gente**. Se perguntarem "é robô?", ela diz que é a assistente virtual e oferece falar com o dono.

Traduza os 4 estados para a linguagem do dono, sem códigos:
`E1` → "A IA está atendendo" · `E2` → "Esperando você" · `E3` → "Você está na conversa" · `E4` → "Voltou para a IA".
**Não mostre** os códigos de cenário (A04, B02, F01...) nem `E1–E4` na tela.

## Roteiro (estrutura obrigatória, ajuste o texto)

Duração alvo: **90 a 150 segundos**. Se passar de 150 s, corte cenas, não acelere a fala.

| # | Tempo aprox. | Cena | O que aparece | Narração / legenda (sugestão) |
|---|---|---|---|---|
| 0 | 0–6 s | Gancho | Celular com várias mensagens chegando | "E se o WhatsApp da {BARBEARIA} respondesse sozinho, e você só entrasse quando precisasse?" |
| 1 | 6–15 s | O problema | Notificações acumulando, dono cortando cabelo | "Você está com a tesoura na mão e o cliente quer saber preço, endereço, horário..." |
| 2 | 15–28 s | A solução em 3 frases | 3 cartões grandes: **Responde** · **Lembra** · **Chama você** | "A IA tira as dúvidas, manda lembretes personalizados e, quando é com você, ela te chama." |
| 3 | 28–42 s | Cena: dúvidas | Conversa "Três dúvidas numa mensagem" | "Três perguntas de uma vez? Ela responde tudo, só com os dados da sua barbearia." |
| 4 | 42–62 s | Cena: lembrete | Conversa "bora dar aquele talento?" até o pedido montado | "Ela sabe que o Pedro faz a barba a cada 2 semanas. No dia certo, ela puxa conversa." |
| 5 | 62–85 s | Cena: você entra | Cartão do **resumo que chega ao dono**; selo "Esperando você" → "Você está na conversa"; dono confirma o horário | "O pedido chega pronto para você. Quando você escreve, a IA fica quieta. Quem confirma o horário é sempre você." |
| 6 | 85–97 s | Datas especiais | Aniversário e Dia dos Pais, rápidos (2 balões cada) | "Aniversário, Dia dos Pais, promoção da semana: só os benefícios que você aprovar." |
| 7 | 97–112 s | Limites | 3 mini-cenas: reclamação vai direto ao dono; "é robô?"; "não me manda mais isso" | "Reclamação vem direto para você. Ela não finge ser gente. E quem pede para parar, para na hora." |
| 8 | 112–122 s | Regra de ouro | Tela limpa, frase grande | "A IA atende. **Quem decide é você.**" |
| 9 | 122–140 s | O que precisamos de você | Lista das 5 perguntas (abaixo), uma por vez | "Para começar, precisamos de 5 respostas suas:" |
| 10 | 140–150 s | Chamada final | Nome da barbearia + "Responde aqui mesmo no WhatsApp" | "Me responde por aqui que a gente ajusta tudo do seu jeito." |

**As 5 perguntas da cena 9** (texto curto na tela, uma por vez):

1. **Agenda**: onde você anota seus horários hoje? (para a IA mandar lembrete na véspera)
2. **Devolver a conversa**: como prefere devolver o atendimento para a IA: uma palavra, um botão ou automático depois de um tempo?
3. **Frequência**: no máximo quantas mensagens por cliente? Uma por semana está bom?
4. **Áudio e foto**: a IA deve entender áudio? E foto de corte de referência, ela comenta ou passa para o barbeiro?
5. **Benefícios**: quais você toparia de verdade? Aniversário, Dia dos Pais, combo em dia fraco?

## Requisitos de formato (WhatsApp, no celular)

- **Vertical 9:16, 1080×1920**, 30 fps, **MP4 (H.264 + AAC)**.
- Arquivo final **até 16 MB**. Se passar, reduza o bitrate e não a resolução do texto. Gere também uma versão maior em alta qualidade.
- **Legendas embutidas (queimadas) obrigatórias**, em português do Brasil, grandes, com no máximo 2 linhas e contraste alto. O vídeo tem que funcionar 100% sem som.
- **Narração em PT-BR** (TTS natural, voz masculina ou feminina calma). Se não houver TTS de qualidade disponível, entregue sem narração, com trilha leve e livre de direitos, e avise.
- Texto mínimo de **48 px** na tela; balões de conversa legíveis num celular comum. Deixe cada balão na tela tempo suficiente para ler (mínimo de 1,5 s + 60 ms por caractere).
- Margens seguras: nada importante nos 150 px de cima e nos 250 px de baixo (barra do WhatsApp cobre).
- Identidade visual: reaproveite a do simulador (fundo creme `#F3EDE3`, latão `#8E6A2C`, vermelho de poste `#A8322D`, balão do dono azul `#DCE7EE`, fontes Young Serif e Figtree).
- **Não use logo, ícone ou marca do WhatsApp** nem de outras empresas. A tela do celular é um chat genérico, como no simulador.

## Conteúdo: o que não pode

- Preços e benefícios são **fictícios**. Mostre um selo discreto e fixo "valores de exemplo" sempre que aparecer preço ou benefício.
- Nomes da barbearia e do dono são **variáveis** (`{BARBEARIA}`, `{DONO}`) em um único arquivo de configuração. Valores padrão: "Barbearia Exemplo" e "João". O cliente fictício é o "Pedro" e o barbeiro, o "Rafael", como no simulador.
- Não prometa nada que a DEC-011 exclui: **não mostre a IA marcando horário**.
- Não mencione IA, modelo, API, prompt, n8n, LGPD ou termos técnicos na narração. Uma única linha pequena no fim é permitida: "Antes de ligar de verdade, conferimos as regras do WhatsApp e da LGPD."
- Não use pessoas reais, rostos gerados nem música com direitos.

## Abordagem técnica (sugestão; escolha a que renderizar melhor no seu ambiente)

- **Preferida:** Remotion (React) ou HTML/CSS animado + gravação com Playwright/Chromium headless + `ffmpeg`. As cenas de conversa devem ser **geradas a partir de dados** (um JSON com as falas, adaptado do `SCENARIOS` do simulador), não desenhadas à mão, para que trocar o nome ou ajustar uma fala seja só editar o JSON e renderizar de novo.
- Legendas: gere um `.srt` sincronizado com a narração e queime com `ffmpeg` (`subtitles=`), além de entregar o `.srt` separado.
- Tudo deve ser reproduzível com **um comando** (ex.: `npm run render`), documentado no README da pasta.

## Entregáveis

Na pasta `docs/propostas/barbearia/whatsapp/video/`:

1. `roteiro.md`: roteiro final com tempo, cena, texto na tela e narração (fonte única do vídeo).
2. `config.json` (nomes) e `cenas.json` (falas das conversas).
3. Código-fonte do vídeo e `README.md` com o comando de render.
4. `saida/video_whatsapp.mp4` (até 16 MB) e `saida/video_alta.mp4`.
5. `saida/legendas.srt` e `saida/capa.png` (1080×1920, para a miniatura).
6. `saida/frames/`: um print por cena, para revisão rápida.

## Processo

1. **Primeiro entregue só o `roteiro.md`** e 3 frames de amostra (cenas 2, 5 e 9). Pare e aguarde a aprovação do Arthur antes de renderizar o vídeo completo.
2. Depois da aprovação, renderize, revise e faça commit em uma branch `video-barbearia`, com mensagem clara. Abra PR em vez de fazer push direto na `main`.

## Checklist de aceite (confira antes de entregar e reporte item por item)

- [ ] Assistindo **sem som**, alguém leigo entende o que a IA faz, o que ela passa para o dono e o que se espera dele.
- [ ] Duração entre 90 e 150 s; arquivo para WhatsApp ≤ 16 MB; 1080×1920.
- [ ] Nenhum código interno (A04, E2, DEC-011...) aparece na tela.
- [ ] A IA nunca aparece marcando horário, dando desconto ou fingindo ser pessoa.
- [ ] Selo "valores de exemplo" em toda tela com preço ou benefício.
- [ ] Trocar `{BARBEARIA}` e `{DONO}` no `config.json` e renderizar de novo funciona.
- [ ] As 5 perguntas aparecem e o vídeo termina pedindo resposta pelo WhatsApp.
- [ ] Sem logo do WhatsApp nem música ou imagem com direitos.
- [ ] Assistido do começo ao fim num celular real (ou emulado em 390 px de largura) e todo o texto foi lido sem pausar.
