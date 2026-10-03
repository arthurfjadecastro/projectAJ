import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { Legenda as TLegenda, NOME_BARBEARIA, preencher, quadros } from "./dados";
import { ALTURA_LEGENDA, cor, entrada, LARGURA, listras, MARGEM, sans, serif, TOPO_LEGENDA, TOPO_TITULO } from "./estilo";

const LARGURA_UTIL = LARGURA - MARGEM * 2;

export const Titulo: React.FC<{ texto: string; tamanho?: number }> = ({ texto, tamanho = 84 }) => {
  const q = useCurrentFrame();
  return (
    <div style={{ position: "absolute", top: TOPO_TITULO, left: MARGEM, width: LARGURA_UTIL, fontFamily: serif, fontSize: tamanho, lineHeight: 1.08, color: cor.tinta, ...entrada(q, 2) }}>
      {preencher(texto)}
    </div>
  );
};

export const Selo: React.FC = () => (
  <div style={{ position: "absolute", top: 292, left: MARGEM, fontFamily: sans, fontWeight: 600, fontSize: 48, color: cor.latao, border: `3px solid ${cor.latao}`, borderRadius: 999, padding: "4px 26px" }}>
    valores de exemplo
  </div>
);

export const Legendas: React.FC<{ legendas: TLegenda[] }> = ({ legendas }) => {
  const q = useCurrentFrame();
  const atual = legendas.find((l) => q >= quadros(l.de) && q < quadros(l.ate));
  if (!atual) return null;
  const inicio = quadros(atual.de);
  return (
    <div style={{ position: "absolute", top: TOPO_LEGENDA, left: MARGEM, width: LARGURA_UTIL, height: ALTURA_LEGENDA, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ background: "rgba(28,27,26,0.94)", color: cor.creme, fontFamily: sans, fontWeight: 600, fontSize: 52, lineHeight: 1.24, textAlign: "center", borderRadius: 28, padding: "20px 34px", opacity: interpolate(q, [inicio, inicio + 5], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
        {preencher(atual.texto)}
      </div>
    </div>
  );
};

export const Avatar: React.FC<{ tamanho: number }> = ({ tamanho }) => (
  <div style={{ width: tamanho, height: tamanho, borderRadius: "50%", flex: "none", border: `4px solid #C9A04E`, background: listras(tamanho / 6) }} />
);

/** Janela de chat genérica, sem marca de aplicativo. Os filhos são empilhados de baixo para cima. */
export const JanelaChat: React.FC<{ topo: number; altura: number; cabecalho?: boolean; children: React.ReactNode }> = ({ topo, altura, cabecalho = true, children }) => (
  <div style={{ position: "absolute", top: topo, left: MARGEM, width: LARGURA_UTIL, height: altura, borderRadius: 44, overflow: "hidden", background: cor.chat, border: `8px solid ${cor.moldura}`, display: "flex", flexDirection: "column" }}>
    {cabecalho && (
      <div style={{ background: cor.moldura, color: cor.creme, display: "flex", alignItems: "center", gap: 24, padding: "20px 32px", flex: "none" }}>
        <Avatar tamanho={80} />
        <div style={{ fontFamily: sans, fontWeight: 700, fontSize: 52, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{NOME_BARBEARIA}</div>
      </div>
    )}
    <div style={{ flex: 1, minHeight: 0, overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 22, padding: "28px 28px 32px" }}>
      {children}
    </div>
  </div>
);

/** Envolve um item novo do chat: cresce de 0 até a altura natural, empurrando os anteriores para cima. */
export const Surge: React.FC<{ inicio: number; alinhar: "flex-start" | "flex-end" | "center"; children: React.ReactNode }> = ({ inicio, alinhar, children }) => {
  const q = useCurrentFrame();
  if (q < inicio) return null;
  return (
    <div style={{ flex: "none", display: "flex", justifyContent: alinhar, overflow: "hidden", maxHeight: interpolate(q, [inicio, inicio + 10], [0, 700], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }), opacity: interpolate(q, [inicio, inicio + 7], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
      {children}
    </div>
  );
};

export const Balao: React.FC<{ de: "cliente" | "assistente" | "dono"; texto: string }> = ({ de, texto }) => {
  const fundo = de === "cliente" ? cor.balaoCliente : de === "dono" ? cor.balaoDono : cor.balaoAssistente;
  const rotulo = de === "assistente" ? "Assistente" : de === "dono" ? `${preencher("{DONO}")} · dono` : null;
  return (
    <div style={{ maxWidth: "84%", background: fundo, borderRadius: 30, [de === "cliente" ? "borderTopRightRadius" : "borderTopLeftRadius"]: 8, padding: "18px 28px 20px", fontFamily: sans, fontSize: 48, lineHeight: 1.28, color: cor.tinta, whiteSpace: "pre-line" }}>
      {rotulo && <div style={{ fontWeight: 700, fontSize: 48, color: de === "dono" ? cor.dono : cor.latao }}>{rotulo}</div>}
      {preencher(texto)}
    </div>
  );
};

export const Digitando: React.FC<{ de: "assistente" | "dono"; inicio: number; fim: number }> = ({ de, inicio, fim }) => {
  const q = useCurrentFrame();
  if (q < inicio || q >= fim) return null;
  return (
    <div style={{ flex: "none", alignSelf: "flex-start", background: de === "dono" ? cor.balaoDono : cor.balaoAssistente, borderRadius: 30, padding: "26px 30px", display: "flex", gap: 12 }}>
      {[0, 1, 2].map((i) => (
        <div key={i} style={{ width: 18, height: 18, borderRadius: "50%", background: cor.suave, opacity: 0.35 + 0.65 * Math.abs(Math.sin((q - inicio) / 6 + i * 0.8)) }} />
      ))}
    </div>
  );
};

export const Aviso: React.FC<{ texto: string }> = ({ texto }) => (
  <div style={{ maxWidth: "92%", background: cor.aviso, border: `3px dashed ${cor.linha}`, borderRadius: 28, padding: "8px 30px", fontFamily: sans, fontWeight: 600, fontSize: 48, color: cor.suave, textAlign: "center" }}>
    {preencher(texto)}
  </div>
);
