import { useReplicant } from "nodecg-vue-composable";
import { RunDataActiveRun, RunDataPlayer } from "speedcontrol-util/types";
import { computed } from "vue";
import { defaultRunData, defaultRunDataPlayer } from "../util/defaults";

export function withRunData() {
  const runDataActiveRun = useReplicant<RunDataActiveRun>(
    "runDataActiveRun",
    "nodecg-speedcontrol",
    { defaultValue: defaultRunData as RunDataActiveRun },
  );

  const runners = computed(() => {
    // The following line is ok because the map() only gets called if each null-coalescing operator is passed
    const players = runDataActiveRun.data?.teams.map((team) => team.players[0]);
    // console.info(`Player is ${player?.name}`);
    if (!players) return [defaultRunDataPlayer as RunDataPlayer];
    return players;
  });

  return { runners, runData: computed(() => runDataActiveRun.data) };
}
