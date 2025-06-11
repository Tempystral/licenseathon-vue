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
    <div id="crt" class="absolute z-10 rounded"></div>
    <div class="flex flex-col justify-center items-start">
      <span id="timer" :class="`ms-2 timer-${timerState} z-0`">
        {{ formatTime(timer.data?.time) }}
      </span>
    </div>
  </div>
</template>

<style lang="scss">
@use "@licenseathon-vue/sass/style.scss";
@use "@licenseathon-vue/sass/color" as theme;

#timer {
  color: theme.$lcns-teal;
}

.timer-container.layout-1p {
  color: theme.$lcns-white;
  font-family: Karnivore, mono;

  text-align: right;

  &.layout-16-9 {
    font-size: 4em;
    position: absolute;
    top: 743px;
    left: 25px;
    width: 260px;
    height: 90px;

    #crt {
      width: 454px;
      height: 90px;
    }
  }

  &.layout-4-3,
  &.layout-3-2 {
    font-size: 3em;
    position: absolute;
    top: 765px;
    left: 220px;
    width: 220px;
    height: 70px;

    #crt {
      width: 400px;
      height: 70px;
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

#crt::before {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
    linear-gradient(
      90deg,
      rgba(255, 0, 0, 0.06),
      rgba(0, 255, 0, 0.02),
      rgba(0, 0, 255, 0.06)
    );
  z-index: 2;
  background-size: 100% 2px, 3px 100%;
  pointer-events: none;
}
</style>
