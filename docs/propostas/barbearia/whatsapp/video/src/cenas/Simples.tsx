import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Avatar, Titulo } from "../componentes";
import { Cena, NOME_BARBEARIA, preencher, quadros } from "../dados";
import { cor, entrada, LARGURA, listras, MARGEM, sans, serif } from "../estilo";

const LARGURA_UTIL = LARGURA - MARGEM * 2;
const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

/** Cena 0: notificações chegando sem parar. */
export const Gancho: React.FC<{ cena: Cena }> = ({ cena }) => {
  const q = useCurrentFrame();
  const chegando = cena.chegando ?? [];
  // O primeiro quadro vira a miniatura no WhatsApp: cabeçalho e primeira mensagem já visíveis.
  const chegada = (i: number) => quadros(i * 0.5);
  const recebidas = chegando.filter((_, i) => q >= chegada(i)).length;
  return (
    <AbsoluteFill style={{ background: cor.moldura }}>
      <div style={{ position: "absolute", top: 190, left: MARGEM, display: "flex", alignItems: "center", gap: 28 }}>
        <Avatar tamanho={110} />
        <div style={{ display: "grid" }}>
          <div style={{ fontFamily: sans, fontWeight: 700, fontSize: 56, color: cor.creme }}>{NOME_BARBEARIA}</div>
          <div style={{ fontFamily: sans, fontSize: 48, color: "#CFC6B8" }}>{recebidas === 1 ? "1 mensagem nova" : `${recebidas} mensagens novas`}</div>
        </div>
      </div>
      <div style={{ position: "absolute", top: 400, left: MARGEM, width: LARGURA_UTIL, display: "grid", gap: 22 }}>
        {chegando.map((texto, i) => {
          const inicio = chegada(i);
          if (q < inicio) return null;
          return (
            <div key={texto} style={{ background: "#2A2826", borderRadius: 28, padding: "18px 30px", display: "grid", gap: 2, ...(i === 0 ? {} : entrada(q, inicio, 6)) }}>
              <div style={{ fontFamily: sans, fontWeight: 600, fontSize: 48, color: "#C9A04E" }}>Cliente</div>
              <div style={{ fontFamily: sans, fontSize: 52, color: cor.creme }}>{texto}</div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

/** Cena 1: tesoura na mão, contador de mensagens subindo. Sem pessoas. */
export const Problema: React.FC<{ cena: Cena }> = ({ cena }) => {
  const q = useCurrentFrame();
  const contador = Math.round(interpolate(q, [quadros(0.5), quadros(5)], [3, 12], clamp));
  return (
    <AbsoluteFill style={{ background: cor.fundo, alignItems: "center" }}>
      <svg width={560} height={560} viewBox="0 0 200 200" style={{ position: "absolute", top: 300, rotate: `${interpolate(q, [0, quadros(7)], [-8, 4])}deg` }}>
        <circle cx="62" cy="150" r="26" fill="none" stroke={cor.tinta} strokeWidth="10" />
        <circle cx="138" cy="150" r="26" fill="none" stroke={cor.tinta} strokeWidth="10" />
        <path d="M80 130 L150 20" stroke={cor.latao} strokeWidth="14" strokeLinecap="round" />
        <path d="M120 130 L50 20" stroke={cor.latao} strokeWidth="14" strokeLinecap="round" />
        <circle cx="100" cy="100" r="7" fill={cor.tinta} />
      </svg>
      <div style={{ position: "absolute", top: 930, display: "flex", alignItems: "center", gap: 30, ...entrada(q, quadros(0.4)) }}>
        <div style={{ width: 150, height: 150, borderRadius: "50%", background: cor.poste, color: cor.creme, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: sans, fontWeight: 700, fontSize: 84, fontVariantNumeric: "tabular-nums" }}>
          {contador}
        </div>
        <div style={{ fontFamily: serif, fontSize: 72, color: cor.tinta, maxWidth: 560, lineHeight: 1.1 }}>{preencher(cena.aviso ?? "")}</div>
      </div>
    </AbsoluteFill>
  );
};

/** Cena 2: três cartões. */
export const Cartoes: React.FC<{ cena: Cena }> = ({ cena }) => {
  const q = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: cor.fundo }}>
      <Titulo texto={cena.titulo ?? ""} />
      <div style={{ position: "absolute", top: 470, left: MARGEM, width: LARGURA_UTIL, display: "grid", gap: 36 }}>
        {(cena.cartoes ?? []).map((c) => (
          <div key={c.titulo} style={{ background: cor.superficie, border: `3px solid ${cor.linha}`, borderRadius: 40, padding: "34px 44px 40px", display: "grid", gap: 6, ...entrada(q, quadros(c.de)) }}>
            <div style={{ fontFamily: serif, fontSize: 88, color: cor.latao, lineHeight: 1.05 }}>{c.titulo}</div>
            <div style={{ fontFamily: sans, fontSize: 52, color: cor.tinta, lineHeight: 1.25 }}>{preencher(c.texto)}</div>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};

/** Cena 8: a regra de ouro. */
export const Frase: React.FC<{ cena: Cena }> = ({ cena }) => {
  const q = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: cor.moldura, justifyContent: "center", alignItems: "center", gap: 36, padding: `0 ${MARGEM}px` }}>
      {(cena.linhas ?? []).map((l) => (
        <div key={l.texto} style={{ fontFamily: serif, fontSize: l.destaque ? 124 : 96, lineHeight: 1.08, textAlign: "center", color: l.destaque ? "#D1A757" : cor.creme, ...entrada(q, quadros(l.de), 12) }}>
          {preencher(l.texto)}
        </div>
      ))}
    </AbsoluteFill>
  );
};

/** Cena 9: as cinco perguntas, acumulando na tela. */
export const Perguntas: React.FC<{ cena: Cena }> = ({ cena }) => {
  const q = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: cor.fundo }}>
      <Titulo texto={cena.titulo ?? ""} tamanho={76} />
      <div style={{ position: "absolute", top: 440, left: MARGEM, width: LARGURA_UTIL, display: "grid", gap: 26 }}>
        {(cena.itens ?? []).map((item, i) => {
          if (q < quadros(item.de)) return null;
          return (
            <div key={item.titulo} style={{ display: "grid", gridTemplateColumns: "84px 1fr", gap: 24, alignItems: "start", background: cor.superficie, borderRadius: 32, padding: "26px 32px", ...entrada(q, quadros(item.de)) }}>
              <div style={{ width: 84, height: 84, borderRadius: "50%", background: cor.latao, color: cor.creme, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: sans, fontWeight: 700, fontSize: 48 }}>{i + 1}</div>
              <div style={{ fontFamily: sans, fontSize: 52, lineHeight: 1.25, color: cor.tinta }}>
                <span style={{ fontWeight: 700 }}>{item.titulo}</span> {preencher(item.texto)}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

/** Cena 10: chamada final. */
export const Final: React.FC<{ cena: Cena }> = ({ cena }) => {
  const q = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: cor.fundo }}>
      <div style={{ position: "absolute", top: 0, right: 0, width: 46, height: "100%", background: listras(22) }} />
      <div style={{ position: "absolute", top: 420, left: MARGEM, width: LARGURA_UTIL - 40, display: "grid", gap: 40 }}>
        <div style={{ fontFamily: serif, fontSize: 108, lineHeight: 1.05, color: cor.tinta, ...entrada(q, quadros(0.3), 12) }}>{NOME_BARBEARIA}</div>
        <div style={{ fontFamily: sans, fontWeight: 700, fontSize: 64, lineHeight: 1.2, color: cor.latao, ...entrada(q, quadros(1.2), 12) }}>{preencher(cena.chamada ?? "")}</div>
      </div>
      <div style={{ position: "absolute", top: 1300, left: MARGEM, width: LARGURA_UTIL - 40, fontFamily: sans, fontSize: 36, color: cor.suave, ...entrada(q, quadros(3), 12) }}>
        {preencher(cena.rodape ?? "")}
      </div>
    </AbsoluteFill>
  );
};
