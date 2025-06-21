import { RunData } from "speedcontrol-util/types";

export function getPlayers(run: RunData | undefined) {
  return run?.teams?.map((t) => t.players[0]) || [];
}
