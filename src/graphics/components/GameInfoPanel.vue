<script setup lang="ts">
import { useReplicant } from "nodecg-vue-composable";
import { RunDataActiveRun } from "speedcontrol-util/types";
import { onMounted, watch } from "vue";
import { fitText } from "../util/composables";
import { defaultRunData } from "../util/defaults";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiCalendar, mdiCalendarMonth, mdiGamepadVariant } from "@mdi/js";

const props = defineProps<{
  activeRun: RunDataActiveRun;
  players: number;
}>();

const runDataActiveRun = useReplicant<RunDataActiveRun>(
  "runDataActiveRun",
  "nodecg-speedcontrol",
  { defaultValue: defaultRunData as RunDataActiveRun }
);

// Fit text
// const options = { multiLine: true, minSize: 14, maxSize: 24 };
const fit = () => {
  let options = {};
  if (props.players === 1) {
    options = { multiLine: true, minSize: 14, maxSize: 24 };
  }
  if (props.players > 1) {
    options = { multiLine: true, minSize: 11, maxSize: 18 };
  }
  fitText(["#game-name", "#game-category"], options);
};
onMounted(fit);
watch(() => runDataActiveRun?.data, fit);
</script>

<template>
  <div
    v-if="activeRun"
    :class="['game-container', `layout-${players}p`]"
    class="fixed font-[Fusion]"
    :id="activeRun.id"
  >
    <div class="game-name-container info-container">
      <p id="game-name" class="fit mt-1">{{ activeRun?.game }}</p>
    </div>
    <div class="game-category-container info-container">
      <p id="game-category" class="fit mt-1">{{ activeRun?.category }}</p>
    </div>

    <div class="game-estimate-container info-container">
      <p id="game-estimate" class="font-[Karnivore_Lite] text-2xl mb-1">
        {{ activeRun.estimate }}
      </p>
    </div>

    <div class="font-[Karnivore] text-lg">
      <div
        v-if="activeRun.system"
        class="game-platform-container info-container"
      >
        <SvgIcon
          type="mdi"
          :path="mdiGamepadVariant"
          class="inline align-middle"
          :size="32"
        />
        <p id="game-platform">{{ activeRun.system }}</p>
      </div>
      <div v-if="activeRun.release" class="game-year-container info-container">
        <SvgIcon
          type="mdi"
          :path="mdiCalendarMonth"
          class="inline align-middle"
          :size="32"
        />
        <p id="game-year">{{ activeRun.release }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "@licenseathon-vue/sass/style.scss";
@use "@licenseathon-vue/sass/color" as theme;

.info-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &.layout-1p p {
    padding-inline: 0.5em;
  }

  &.game-year-container,
  &.game-platform-container {
    color: theme.$lcns-teal;
    justify-content: end;
  }
}

.game-container {
  &.layout-1p {
    color: theme.$lcns-black;
    text-align: center;
    left: 5px;
    top: 755px;

    .game-name-container {
      top: 130px;
      left: 119px;
      width: 481px;
      height: 50px;
    }
    .game-category-container {
      top: 200px;
      left: 119px;
      width: 481px;
      height: 50px;
    }
    .game-estimate-container {
      top: 50px;
      left: 85px;
      width: 112px;
      height: 32px;
    }
    .game-platform-container {
      top: 10px;
      left: 455px;
      width: 100px;
      height: 70px;
    }
    .game-year-container {
      top: 10px;
      left: 555px;
      width: 60px;
      height: 70px;
    }
  }

  &.layout-2p,
  &.layout-3p {
    color: theme.$lcns-dark-blue;
    text-align: right;
    top: 530px;
    left: 570px;

    .game-name-container {
      top: 34px;
      left: 8px;
      width: 190px;
      height: 46px;
      p::first-line {
        text-indent: 1em;
      }
      text-indent: 0;
    }
    .game-category-container {
      top: 78px;
      left: 20px;
      width: 168px;
      height: 42px;
      justify-content: end;
    }
    .game-estimate-container {
      top: 120px;
      left: 50px;
      width: 136px;
      height: 36px;
      justify-content: end;
    }
  }
}
</style>
