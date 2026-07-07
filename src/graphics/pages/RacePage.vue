<script setup lang="ts">
import { computed } from "vue";
import LayoutComponent from "../components/LayoutComponent.vue";
import CommentatorDisplayComponent from "../components/page-elements/CommentatorDisplayComponent.vue";
import EstimateDisplay from "../components/page-elements/EstimateDisplay.vue";
import GameInfo from "../components/page-elements/GameInfo.vue";
import LogoContainer from "../components/page-elements/LogoContainer.vue";
import RacePlayerInfoPanel from "../components/page-elements/RacePlayerInfoPanel.vue";
import TimerPanel from "../components/page-elements/TimerPanel.vue";
import ScreenPanel from "../components/panels/ScreenPanel.vue";
import IncentiveComponent from "../components/tiltify/IncentiveComponent.vue";
import { withRunData } from "../composables/runData.js";
import { Layout } from "../util/constants.js";

const props = defineProps<{
  numPlayers: number;
  ratio: [number, number];
}>();

const { runners, runData } = withRunData();

const widths = [0, 0, 58, 41];
const width = computed(() => widths[props.numPlayers]);
</script>

<template>
  <LayoutComponent
    :width
    :aspect-ratio="ratio"
    :num-players="numPlayers"
    :layout="Layout.LAYOUT_2P"
  >
    <template #main>
      <div class="relative h-full flex gap-2 justify-between">
        <ScreenPanel
          v-for="(player, i) in runners.slice(0, 2)"
          :key="player.id"
          :id="player.teamID"
          :style="`width: ${width + 2 * 0.5}em;`"
          :player="i"
          :position="i % 2 == 0 ? 'br' : 'bl'"
        />
      </div>
    </template>

    <template #footer>
      <div
        class="grid grid-flow-col gap-2 h-full max-w-full items-end"
        style="grid-template-columns: repeat(3, minmax(0, 1fr))"
      >
        <div id="game-info-panel" class="flex flex-wrap h-10/12">
          <EstimateDisplay side="left" />
          <TimerPanel :runData />
          <GameInfo :runData class="shrink" />
        </div>

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

        <div class="h-10/12">
          <IncentiveComponent />
        </div>
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
