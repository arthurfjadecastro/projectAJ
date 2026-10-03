// Normaliza a narração inteira (-16 LUFS, pico -1,5 dB) e corta uma faixa MP3 por cena
// em public/narracao/, que o vídeo usa. Requer ffmpeg no PATH.
// Uso: node scripts/preparar-audio.mjs [nome]   (padrão: voz-b, de saida/narracao/<nome>/)
import { execFileSync, spawnSync } from "node:child_process";
import { mkdirSync, readFileSync, rmSync } from "node:fs";

const nome = process.argv[2] ?? "voz-b";
const entrada = `saida/narracao/${nome}/narracao-completa.wav`;
const normalizado = `saida/narracao/${nome}/narracao-normalizada.wav`;
const { cenas } = JSON.parse(readFileSync(new URL("../cenas.json", import.meta.url), "utf8"));
const alvo = "I=-16:TP=-1.5:LRA=11";

// Passada 1: medir.
const medida = spawnSync("ffmpeg", ["-hide_banner", "-nostats", "-i", entrada, "-af", `loudnorm=${alvo}:print_format=json`, "-f", "null", "-"], { encoding: "utf8" });
if (medida.status !== 0) throw new Error(`ffmpeg falhou ao medir ${entrada}:\n${medida.stderr}`);
// O ffmpeg imprime o JSON da medição no meio do log; pega o último bloco com "input_i".
const bloco = [...medida.stderr.matchAll(/\{[^{}]*\}/g)].map((x) => x[0]).filter((x) => x.includes('"input_i"')).pop();
if (!bloco) throw new Error(`Medição de volume não encontrada no log do ffmpeg:\n${medida.stderr}`);
const m = JSON.parse(bloco);
console.log(`Medido: ${m.input_i} LUFS, pico ${m.input_tp} dB`);

// Passada 2: aplicar com os valores medidos (ganho linear, sem distorcer a dinâmica).
const filtro = `loudnorm=${alvo}:measured_I=${m.input_i}:measured_TP=${m.input_tp}:measured_LRA=${m.input_lra}:measured_thresh=${m.input_thresh}:offset=${m.target_offset}:linear=true`;
execFileSync("ffmpeg", ["-hide_banner", "-loglevel", "error", "-y", "-i", entrada, "-af", filtro, "-ar", "48000", normalizado]);

// Cortes por cena, na ordem e duração de cenas.json.
rmSync("public/narracao", { recursive: true, force: true });
mkdirSync("public/narracao", { recursive: true });
let inicio = 0;
for (const [n, cena] of cenas.entries()) {
  const saida = `public/narracao/cena-${String(n).padStart(2, "0")}-${cena.id}.mp3`;
  execFileSync("ffmpeg", ["-hide_banner", "-loglevel", "error", "-y", "-i", normalizado, "-ss", String(inicio), "-t", String(cena.duracao_s), "-ac", "1", "-c:a", "libmp3lame", "-b:a", "128k", saida]);
  console.log(`  ${saida}`);
  inicio += cena.duracao_s;
}
rmSync(normalizado);
console.log(`Narração pronta: ${cenas.length} faixas, ${inicio} s.`);
