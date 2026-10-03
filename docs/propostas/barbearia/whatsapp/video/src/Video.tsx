import React from "react";
import { Audio } from "@remotion/media";
import { AbsoluteFill, interpolate, Series, staticFile, useCurrentFrame } from "remotion";
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

/** Cena com narração, legendas e uma transição curta de entrada e saída.
 *  A primeira cena entra sem fade, para a miniatura do WhatsApp não sair preta. */
const CenaComLegenda: React.FC<{ cena: Cena; n: number }> = ({ cena, n }) => {
  const q = useCurrentFrame();
  const total = quadros(cena.duracao_s);
  const entrada = n === 0 ? 1 : 0;
  return (
    <AbsoluteFill style={{ opacity: interpolate(q, [0, 6, total - 6, total], [entrada, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
      <Conteudo cena={cena} />
      <Legendas legendas={cena.legendas} />
      <Audio src={staticFile(`narracao/cena-${String(n).padStart(2, "0")}-${cena.id}.mp3`)} />
    </AbsoluteFill>
  );
};

export const Video: React.FC = () => (
  <AbsoluteFill style={{ background: cor.fundo }}>
    <Series>
      {cenas.map((cena, n) => (
        <Series.Sequence key={cena.id} durationInFrames={quadros(cena.duracao_s)} name={cena.nome}>
          <CenaComLegenda cena={cena} n={n} />
        </Series.Sequence>
      ))}
    </Series>
  </AbsoluteFill>
);
