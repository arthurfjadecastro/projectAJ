import { loadFont as carregarSerif } from "@remotion/google-fonts/YoungSerif";
import { loadFont as carregarSans } from "@remotion/google-fonts/Figtree";
import { Easing, interpolate } from "remotion";

// Identidade do simulador (docs/propostas/barbearia/whatsapp/simulador.html).
export const serif = carregarSerif("normal", { weights: ["400"], subsets: ["latin"] }).fontFamily;
export const sans = carregarSans("normal", { weights: ["400", "600", "700"], subsets: ["latin"] }).fontFamily;

export const cor = {
  fundo: "#F3EDE3",
  superficie: "#FFFDF8",
  tinta: "#2A2826",
  suave: "#6B6660",
  linha: "#DDD3C4",
  latao: "#8E6A2C",
  lataoClaro: "#EADBBE",
  poste: "#A8322D",
  moldura: "#1C1B1A",
  creme: "#F3EDE3",
  chat: "#E9E1D3",
  balaoCliente: "#F1E0BF",
  balaoAssistente: "#FFFDF8",
  balaoDono: "#DCE7EE",
  dono: "#2F6280",
  espera: "#B7791F",
  esperaClaro: "#F6E7C8",
  aviso: "#F7F2E9",
};

// Tela 1080×1920; nada importante nos 150 px de cima nem nos 250 px de baixo.
export const LARGURA = 1080;
export const MARGEM = 80;
export const TOPO_TITULO = 176;
export const TOPO_LEGENDA = 1440;
export const ALTURA_LEGENDA = 230;

const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

/** Entrada suave de um elemento a partir do quadro `inicio`. */
export const entrada = (quadro: number, inicio: number, duracao = 9) => ({
  opacity: interpolate(quadro, [inicio, inicio + duracao], [0, 1], clamp),
  translate: `0px ${interpolate(quadro, [inicio, inicio + duracao], [28, 0], { ...clamp, easing: Easing.bezier(0.16, 1, 0.3, 1) })}px`,
});

/** Listras do poste de barbearia. */
export const listras = (largura: number) =>
  `repeating-linear-gradient(135deg, ${cor.poste} 0 ${largura}px, ${cor.creme} ${largura}px ${largura * 2}px)`;
