# Roteiro do vídeo para o dono da barbearia

AI-007, para aprovação de Arthur. Fonte do conteúdo do vídeo; `cenas.json` traduz este roteiro para o código e os dois andam juntos. Regras: [prompt](../prompt-video.md), [cenários](../cenarios.md), DEC-011, DEC-012, DEC-013 e DEC-014. Nomes vêm de `config.json` (padrão: Barbearia Exemplo, João, Pedro, Rafael). Valores e benefícios são fictícios.

**Formato:** vertical 1080×1920, 30 fps, **148,5 s**, legendas embutidas. **Voz:** Chatterbox local, variante pt-BR, ênfase 0,35 e ritmo 0,3 (voz B).

**Narração (DEC-014):** frases curtas, uma por legenda, com pausa entre elas. A fala não diz "IA", palavras estrangeiras, siglas, números em algarismos nem o nome da barbearia. Onde a tela mostra algo diferente do que se fala, `cenas.json` usa o campo `fala`.

## Cenas

| # | Tempo | Cena | Na tela | Narração (cada linha é uma frase com pausa) |
|---|---|---|---|---|
| 0 | 0–8 s | Gancho | Tela escura com o nome da barbearia e mensagens de clientes chegando: "Quanto tá a barba?", "Abre sábado?", "Tem horário hoje?", "Aceita Pix?", "Onde fica?", "Faz degradê?"; contador de mensagens novas | E se a sua barbearia respondesse sozinha? / E você só entrasse quando precisasse? |
| 1 | 8–15,5 s | O problema | Tesoura desenhada e um contador de mensagens subindo até 12: "mensagens esperando" | Você está com a tesoura na mão. / E o cliente quer saber preço, endereço e horário. |
| 2 | 15,5–26,5 s | A solução | Título "A assistente faz três coisas" e três cartões: **Responde** as dúvidas, com os dados da sua barbearia · **Lembra** cada cliente na hora certa · **Chama você** quando o assunto é horário ou decisão | Conheça a assistente da sua barbearia. / Ela tira as dúvidas. / Lembra cada cliente. / E, quando é com você, ela te chama. |
| 3 | 26,5–39,5 s | Tira dúvidas | Selo "valores de exemplo". Cliente: "Quanto tá a barba? Aceita Pix? Onde fica?" · Assistente: "Barba: R$ 35, uns 30 min / Pix, débito, crédito ou dinheiro / Rua das Palmeiras, 120" | Três perguntas de uma vez? / Ela responde tudo. / Só com as informações da sua barbearia. |
| 4 | 39,5–56,5 s | Lembra cada cliente | Avisos "Pedro aceitou receber lembretes" e "14 dias desde a última barba". Assistente: "Fala, Pedro! Sua última barba aqui foi há 14 dias. Bora dar aquele talento?" · Cliente: "Bora! Amanhã no fim da tarde, com o Rafael" · Assistente: "Fechado! Vou passar seu pedido para o João, que confirma o horário." | Ela sabe que o Pedro faz a barba a cada duas semanas. / No dia certo, ela puxa conversa. / E monta o pedido para você. |
| 5 | 56,5–76,5 s | Quando é com você | Selo de estado "Esperando você" → "Você está na conversa" (com "a assistente fica em silêncio") → "Voltou para a assistente". Resumo: "Pedido do Pedro · Barba · Amanhã, fim da tarde · Com o Rafael". João: "Oi, Pedro, aqui é o João! Amanhã tenho 18h30 com o Rafael. Pode ser?" · Cliente: "Fechou!" | O pedido chega pronto para você. / Quando você escreve, a assistente fica quieta. / Quem confirma o horário é sempre você. |
| 6 | 76,5–88,5 s | Datas especiais | Selo "valores de exemplo". Aviso "No aniversário do Pedro" · Assistente: "Feliz aniversário, Pedro! Este mês a barba é por nossa conta." · Aviso "No Dia dos Pais, para quem contou que é pai" · Assistente: "Feliz Dia dos Pais! Nesta semana, o combo está R$ 60." | Aniversário. / Dia dos Pais. / Promoção da semana. / Só os benefícios que você aprovar. |
| 7 | 88,5–106,5 s | Limites claros | Cliente: "Meu corte ficou torto." · Assistente: "Sinto muito! Vou chamar o João agora para resolver com você." · Cliente: "É robô?" · Assistente: "Sou a assistente virtual da Barbearia Exemplo. Quer falar com o João?" · Cliente: "Não me manda mais isso." · Assistente: "Combinado, não envio mais. Quando quiser, é só chamar." | Reclamação vem direto para você. / Ela não finge ser gente. / E quem pede para parar, para na hora. |
| 8 | 106,5–112,5 s | Regra de ouro | Tela escura: "A assistente atende." e, em destaque, "Quem decide é você." | A assistente atende. / Quem decide é você. (sem legenda extra) |
| 9 | 112,5–140,5 s | O que preciso de você | Título "Para começar, preciso de 5 respostas suas" e as perguntas, uma a cada 4,6 s, acumulando: **Agenda:** onde você anota seus horários hoje? · **Devolver a conversa:** uma palavra, um botão ou automático? · **Mensagens:** no máximo uma por semana por cliente? · **Áudio e foto:** a assistente deve entender? · **Benefícios:** quais você toparia de verdade? | Para começar, preciso de cinco respostas suas. / Agenda: onde você anota seus horários hoje? / Devolver a conversa: palavra, botão ou automático? / Mensagens: no máximo uma por semana por cliente? / Áudio e foto: a assistente deve entender? / Benefícios: quais você toparia de verdade? (sem legenda extra) |
| 10 | 140,5–148,5 s | Chamada final | Listras de poste à direita, nome da barbearia, "Me responde aqui mesmo no WhatsApp" e a linha pequena "Antes de ligar de verdade, conferimos as regras do WhatsApp e da LGPD." | Me responde por aqui. / E a gente ajusta tudo do seu jeito. |

