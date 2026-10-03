# Estado atual

- Atualizado em: 2026-10-02T22:21:23-03:00
- Agente: Claude Code (Claude Opus 5.5), Windows; integrador dos registros comuns
- Tarefa: AI-007 — Vídeo explicativo do atendente para o dono da barbearia
- Status: READY_FOR_REVIEW
- Etapa: 1 entregue; três amostras de voz da cena 2 prontas. A etapa 2 aguarda Arthur aprovar o roteiro e escolher a voz.
- Autorização: DEC-012 e DEC-013. Base: DEC-011.
- Arquivos em edição: nenhum
- Próxima ação: Arthur ouve `docs/propostas/barbearia/whatsapp/video/saida/narracao/{ptbr-padrao,ptbr-calma,multi-padrao}/cena-02-solucao.wav` e escolhe; com o roteiro aprovado, gerar a narração completa (`narrar.py --nome final`), incluir o áudio no Remotion, criar `npm run render`, `.srt`, capa e frames.
- Tarefas relacionadas: AI-006 READY_FOR_REVIEW (catálogo e simulador). AI-001, AI-002, AI-004 e AI-005 READY_FOR_REVIEW, sem aceite inferido.
- Campo: dono de barbearia MEI a convidar, segundo Arthur; participação e dados não confirmados.
- Limitações: dados fictícios; demonstração ilustrativa que não substitui o diagnóstico (DEC-010). Os áudios e o ambiente Python ficam só nesta máquina (fora do Git); em outra máquina, recriar conforme o README do vídeo.
