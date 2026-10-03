// Etapa 2: renderiza o vídeo completo e as saídas para o WhatsApp.
// Requer ffmpeg e ffprobe no PATH e a narração em public/narracao/ (npm run audio).
import { execFileSync, execSync } from "node:child_process";
import { devNull } from "node:os";
import { existsSync, mkdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";

const config = JSON.parse(readFileSync(new URL("../config.json", import.meta.url), "utf8"));
const { cenas } = JSON.parse(readFileSync(new URL("../cenas.json", import.meta.url), "utf8"));
const preencher = (t) => t.replace(/\{(\w+)\}/g, (m, k) => config[k] ?? m);
const sh = (cmd) => execSync(cmd, { stdio: "inherit" });
const ff = (args) => execFileSync("ffmpeg", ["-hide_banner", "-loglevel", "error", "-y", ...args], { stdio: "inherit" });
const sonda = (arquivo, campos) => execFileSync("ffprobe", ["-v", "error", ...campos, "-of", "csv=p=0", arquivo], { encoding: "utf8" }).trim();

const LIMITE_WHATSAPP = 15 * 1024 * 1024; // folga sob os 16 MB do WhatsApp
const ALTA = "saida/video_alta.mp4";
const WHATSAPP = "saida/video_whatsapp.mp4";

if (!existsSync("public/narracao")) throw new Error("Narração ausente: rode `npm run audio` antes.");
mkdirSync("saida/frames", { recursive: true });

// 1. Regras do prompt.
sh("node scripts/verificar.mjs");

// 2. Versão alta. Com --reaproveitar, usa a que já existe (só refaz as saídas derivadas).
if (process.argv.includes("--reaproveitar") && existsSync(ALTA)) console.log(`Reaproveitando ${ALTA}.`);
else sh(`npx remotion render src/index.ts VideoBarbearia ${ALTA} --codec=h264 --crf=18 --audio-bitrate=192k`);
const duracao = Number(sonda(ALTA, ["-show_entries", "format=duration"]));

// 3. Versão para o WhatsApp: H.264 main, AAC, faststart. Qualidade constante com teto de
//    bitrate calculado pela duração; se ainda passar do limite, duas passadas com bitrate fixo.
const audioK = 96;
const videoK = Math.floor(((LIMITE_WHATSAPP * 8) / 1000 / duracao) * 0.92 - audioK);
// Os quadros do Remotion saem em faixa de cor completa (yuvj420p); celulares esperam a faixa "tv".
const comum = ["-i", ALTA, "-vf", "scale=in_range=pc:out_range=tv,format=yuv420p", "-color_range", "tv", "-c:v", "libx264", "-preset", "slow", "-profile:v", "main"];
const audio = ["-c:a", "aac", "-b:a", `${audioK}k`, "-movflags", "+faststart"];
ff([...comum, "-crf", "21", "-maxrate", `${videoK}k`, "-bufsize", `${videoK * 2}k`, ...audio, WHATSAPP]);
if (statSync(WHATSAPP).size > LIMITE_WHATSAPP) {
  console.log("Acima do limite com qualidade constante; refazendo em duas passadas.");
  const log = "saida/x264-passagem";
  const fixo = [...comum, "-b:v", `${videoK}k`, "-maxrate", `${Math.round(videoK * 1.5)}k`, "-bufsize", `${videoK * 3}k`, "-passlogfile", log];
  ff([...fixo, "-pass", "1", "-an", "-f", "mp4", devNull]);
  ff([...fixo, "-pass", "2", ...audio, WHATSAPP]);
  for (const sufixo of ["-0.log", "-0.log.mbtree"]) rmSync(log + sufixo, { force: true });
}

// 4. Legendas .srt: as legendas da tela e, nas cenas sem legenda, o texto falado.
const hora = (s) => {
  const ms = Math.round(s * 1000);
  const p = (v, n = 2) => String(v).padStart(n, "0");
  return `${p(Math.floor(ms / 3600000))}:${p(Math.floor(ms / 60000) % 60)}:${p(Math.floor(ms / 1000) % 60)},${p(ms % 1000, 3)}`;
};
const blocos = [];
let inicio = 0;
for (const cena of cenas) {
  const fim = cena.duracao_s;
  let trechos = cena.legendas.map((l) => [l.de, l.ate, l.texto]);
  if (!trechos.length && cena.tipo === "frase") trechos = cena.linhas.map((l, i, a) => [l.de, a[i + 1]?.de ?? fim, l.texto]);
  if (!trechos.length && cena.tipo === "perguntas") {
    trechos = [[0.3, cena.itens[0].de, cena.titulo_fala ?? cena.titulo], ...cena.itens.map((it, i, a) => [it.de, a[i + 1]?.de ?? fim, `${it.titulo} ${it.texto}`])];
  }
  for (const [de, ate, texto] of trechos) blocos.push(`${blocos.length + 1}\n${hora(inicio + de)} --> ${hora(inicio + ate)}\n${preencher(texto)}\n`);
  inicio += fim;
}
writeFileSync("saida/legendas.srt", blocos.join("\n"), "utf8");

// 5. Um quadro por cena (perto do fim, com todo o conteúdo na tela) e a capa (cena 2).
inicio = 0;
for (const [n, cena] of cenas.entries()) {
  const t = inicio + cena.duracao_s - 0.8;
  ff(["-ss", t.toFixed(2), "-i", ALTA, "-frames:v", "1", `saida/frames/cena-${String(n).padStart(2, "0")}-${cena.id}.png`]);
  if (n === 2) ff(["-ss", (inicio + 9.5).toFixed(2), "-i", ALTA, "-frames:v", "1", "saida/capa.png"]);
  inicio += cena.duracao_s;
}

// 6. Resumo para o checklist.
for (const arquivo of [ALTA, WHATSAPP]) {
  const [w, h] = sonda(arquivo, ["-select_streams", "v:0", "-show_entries", "stream=width,height"]).split(",");
  const audio = sonda(arquivo, ["-select_streams", "a:0", "-show_entries", "stream=codec_name"]);
  const mb = statSync(arquivo).size / 1024 / 1024;
  console.log(`${arquivo}: ${w}×${h}, ${Number(sonda(arquivo, ["-show_entries", "format=duration"])).toFixed(1)} s, ${mb.toFixed(1)} MB, áudio ${audio || "ausente"}`);
}
const tamanho = statSync(WHATSAPP).size;
console.log(tamanho <= LIMITE_WHATSAPP ? "Versão do WhatsApp dentro do limite." : `ATENÇÃO: versão do WhatsApp com ${(tamanho / 1024 / 1024).toFixed(1)} MB, acima de 15 MB.`);
console.log(`Legendas: saida/legendas.srt (${blocos.length} blocos) · capa: saida/capa.png · frames: saida/frames/`);