As cenas 4 e 5 são a mesma conversa. As falas do dono foram adaptadas do cenário "Pedido de horário vai para o dono" do simulador. "WhatsApp" continua escrito na tela da cena 10, mas não é falado.

## Regras conferidas por `npm run verificar`

- Cada balão, aviso, cartão e pergunta fica na tela pelo menos 1,5 s + 60 ms por caractere.
- Legendas com até 17 caracteres por segundo, terminando dentro da cena.
- Duração total entre 90 e 150 s; nenhum "IA"; nenhum código interno; nenhum nome sem valor.
- Fala sem algarismos, sem "WhatsApp", sem siglas e sem o nome da barbearia.

`narracao/narrar.py` também avisa quando uma fala gerada passa do tempo da sua legenda.

## Mensagem que acompanha o vídeo

Para Arthur enviar junto com o vídeo, com as perguntas completas:

> Oi, {DONO}! Fiz esse vídeo curtinho mostrando como a assistente funcionaria aí na {BARBEARIA}. Os preços e benefícios do vídeo são só exemplo. Para eu ajustar do seu jeito, me responde aqui:
>
> 1. Onde você anota seus horários hoje? É para a assistente mandar lembrete na véspera.
> 2. Como prefere devolver o atendimento para a assistente: uma palavra, um botão ou automático depois de um tempo?
> 3. No máximo quantas mensagens por cliente? Uma por semana está bom?
> 4. A assistente deve entender áudio? E foto de corte de referência: ela comenta ou passa para o barbeiro?
> 5. Quais benefícios você toparia de verdade? Aniversário, Dia dos Pais, combo em dia fraco?

## Vídeo final

`npm run render` gera `saida/video_whatsapp.mp4` (o arquivo a enviar), `saida/video_alta.mp4`, `saida/legendas.srt`, `saida/capa.png` e `saida/frames/`. O primeiro quadro, que o WhatsApp usa como miniatura, já mostra o nome da barbearia, a primeira mensagem e a pergunta do gancho.

## Amostras

- Imagem: `saida/amostras/` (cena 2 aos 9,5 s, cena 5 aos 12 s, cena 9 aos 25,5 s). Gerar de novo com `npm run amostras`.
- Narração: `saida/narracao/voz-b/narracao-completa.wav`, só nesta máquina. Gerar de novo com `narracao/narrar.py --nome voz-b`.
