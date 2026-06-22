<script setup lang="ts">
import LayoutComponent from "../components/LayoutComponent.vue";
import CameraPanel from "../components/page-elements/CameraPanel.vue";
import CommentatorDisplayComponent from "../components/page-elements/CommentatorDisplayComponent.vue";
import GameInfo from "../components/page-elements/GameInfo.vue";
import LogoContainer from "../components/page-elements/LogoContainer.vue";
import IncentiveComponent from "../components/tiltify/IncentiveComponent.vue";
import { withRunData } from "../composables/runData.js";

const props = defineProps<{
  numPlayers: number;
  ratio: [number, number];
}>();

const { runData, runners } = withRunData();
</script>

<template>
  <LayoutComponent :width="80" :aspect-ratio="ratio" :num-players="numPlayers">
    <template #left>
      <div class="flex flex-col gap-3 h-full max-w-full">
        <CameraPanel v-if="runners[0]" class="shrink" :runner="runners[0]" />

        <CommentatorDisplayComponent orientation="vertical" />
        <div class="grow"></div>
        <LogoContainer />
        <div class="grow"></div>
        <GameInfo :runData class="shrink" />
      </div>
    </template>

    <template #main>
      <div class="relative h-full">
        <div
          class="chroma-key h-full border-4 border-lcns-white rounded-2xl"
        ></div>
      </div>
    </template>

    <template #footer>
      <IncentiveComponent />
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
