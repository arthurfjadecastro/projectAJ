# Vídeo explicativo do atendente da barbearia

AI-007. Vídeo vertical para o dono da barbearia, feito em [Remotion](https://www.remotion.dev/) a partir de dados. Conteúdo em [roteiro.md](roteiro.md); regras no [prompt](../prompt-video.md).

## Arquivos

| Arquivo | Papel |
|---|---|
| `config.json` | Nomes: barbearia, dono, cliente e barbeiro |
| `cenas.json` | Falas, tempos e legendas de cada cena |
| `src/` | Componentes do vídeo (`Video.tsx` monta as cenas em sequência) |
| `scripts/verificar.mjs` | Confere duração, tempo de leitura, "IA" uma vez e ausência de códigos internos |
| `scripts/amostras.mjs` | Renderiza os quadros de amostra da etapa 1 |
| `saida/` | Saídas; `video_alta.mp4` e `frames/` ficam fora do Git |

## Comandos

Requisitos: Node.js 18 ou mais novo. Funciona igual no Windows e no macOS.

```sh
npm i                # uma vez
npm run verificar    # regras do prompt
npm run amostras     # quadros das cenas 2, 5 e 9
npm run dev          # pré-visualização no Remotion Studio
```

Para trocar o nome da barbearia ou do dono, edite `config.json` e rode `npm run verificar` antes de renderizar: nomes longos podem deixar uma legenda rápida demais.

O vídeo completo, as legendas `.srt`, a capa e a narração são a etapa 2, depois da aprovação de Arthur. O comando `npm run render` será criado nela.

## Licença do Remotion

O Remotion é gratuito para pessoas físicas e empresas de até 3 pessoas. Uma empresa maior precisa de licença: ver <https://www.remotion.pro/license>.
