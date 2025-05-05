import NodeCG from "@nodecg/types";

type ServerNodeCG = NodeCG.ServerAPI;

let nodecg: ServerNodeCG;

export function set(ctx: ServerNodeCG): void {
  nodecg = ctx;
}

export function get(): ServerNodeCG {
  return nodecg;
}
