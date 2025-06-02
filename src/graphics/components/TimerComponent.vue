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
  <div :class="`timer-container layout-${ratio} layout-${players}p`">
    <span id="timer" :class="`ms-2 -mt-1 timer-${timerState}`">
      {{ formatTime(timer.data?.time) }}
    </span>
  </div>
</template>

<style lang="scss">
@use "@licenseathon-vue/sass/style.scss";
@use "@licenseathon-vue/sass/color" as theme;

#timer {
  color: theme.$lcns-teal;
}

.timer-container.layout-1p {
  &.layout-16-9 {
    color: theme.$lcns-dark-blue;
    font-family: "Fusion";
    font-size: 46px;

    position: absolute;
    top: 580px;
    left: 532px;
    width: 248px;
    height: 70px;

    text-align: right;
    display: flex;
  }

  &.layout-4-3 {
    color: theme.$lcns-white;
    font-family: Karnivore, mono;
    font-size: 3em;

    position: absolute;
    top: 765px;
    left: 220px;
    width: 220px;
    height: 70px;

    text-align: right;
    display: flex;
    span {
      vertical-align: middle;
      align-self: baseline;
    }
  }
}

.timer-container.layout-2p,
.timer-container.layout-3p {
  color: theme.$lcns-dark-blue;
  font-family: "Fusion";
  font-size: 34px;

  position: absolute;
  top: 608px;
  left: 280px;
  width: 180px;
  height: 50px;
}
</style>
