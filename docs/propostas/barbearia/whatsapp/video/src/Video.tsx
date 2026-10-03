import React from "react";
import { AbsoluteFill, interpolate, Series, useCurrentFrame } from "remotion";
import { Legendas } from "./componentes";
import { Cena, cenas, quadros } from "./dados";
import { Conversa } from "./cenas/Conversa";
import { Cartoes, Final, Frase, Gancho, Perguntas, Problema } from "./cenas/Simples";
import { cor } from "./estilo";

const Conteudo: React.FC<{ cena: Cena }> = ({ cena }) => {
  switch (cena.tipo) {
    case "gancho": return <Gancho cena={cena} />;
    case "problema": return <Problema cena={cena} />;
    case "cartoes": return <Cartoes cena={cena} />;
    case "conversa": return <Conversa cena={cena} />;
    case "frase": return <Frase cena={cena} />;
    case "perguntas": return <Perguntas cena={cena} />;
    case "final": return <Final cena={cena} />;
  }
};

/** Cena com legendas e uma transição curta de entrada e saída. */
const CenaComLegenda: React.FC<{ cena: Cena }> = ({ cena }) => {
  const q = useCurrentFrame();
  const total = quadros(cena.duracao_s);
  return (
    <AbsoluteFill style={{ opacity: interpolate(q, [0, 6, total - 6, total], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
      <Conteudo cena={cena} />
      <Legendas legendas={cena.legendas} />
    </AbsoluteFill>
  );
};

export const Video: React.FC = () => (
  <AbsoluteFill style={{ background: cor.fundo }}>
    <Series>
      {cenas.map((cena) => (
        <Series.Sequence key={cena.id} durationInFrames={quadros(cena.duracao_s)} name={cena.nome}>
          <CenaComLegenda cena={cena} />
        </Series.Sequence>
      ))}
    </Series>
  </AbsoluteFill>
);
