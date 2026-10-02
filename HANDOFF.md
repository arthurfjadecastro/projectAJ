# Passagem de responsabilidade

- Atualizado em: 2026-10-02T10:26:07-03:00
- Tarefa: AI-006 — Mapa de cenários do atendimento por WhatsApp e artefatos de demonstração (READY_FOR_REVIEW).
- Status: Claude Code encerrou a edição; arquivos liberados.

## Ponto exato

Catálogo de cenários e simulador prontos para debate com Arthur. O prompt detalhado e o vídeo de demonstração ainda não começaram: dependem do mapa estabilizado. Nada foi enviado ao dono.

## Concluído

- `docs/propostas/barbearia/whatsapp/cenarios.md`: escopo da v1, regra-mãe, quatro estados (E1 IA atendendo, E2 aguardando o dono, E3 dono atendendo, E4 devolvida à IA) e regras de passagem, fichas necessárias, 99 cenários com IDs estáveis (A dúvidas, B pedidos ao dono, C mensagens personalizadas, D respostas do cliente, E casos difíceis, F passagem, G privacidade), regras das mensagens personalizadas, 12 questões em aberto e restrições a confirmar.
- `docs/propostas/barbearia/whatsapp/simulador.html`: dez cenários vitrine com reprodução e bastidores; publicado em https://claude.ai/artifact/6MjvhmRNBKFxbSpMssG9aF (privado de Arthur). Para atualizar a mesma página em outra sessão, publicar passando essa URL.
- DEC-011 registra as escolhas de Arthur.

## Validações

Contagem de IDs por script (99, sem duplicados); `node --check` do script do simulador; UTF-8, LF e links locais; `bootstrap.py validate .` e 13 testes de `tests/ai_kit`. Sem prévia visual do simulador nesta sessão.

## Pendências e próxima ação

1. Debater as questões Q1–Q12 da seção 7 do catálogo e registrar as escolhas em DECISIONS.
2. Atualizar catálogo e simulador conforme o debate.
3. Escrever o prompt detalhado do atendente e o roteiro do vídeo (cenários vitrine, ordem e falas) para o agente Dev produzir em Remotion ou HyperFrames.
4. Conferir em fonte primária as regras do WhatsApp Business e da LGPD antes de qualquer implantação.
5. Registrar se a reunião com o dono aconteceu e a resposta dele (AI-005).

## Arquivos de entrada

README.md, DECISIONS.md, CURRENT_STATE.md, BACKLOG.md, este HANDOFF e as duas últimas entradas de WORKLOG.md; depois AGENTS e o adaptador do cliente. Para esta tarefa: docs/propostas/barbearia/whatsapp/ e docs/cbl/barbearia-candidata.md.
