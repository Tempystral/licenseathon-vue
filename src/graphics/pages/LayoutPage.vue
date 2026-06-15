<script setup lang="ts">
import { ref } from "vue";
import LayoutComponent from "../components/LayoutComponent.vue";
import CameraPanel from "../components/page-elements/CameraPanel.vue";
import GameInfo from "../components/page-elements/GameInfo.vue";
import MaterialPanel from "../components/panels/MaterialPanel.vue";
import InsetContainer from "../components/InsetContainer.vue";
import TextBox from "../components/text/TextBox.vue";
import { mdiMicrophone } from "@mdi/js";

const knobPath = new URL("../assets/knob.svg", import.meta.url).href;
const knob = ref<SVGElement | null>(null);
</script>

<template>
  <LayoutComponent :mainWidth="80" :aspect-ratio="[4, 3]">
    <template #left>
      <div class="flex flex-col gap-3 h-full max-w-full">
        <CameraPanel class="shrink" />

        <TextBox class="h-12 w-8/12" theme="commentator" :icon="mdiMicrophone">
          Some text
        </TextBox>
        <TextBox class="h-12 w-8/12" theme="commentator" :icon="mdiMicrophone">
          Some text 2
        </TextBox>
        <div class="grow"></div>
        <GameInfo class="shrink" />
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
      <MaterialPanel class="h-full" theme="red">
        <InsetContainer class="h-full"></InsetContainer>
      </MaterialPanel>
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
