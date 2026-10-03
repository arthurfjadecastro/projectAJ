import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { Aviso, Balao, Digitando, JanelaChat, Selo, Surge, Titulo } from "../componentes";
import { Cena, Evento, preencher, quadros } from "../dados";
import { cor, entrada, LARGURA, MARGEM, sans, serif } from "../estilo";

const DIGITACAO_S = 0.8;

const coresEstado: Record<string, { borda: string; fundo: string }> = {
  "Esperando você": { borda: cor.espera, fundo: cor.esperaClaro },
  "Você está na conversa": { borda: cor.dono, fundo: cor.balaoDono },
};

const EstadoAtual: React.FC<{ estados: Evento[] }> = ({ estados }) => {
  const q = useCurrentFrame();
  const atual = [...estados].reverse().find((e) => q >= quadros(e.t));
  if (!atual || !atual.texto) return null;
  const estilo = coresEstado[atual.texto] ?? { borda: cor.latao, fundo: cor.lataoClaro };
  return (
    <div style={{ position: "absolute", top: 300, left: MARGEM, width: LARGURA - MARGEM * 2, display: "grid", gap: 10 }}>
      <div key={atual.texto} style={{ justifySelf: "start", background: estilo.fundo, border: `4px solid ${estilo.borda}`, borderRadius: 999, padding: "8px 34px", fontFamily: sans, fontWeight: 700, fontSize: 52, color: cor.tinta, ...entrada(q, quadros(atual.t), 7) }}>
        {preencher(atual.texto)}
      </div>
      {atual.nota && <div style={{ fontFamily: sans, fontSize: 48, color: cor.suave, ...entrada(q, quadros(atual.t) + 4, 7) }}>{preencher(atual.nota)}</div>}
    </div>
  );
};

const Resumo: React.FC<{ evento: Evento }> = ({ evento }) => {
  const q = useCurrentFrame();
  if (q < quadros(evento.t)) return null;
  return (
    <div style={{ position: "absolute", top: 486, left: MARGEM, width: LARGURA - MARGEM * 2, background: cor.superficie, border: `4px solid ${cor.espera}`, borderRadius: 36, padding: "26px 40px 30px", display: "grid", gap: 8, ...entrada(q, quadros(evento.t)) }}>
      <div style={{ fontFamily: sans, fontWeight: 700, fontSize: 48, color: cor.espera }}>Resumo que chega para você</div>
      <div style={{ fontFamily: serif, fontSize: 60, color: cor.tinta, lineHeight: 1.1 }}>{preencher(evento.titulo ?? "")}</div>
      {(evento.linhas ?? []).map((linha) => (
        <div key={linha} style={{ display: "flex", alignItems: "center", gap: 20, fontFamily: sans, fontSize: 50, color: cor.tinta }}>
          <div style={{ width: 16, height: 16, background: cor.latao, flex: "none" }} />
          {preencher(linha)}
        </div>
      ))}
    </div>
  );
};

export const Conversa: React.FC<{ cena: Cena }> = ({ cena }) => {
  const eventos = cena.eventos ?? [];
  const estados = eventos.filter((e) => e.de === "estado");
  const resumo = eventos.find((e) => e.de === "resumo");
  const mensagens = eventos.filter((e) => e.de !== "estado" && e.de !== "resumo");
  // Com estado e resumo na tela, a janela de chat fica menor e sem cabeçalho.
  const compacta = estados.length > 0;
  return (
    <AbsoluteFill style={{ background: cor.fundo }}>
      {cena.titulo && <Titulo texto={cena.titulo} />}
      {cena.selo && <Selo />}
      {compacta && <EstadoAtual estados={estados} />}
      {resumo && <Resumo evento={resumo} />}
      <JanelaChat topo={compacta ? 900 : 380} altura={compacta ? 510 : 1030} cabecalho={!compacta}>
        {mensagens.flatMap((e, i) => {
          const inicio = quadros(e.t);
          if (e.de === "aviso") {
            return [
              <Surge key={i} inicio={inicio} alinhar="center">
                <Aviso texto={e.texto ?? ""} />
              </Surge>,
            ];
          }
          const lado = e.de === "cliente" ? "flex-end" : "flex-start";
          const itens = [
            <Surge key={i} inicio={inicio} alinhar={lado}>
              <Balao de={e.de as "cliente" | "assistente" | "dono"} texto={e.texto ?? ""} />
            </Surge>,
          ];
          if (e.de === "assistente" || e.de === "dono") {
            itens.unshift(<Digitando key={`d${i}`} de={e.de} inicio={inicio - quadros(DIGITACAO_S)} fim={inicio} />);
          }
          return itens;
        })}
      </JanelaChat>
    </AbsoluteFill>
  );
};
