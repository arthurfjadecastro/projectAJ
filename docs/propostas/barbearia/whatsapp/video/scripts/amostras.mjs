// Etapa 1: renderiza um quadro de amostra das cenas 2, 5 e 9 em saida/amostras/.
import { execSync } from "node:child_process";
import { mkdirSync, readFileSync } from "node:fs";

const { fps, cenas } = JSON.parse(readFileSync(new URL("../cenas.json", import.meta.url), "utf8"));
// Segundo, dentro de cada cena, em que todo o conteúdo principal já está na tela.
const amostras = { 2: 9.5, 5: 12, 9: 25.5 };

mkdirSync("saida/amostras", { recursive: true });
let inicio = 0;
for (const [n, cena] of cenas.entries()) {
  if (n in amostras) {
    const quadro = Math.round((inicio + amostras[n]) * fps);
    const saida = `saida/amostras/cena-${String(n).padStart(2, "0")}-${cena.id}.png`;
    console.log(`Cena ${n} (${cena.nome}): quadro ${quadro} -> ${saida}`);
    execSync(`npx remotion still src/index.ts VideoBarbearia ${saida} --frame=${quadro}`, { stdio: "inherit" });
  }
  inicio += cena.duracao_s;
}
