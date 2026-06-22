<script setup lang="ts">
import { computed, ref } from "vue";
import LayoutComponent from "../components/LayoutComponent.vue";
import CameraPanel from "../components/page-elements/CameraPanel.vue";
import CommentatorDisplayComponent from "../components/page-elements/CommentatorDisplayComponent.vue";
import GameInfo from "../components/page-elements/GameInfo.vue";
import IncentiveComponent from "../components/tiltify/IncentiveComponent.vue";
import TextLabel from "../components/text/TextLabel.vue";
import TextBox from "../components/text/TextBox.vue";
import ScreenPanel from "../components/panels/ScreenPanel.vue";
import {
  RunDataActiveRun,
  RunDataPlayer,
} from "speedcontrol-util/types/index.js";
import { useReplicant } from "nodecg-vue-composable";
import { defaultRunData, defaultRunDataPlayer } from "../util/defaults.js";
import { mdiAccount } from "@mdi/js";
import RacePlayerInfoPanel from "../components/page-elements/RacePlayerInfoPanel.vue";
import { withRunData } from "../util/composables.js";
import LogoContainer from "../components/page-elements/LogoContainer.vue";

const props = defineProps<{
  numPlayers: number;
  ratio: [number, number];
}>();

const { runners } = withRunData();

const widths = [0, 0, 61, 41];
const width = computed(() => widths[props.numPlayers]);
</script>

<template>
  <LayoutComponent :width :aspect-ratio="ratio" :num-players="numPlayers">
    <template #main>
      <div class="relative h-full flex gap-2 justify-between">
        <ScreenPanel
          v-for="(player, i) in runners.slice(0, 2)"
          :key="player.id"
          :style="`width: ${width - 4 * 0.5}em`"
          :id="player.teamID"
          :player="i"
          :position="i % 2 == 0 ? 'br' : 'bl'"
        />
      </div>
    </template>

    <template #footer>
      <div
        class="grid grid-flow-col gap-2 h-full max-w-full"
        style="grid-template-columns: repeat(3, minmax(0, 1fr))"
      >
        <GameInfo :runData />

        <div class="h-full flex flex-col gap-2">
          <div class="grow grid grid-cols-2 gap-4">
            <RacePlayerInfoPanel
              v-for="(runner, i) in runners.slice(0, 2)"
              :runner
              :index="i"
              :key="runner.id"
            />
          </div>
          <CommentatorDisplayComponent orientation="horizontal" />
          <LogoContainer />
        </div>

        <IncentiveComponent />
      </div>
    </template>
  </LayoutComponent>
</template>

<style lang="scss">
@use "@licenseathon-vue/sass/style.scss";
@use "@licenseathon-vue/sass/color" as theme;

/* .chroma-key {
  background: magenta;
} */

body {
  background-image: url(../assets/background.png);
  background-size: cover;
  overflow: hidden;
}
</style>
