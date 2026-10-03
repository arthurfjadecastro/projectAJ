// Confere cenas.json contra o checklist do prompt: duração, tempo de leitura,
// nenhum "IA" (DEC-014), fala sem palavras de dicção difícil, nenhum código
// interno e nomes preenchidos.
import { readFileSync } from "node:fs";

const config = JSON.parse(readFileSync(new URL("../config.json", import.meta.url), "utf8"));
const { cenas, leitura } = JSON.parse(readFileSync(new URL("../cenas.json", import.meta.url), "utf8"));
const preencher = (t) => t.replace(/\{(\w+)\}/g, (m, k) => config[k] ?? m);
const minimo = (texto) => leitura.minimo_s + leitura.por_caractere_s * preencher(texto).length;

const falhas = [];
const textos = [];
const falas = [];
let total = 0;

for (const [n, cena] of cenas.entries()) {
  total += cena.duracao_s;
  const fim = cena.duracao_s;
  const checar = (rotulo, inicio, texto) => {
    textos.push(texto);
    const visivel = fim - inicio;
    if (visivel + 1e-9 < minimo(texto)) falhas.push(`cena ${n} (${cena.id}): ${rotulo} fica ${visivel.toFixed(1)} s, precisa de ${minimo(texto).toFixed(1)} s: "${preencher(texto)}"`);
  };
  for (const e of cena.eventos ?? []) {
    if (e.texto) checar(e.de, e.t, e.texto);
    if (e.nota) checar("nota", e.t, e.nota);
    if (e.titulo) checar("resumo", e.t, [e.titulo, ...(e.linhas ?? [])].join(" "));
  }
  for (const c of cena.cartoes ?? []) checar("cartão", c.de, `${c.titulo} ${c.texto}`);
  for (const i of cena.itens ?? []) checar("pergunta", i.de, `${i.titulo} ${i.texto}`);
  for (const l of cena.linhas ?? []) checar("frase", l.de, l.texto);
  for (const t of cena.chegando ?? []) textos.push(t);
  for (const t of [cena.titulo, cena.aviso, cena.chamada, cena.rodape]) if (t) textos.push(t);
  // Texto falado (DEC-014): o mesmo que a narração usa em narrar.py.
  for (const l of cena.legendas) falas.push([n, l.fala ?? l.texto]);
  for (const l of cena.linhas ?? []) falas.push([n, l.fala ?? l.texto]);
  if (cena.tipo === "perguntas") {
    falas.push([n, cena.titulo_fala ?? cena.titulo]);
    for (const i of cena.itens) falas.push([n, i.fala ?? `${i.titulo} ${i.texto}`]);
  }
  for (const l of cena.legendas) {
    textos.push(l.texto);
    const cps = preencher(l.texto).length / (l.ate - l.de);
    if (cps > 17) falhas.push(`cena ${n} (${cena.id}): legenda rápida demais (${cps.toFixed(1)} caracteres/s): "${preencher(l.texto)}"`);
    if (l.ate > fim) falhas.push(`cena ${n} (${cena.id}): legenda termina depois da cena`);
  }
}

const tudo = textos.map(preencher).join("\n");
const ia = (tudo.match(/\bIA\b/g) ?? []).length;
const codigos = tudo.match(/\b[A-G]\d{2}\b|\bE[1-4]\b|\bDEC-\d+|\bGQ-\d+/g) ?? [];
const sobras = tudo.match(/\{\w+\}/g) ?? [];

if (total < 90 || total > 150) falhas.push(`duração total ${total} s fora de 90–150 s`);
if (ia !== 0) falhas.push(`"IA" aparece ${ia} vezes; não deve aparecer (DEC-014)`);
// Fala sem palavras de dicção difícil para a voz sintética (DEC-014).
for (const [n, f] of falas) {
  const dita = preencher(f);
  const problemas = [
    [/\d/, "algarismo (escreva por extenso)"],
    [/whats ?app/i, '"WhatsApp"'],
    [/\b[A-ZÀ-Ú]{2,}\b/, "sigla"],
  ].filter(([re]) => re.test(dita));
  if (f.includes("{BARBEARIA}") || dita.includes(config.BARBEARIA)) problemas.push([null, "nome da barbearia"]);
  for (const [, motivo] of problemas) falhas.push(`cena ${n}: fala com ${motivo}: "${f}"`);
}
if (codigos.length) falhas.push(`códigos internos na tela: ${codigos.join(", ")}`);
if (sobras.length) falhas.push(`variáveis sem valor em config.json: ${sobras.join(", ")}`);

console.log(`Cenas: ${cenas.length} · duração total: ${total} s · "IA": ${ia}×`);
if (falhas.length) {
  console.log(`\n${falhas.length} problema(s):\n- ${falhas.join("\n- ")}`);
  process.exit(1);
}
console.log("Tudo dentro das regras do prompt.");
