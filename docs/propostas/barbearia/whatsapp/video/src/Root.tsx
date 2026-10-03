import React from "react";
import { Composition } from "remotion";
import { duracaoTotal, FPS } from "./dados";
import { Video } from "./Video";

export const RemotionRoot: React.FC = () => (
  <Composition id="VideoBarbearia" component={Video} durationInFrames={duracaoTotal} fps={FPS} width={1080} height={1920} />
);
