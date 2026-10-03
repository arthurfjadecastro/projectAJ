import config from "../config.json";
import roteiro from "../cenas.json";

export type Legenda = { de: number; ate: number; texto: string };

export type Evento = {
  t: number;
  de: "cliente" | "assistente" | "dono" | "aviso" | "estado" | "resumo";
  texto?: string;
  nota?: string;
  titulo?: string;
  linhas?: string[];
};

export type Cena = {
  id: string;
  nome: string;
  tipo: "gancho" | "problema" | "cartoes" | "conversa" | "frase" | "perguntas" | "final";
  duracao_s: number;
  titulo?: string;
  selo?: boolean;
  legendas: Legenda[];
  chegando?: string[];
  aviso?: string;
  cartoes?: { de: number; titulo: string; texto: string }[];
  eventos?: Evento[];
  linhas?: { de: number; texto: string; destaque?: boolean }[];
  itens?: { de: number; titulo: string; texto: string }[];
  chamada?: string;
  rodape?: string;
};

const nomes = config as Record<string, string>;

/** Troca {BARBEARIA}, {DONO}, {CLIENTE} e {BARBEIRO} pelos valores de config.json. */
export const preencher = (texto: string) => texto.replace(/\{(\w+)\}/g, (marca, chave: string) => nomes[chave] ?? marca);

export const FPS = roteiro.fps;
export const cenas = roteiro.cenas as unknown as Cena[];
export const quadros = (segundos: number) => Math.round(segundos * FPS);
export const duracaoTotal = cenas.reduce((soma, c) => soma + quadros(c.duracao_s), 0);
export const NOME_BARBEARIA = nomes.BARBEARIA;
export const NOME_DONO = nomes.DONO;
