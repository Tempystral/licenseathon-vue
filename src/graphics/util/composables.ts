import { useReplicant } from "nodecg-vue-composable";
import {
  RunData,
  RunDataActiveRun,
  RunDataPlayer,
} from "speedcontrol-util/types";
import { computed, onBeforeMount, ref } from "vue";
import { defaultRunData, defaultRunDataPlayer } from "./defaults";

export function getPlayers(run: RunData | undefined) {
  return run?.teams?.map((t) => t.players[0]) || [];
}

export function getHeight(width: number, aspectRatio: [number, number]) {
  return (width * aspectRatio[1]) / aspectRatio[0];
}

export function getWidth(height: number, aspectRatio: [number, number]) {
  return (height * aspectRatio[0]) / aspectRatio[1];
}

export function withRunData() {
  const runDataActiveRun = useReplicant<RunDataActiveRun>(
    "runDataActiveRun",
    "nodecg-speedcontrol",
    { defaultValue: defaultRunData as RunDataActiveRun },
  );

  const runners = computed(() => {
    // The following line is ok because the map() only gets called if each null-coalescing operator is passed
    const players = runDataActiveRun?.data?.teams.map(
      (team) => team.players[0],
    );
    // console.info(`Player is ${player?.name}`);
    if (!players) return [defaultRunDataPlayer as RunDataPlayer];
    return players;
  });

  return { runners };
}
