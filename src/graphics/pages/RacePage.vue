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

const props = defineProps<{
  numPlayers: number;
  ratio: [number, number];
}>();

const widths = [0, 0, 61, 41];

const width = computed(() => widths[props.numPlayers]);

const knobPath = new URL("../assets/knob.svg", import.meta.url).href;
const knob = ref<SVGElement | null>(null);
</script>

<template>
  <!-- 4:3 - Width 80 -->
  <!-- 16:9 - Width ?? -->
  <!-- Race - Width 60 -->
  <LayoutComponent :width :aspect-ratio="ratio" :num-players="numPlayers">
    <template #main>
      <div class="relative h-full flex gap-2 justify-between">
        <ScreenPanel
          v-for="i in Array(numPlayers).keys()"
          :key="i"
          :style="`width: ${width - 4 * 0.5}em`"
        />
      </div>
    </template>

    <template #footer>
      <div
        class="grid grid-flow-col gap-2 h-full max-w-full"
        style="grid-template-columns: repeat(3, minmax(0, 1fr))"
      >
        <GameInfo />

        <div class="h-full flex flex-col gap-2">
          <div class="grow grid grid-cols-2 gap-4">
            <div class="flex flex-col">
              <TextLabel
                text="RUNNER 1"
                position="bottom"
                align="end"
                class="w-full h-16 -mb-2 text-lcns-white"
              >
                <TextBox class="w-full">dsfsdf</TextBox>
              </TextLabel>
              <TextBox class="w-8/12 h-8" theme="pronouns">dsfsdf</TextBox>
            </div>
            <div class="flex flex-col items-end">
              <TextLabel
                text="RUNNER 2"
                position="bottom"
                align="start"
                class="w-full h-16 -mb-2 text-lcns-white"
              >
                <TextBox class="w-full">dsfsdf</TextBox>
              </TextLabel>
              <TextBox class="w-8/12 h-8" theme="pronouns">dsfsdf</TextBox>
            </div>
          </div>
          <CommentatorDisplayComponent orientation="horizontal" />
          <div class="flex justify-center">
            <img src="../assets/logo_2026.png" class="w-9/12" />
          </div>
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
