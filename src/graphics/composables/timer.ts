import { useReplicant } from "nodecg-vue-composable";
import { Timer } from "speedcontrol-util/types";
import { computed } from "vue";
import { defaultTimer } from "../util/defaults";

export function withTimer() {
  const timer = useReplicant<Timer>("timer", "nodecg-speedcontrol", {
    defaultValue: defaultTimer as Timer,
  });

  function formatTime(time: string | undefined) {
    return time ? time.slice(1) : undefined;
  }

  const timerState = computed(() => timer.data?.state || "stopped");
  const currentTime = computed(() => formatTime(timer.data?.time));

  return { currentTime, timerState };
}
