<script setup lang="ts">
import {
  mdiCalendar,
  mdiCalendarMonth,
  mdiGamepad,
  mdiGamepadVariant,
} from "@mdi/js";
import InsetContainer from "../components/InsetContainer.vue";
import TextBox from "../components/text/TextBox.vue";
import TextLabel from "../components/text/TextLabel.vue";
import SvgIcon from "@jamescoyle/vue-icon";
import LCDPanel from "../components/panels/LCDPanel.vue";
import MaterialPanel from "../components/panels/MaterialPanel.vue";
import TimerComponent from "../components/TimerComponent.vue";
import LCDPanel2 from "../components/panels/LCDPanel2.vue";
import LCDItem from "../components/panels/LCDItem.vue";

const timerTestData = [
  {
    contents: "3:01:15",
    label: "TIMER",
  },
  {
    contents: "GAMECUBE",
    label: "PLATFORM",
    icon: mdiGamepadVariant,
  },
  {
    contents: "2001",
    label: "YEAR",
    icon: mdiCalendarMonth,
  },
];
</script>

<template>
  <div class="bg-lcns-white absolute w-full h-full">
    <div
      class="absolute top-10 left-10 w-100 h-100 grid grid-cols-12 grid-rows-12"
    >
      <MaterialPanel
        theme="blue"
        class="row-start-11 row-span-2 col-start-4 col-span-9 justify-center"
      >
        <!-- <TextLabel text="PRONOUNS" position="bottom" align="start" class=""> -->
        <TextBox theme="pronouns" class="w-full h-12"> They/Them </TextBox>
        <!-- </TextLabel> -->
      </MaterialPanel>
      <div class="bg-lcns-blue inner-corner-xl corner-tr col-start-3"></div>
      <MaterialPanel
        theme="blue"
        class="row-start-1 row-span-11 col-start-1 col-span-12"
      >
        <div class="w-full h-full flex flex-col-reverse gap-1 pb-2">
          <TextLabel
            text="RUNNER"
            position="bottom"
            align="start"
            class="text-lcns-white basis-18"
          >
            <TextBox theme="nameplate" class="w-full" :icon="mdiGamepad">
              Donkey
            </TextBox>
          </TextLabel>
          <InsetContainer class="grow"> </InsetContainer>
        </div>
      </MaterialPanel>
    </div>

    <div class="absolute bottom-5 left-5 w-156 flex flex-wrap">
      <MaterialPanel theme="amber" :connects="['bl']" class="w-fit">
        <LCDPanel2 class="">
          <LCDItem label="TIMER">
            <TimerComponent :players="1" ratio="16-9" class="text-6xl" />
          </LCDItem>
          <LCDItem label="PLATFORM">
            <TextLabel
              text="GAMECUBE"
              position="bottom"
              size="md"
              class="text-lcns-teal"
            >
              <SvgIcon type="mdi" :path="mdiGamepadVariant" :size="40" />
            </TextLabel>
          </LCDItem>
          <LCDItem label="YEAR">
            <TextLabel
              text="2001"
              position="bottom"
              size="md"
              class="text-lcns-teal"
            >
              <SvgIcon type="mdi" :path="mdiCalendarMonth" :size="40" />
            </TextLabel>
          </LCDItem>
        </LCDPanel2>
      </MaterialPanel>
      <div class="grow bg-lcns-amber inner-corner-xl corner-bl mb-3"></div>
      <MaterialPanel theme="amber" class="grow">
        <!-- <div class="bg-lcns-white rounded-bl-xl grow -mt-3 -mr-3">a</div> Corner element concept -->
        <InsetContainer theme="amber" :align="'right'">
          <TextLabel text="GAME TITLE" position="left" class="w-full h-15">
            <TextBox theme="lcd">
              Donkey Kong Country Returns: Tropical Freeze
            </TextBox>
          </TextLabel>

          <TextLabel text="CATEGORY" position="left" class="w-full h-15">
            <TextBox theme="lcd"> DOOM (2016) </TextBox>
          </TextLabel>
        </InsetContainer>
      </MaterialPanel>
    </div>

    <!-- Adjust the InsetContainer so it's ONLY the inset which manages its own margin/padding away from the edges
     of its parent. The parent will just be a material panel which you can slap the inset container and stuff onto -->
  </div>
</template>

<style>
.corner-scoop {
  --r: 1rem;
  --voffset: calc(var(--spacing) * 3);
  clip-path: shape(
    from 0% calc(100% - var(--r) - var(--voffset)),
    arc by var(--r) var(--r) of var(--r) ccw,
    hline to 0%,
    close
  );
}
</style>
