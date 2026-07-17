import { useReplicant } from "nodecg-vue-composable";
import { RunDataArray } from "speedcontrol-util/types";
import { computed } from "vue";
import { Incentive } from "./tiltify";

export function withUpcomingRunData() {
  const allRuns = useReplicant<RunDataArray>(
    "runDataArray",
    "nodecg-speedcontrol",
    { defaultValue: [] as RunDataArray },
  );

  const surrounding = useReplicant<{
    previous?: string;
    current?: string;
    next?: string;
  }>("runDataActiveRunSurrounding", "nodecg-speedcontrol");

  function getNextRun(): Incentive[] {
    const next = allRuns.data?.find((run) => run.id === surrounding.data?.next);
    return next
      ? [
          {
            type: "upcoming" as const,
            item: next,
          },
        ]
      : [];
  }

  return computed(getNextRun);
}
