<script setup lang="ts">
import { mdiAccount } from "@mdi/js";
import LayoutComponent from "../components/LayoutComponent.vue";
import GameInfo from "../components/page-elements/GameInfo.vue";
import ScreenPanel from "../components/panels/ScreenPanel.vue";
import TextBox from "../components/text/TextBox.vue";
import TextLabel from "../components/text/TextLabel.vue";
import IncentiveComponent from "../components/tiltify/IncentiveComponent.vue";
import { getWidth, withRunData } from "../util/composables.js";
import RacePlayerInfoPanel from "../components/page-elements/RacePlayerInfoPanel.vue";
import LogoContainer from "../components/page-elements/LogoContainer.vue";

const props = defineProps<{
  numPlayers: number;
  ratio: [number, number];
}>();

const { runners } = withRunData();

const height = 33;
const width = getWidth(height, props.ratio);
</script>

<template>
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
          :player="1"
          :id="runners[0].teamID"
          position="br"
          :style="`width: ${width}em; max-height: ${height}em`"
        />
        <LogoContainer />
        <GameInfo class="basis-[30%]" />
      </div>
    </template>

    <template #main>
      <div
        class="relative h-full flex flex-col gap-2 justify-between items-center"
      >
        <ScreenPanel
          v-for="(runner, i) in runners.slice(1)"
          :key="runner.id"
          :player="i"
          :id="runner.teamID"
          :position="i === 2 ? 'bl' : 'tl'"
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
          <RacePlayerInfoPanel
            v-if="runners[0]"
            :runner="runners[0]"
            :index="0"
            :key="runners[0].id"
            class="w-8/12"
          />

          <RacePlayerInfoPanel
            v-if="runners[1]"
            :runner="runners[1]"
            :index="1"
            :key="runners[1].id"
            class="w-8/12 self-end"
          />
        </div>
        <div class="grow w-full flex flex-col items-end">
          <RacePlayerInfoPanel
            v-if="runners[2]"
            :runner="runners[2]"
            :index="2"
            :key="runners[2].id"
            class="w-8/12"
          />
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
