<script setup lang="ts">
import { withTimer } from "../composables/timer";

const props = defineProps<{
  ratio: string;
  players: number;
}>();

const { currentTime, timerState } = withTimer();
</script>

<template>
  <div class="text-left flex items-end w-[6ch]">
    <span id="timer" :class="`timer-${timerState} z-0`">
      {{ currentTime }}
    </span>
  </div>
</template>

<style lang="scss">
@use "@licenseathon-vue/sass/style.scss";
@use "@licenseathon-vue/sass/color" as theme;

.timer-finished {
  color: palegreen;
}
</style>
