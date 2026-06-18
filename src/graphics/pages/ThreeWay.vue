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
import { getWidth } from "../util/composables.js";
import { mdiAccount } from "@mdi/js";

const props = defineProps<{
  numPlayers: number;
  ratio: [number, number];
}>();

const height = 33;
const width = getWidth(height, props.ratio);
</script>

<template>
  <!-- 4:3 - Width 80 -->
  <!-- 16:9 - Width ?? -->
  <!-- Race - Width 60 -->
  <LayoutComponent
    :width
    :aspect-ratio="[ratio[0], ratio[1] + 1]"
    :num-players="numPlayers"
  >
    <template #left>
      <div
        class="relative h-full flex flex-col gap-2 justify-between items-center"
      >
        <ScreenPanel
          :style="`width: ${width}em; max-height: ${height}em`"
          class=""
        />
        <div class="flex items-center">
          <img src="../assets/logo_2026.png" class="h-9/12" />
        </div>
        <GameInfo class="basis-[30%]" />
      </div>
    </template>

    <template #main>
      <div
        class="relative h-full flex flex-col gap-2 justify-between items-center"
      >
        <ScreenPanel
          v-for="i in Array(numPlayers - 1).keys()"
          :key="i"
          :style="`width: ${width}em; height: ${height}em`"
        />
      </div>
    </template>

    <template #footer>
      <div class="flex flex-col gap-8 h-full max-w-full items-end">
        <div
          class="w-full flex flex-col justify-center gap-16"
          :style="`flex-basis: ${height}em`"
        >
          <div class="w-8/12 flex flex-col">
            <TextLabel
              text="RUNNER 1"
              position="bottom"
              align="end"
              class="w-full h-16 -mb-2 text-lcns-white"
            >
              <TextBox :icon="mdiAccount" class="w-full">dsfsdf</TextBox>
            </TextLabel>
            <TextBox class="w-8/12" theme="pronouns">dsfsdf</TextBox>
          </div>

          <div class="w-8/12 flex flex-col items-end self-end">
            <TextLabel
              text="RUNNER 2"
              position="bottom"
              align="start"
              class="w-full h-16 -mb-2 text-lcns-white"
            >
              <TextBox :icon="mdiAccount" class="w-full">dsfsdf</TextBox>
            </TextLabel>
            <TextBox class="w-8/12" theme="pronouns">dsfsdf</TextBox>
          </div>
        </div>
        <div class="grow w-8/12 flex flex-col items-end">
          <TextLabel
            text="RUNNER 3"
            position="bottom"
            align="start"
            class="w-full h-16 -mb-2 text-lcns-white"
          >
            <TextBox :icon="mdiAccount" class="w-full">dsfsdf</TextBox>
          </TextLabel>
          <TextBox class="w-8/12" theme="pronouns">dsfsdf</TextBox>
        </div>
        <IncentiveComponent class="shrink basis-[30%]" />
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
