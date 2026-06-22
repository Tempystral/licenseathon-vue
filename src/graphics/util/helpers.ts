import { RunData } from "speedcontrol-util/types";

export function getPlayers(run: RunData | undefined) {
  return run?.teams?.map((t) => t.players[0]) || [];
}

export function getHeight(width: number, aspectRatio: [number, number]) {
  return (width * aspectRatio[1]) / aspectRatio[0];
}

export function getWidth(height: number, aspectRatio: [number, number]) {
  return (height * aspectRatio[0]) / aspectRatio[1];
}
