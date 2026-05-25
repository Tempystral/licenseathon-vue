<script setup lang="ts">
import { useReplicant } from "nodecg-vue-composable";
import { type Timer } from "speedcontrol-util/types";
import { computed } from "vue";
import { defaultTimer } from "../util/defaults";

const props = defineProps<{
  ratio: string;
  players: number;
}>();

// Helper composable to make accessing/modifying replicants easier.
// For more information see https://github.com/Dan-Shields/nodecg-vue-composable
const timer = useReplicant<Timer>("timer", "nodecg-speedcontrol", {
  defaultValue: defaultTimer as Timer,
});

const timerState = computed(() => timer.data?.state || "stopped");

function formatTime(time: string | undefined) {
  return time ? time.slice(1) : undefined;
}
</script>

<template>
  <div class="text-left flex items-end w-[6ch]">
    <span id="timer" :class="`timer-${timerState} z-0`">
      {{ formatTime(timer.data?.time) }}
    </span>
  </div>
</template>

<style lang="scss">
@use "@licenseathon-vue/sass/style.scss";
@use "@licenseathon-vue/sass/color" as theme;
</style>
