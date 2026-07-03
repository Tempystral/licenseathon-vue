<script setup lang="ts">
import LayoutComponent from "../components/LayoutComponent.vue";
import CameraPanel from "../components/page-elements/CameraPanel.vue";
import CommentatorDisplayComponent from "../components/page-elements/CommentatorDisplayComponent.vue";
import EstimateDisplay from "../components/page-elements/EstimateDisplay.vue";
import GameInfo from "../components/page-elements/GameInfo.vue";
import LogoContainer from "../components/page-elements/LogoContainer.vue";
import TimerPanel from "../components/page-elements/TimerPanel.vue";
import ScreenPanel from "../components/panels/ScreenPanel.vue";
import IncentiveComponent from "../components/tiltify/IncentiveComponent.vue";
import { withRunData } from "../composables/runData.js";
import { Layout } from "../util/constants.js";

const {
  width = 80,
  players,
  ratio,
  layout,
} = defineProps<{
  players: number;
  ratio: [number, number];
  width?: number;
  layout: Layout;
}>();

const { runData, runners } = withRunData();
</script>

<template>
  <LayoutComponent :width :aspect-ratio="ratio" :num-players="players" :layout>
    <template #left>
      <div class="flex flex-col gap-2 h-full max-w-full">
        <CameraPanel v-if="runners[0]" class="shrink" :runner="runners[0]" />
        <CommentatorDisplayComponent orientation="vertical" class="grow" />
        <LogoContainer v-if="layout === 'layout_4_3'" class="shrink" />
        <div id="spacer" class="grow"></div>
        <div id="game-info-panel" class="flex flex-wrap">
          <EstimateDisplay
            :side="layout === 'layout_4_3' ? 'left' : 'center'"
          />
          <TimerPanel :runData />
          <GameInfo :runData class="shrink" v-if="layout === 'layout_4_3'" />
        </div>
      </div>
    </template>

    <template #main>
      <div class="relative h-full">
        <ScreenPanel
          :id="runners[0].teamID"
          :player="0"
          position="bl"
        />
      </div>
    </template>

    <template #footer>
      <div class="h-full flex gap-2">
        <GameInfo
          :runData
          v-if="layout === 'layout_16_9'"
          id="game-info-panel"
          class="basis-300 grow"
        />
        <IncentiveComponent class="shrink" />
        <LogoContainer v-if="layout === 'layout_16_9'" class="grow" />
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
