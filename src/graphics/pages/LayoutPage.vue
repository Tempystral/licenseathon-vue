<script setup lang="ts">
import { ref } from "vue";
import LayoutComponent from "../components/LayoutComponent.vue";
import CameraPanel from "../components/page-elements/CameraPanel.vue";
import GameInfo from "../components/page-elements/GameInfo.vue";

const knobPath = new URL("../assets/knob.svg", import.meta.url).href;
const knob = ref<SVGElement | null>(null);
</script>

<template>
  <LayoutComponent :mainWidth="80" :aspect-ratio="[4, 3]">
    <template #left>
      <div class="flex flex-col h-full max-w-full justify-between">
        <CameraPanel class="shrink" />

        <GameInfo class="shrink" />
      </div>
    </template>

    <template #main>
      <div class="relative h-full">
        <div
          class="bg-lcns-black h-full border-4 border-lcns-white rounded-2xl"
        ></div>
      </div>
    </template>

    <template #footer></template>
  </LayoutComponent>
</template>

<style lang="scss">
@use "@licenseathon-vue/sass/style.scss";
@use "@licenseathon-vue/sass/color" as theme;
</style>
