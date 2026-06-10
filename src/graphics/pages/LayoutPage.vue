<script setup lang="ts">
import { mdiCalendarMonth, mdiGamepad, mdiGamepadVariant } from "@mdi/js";
import LayoutComponent from "../components/LayoutComponent.vue";
import TextLabel from "../components/text/TextLabel.vue";
import TextBox from "../components/text/TextBox.vue";
import MaterialPanel from "../components/panels/MaterialPanel.vue";
import LCDPanel from "../components/panels/LCDPanel.vue";
import LCDItem from "../components/panels/LCDItem.vue";
import TimerComponent from "../components/TimerComponent.vue";
import SvgIcon from "@jamescoyle/vue-icon";
import InsetContainer from "../components/InsetContainer.vue";
import InlineSvg from "vue-inline-svg";
import { ref } from "vue";
import GameInfo from "../components/page-elements/GameInfo.vue";
import CameraPanel from "../components/page-elements/CameraPanel.vue";

const knobPath = new URL("../assets/knob.svg", import.meta.url).href;
const knob = ref<SVGElement | null>(null);
</script>

<template>
  <LayoutComponent>
    <template #left>
      <div class="flex flex-col h-full justify-between">
        <CameraPanel class="grow" />

        <GameInfo />
      </div>
    </template>

    <template #main>
      <div class="relative w-7xl h-full">
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
