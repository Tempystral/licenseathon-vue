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
    <TextBox
      theme="nameplate"
      :icon="mdiGamepad"
      class="absolute top-10 left-10 h-15 w-120"
    >
      Donkey Kong Country Returns: Tropical Freeze
    </TextBox>
    <TextBox
      theme="pronouns"
      :icon="mdiGamepad"
      class="absolute top-30 left-10 h-12 w-80"
    >
      They/Them
    </TextBox>

    <TextBox
      theme="lcd"
      :icon="mdiGamepad"
      class="absolute top-50 left-10 h-13 w-120"
    >
      Donkey Kong Country Returns: Tropical Freeze
    </TextBox>

    <TimerComponent
      :players="1"
      ratio="16-9"
      class="top-100 left-10 text-black"
    ></TimerComponent>

    <div class="absolute top-40 left-200 w-150 flex flex-wrap">
      <MaterialPanel theme="amber" :connects="['bl']" class="w-fit">
        <LCDPanel class="w-fit" :items="timerTestData">
          <template #item="{ contents, label, icon }">
            <div
              class="min-w-20 h-full flex flex-col items-center justify-between"
            >
              <div v-if="icon" class="grow">
                <SvgIcon type="mdi" :path="icon" :size="40" class="h-full" />
              </div>
              <div :class="label === 'TIMER' ? 'text-7xl' : 'text-md -mb-1'">
                {{ contents }}
              </div>
              <div class="absolute -bottom-4 text-lcns-label text-xs">
                {{ label }}
              </div>
            </div>
          </template>
        </LCDPanel>
      </MaterialPanel>
      <div class="grow bg-lcns-amber inner-corner-xl corner-bl mb-3"></div>
      <MaterialPanel theme="amber" class="grow">
        <!-- <div class="bg-lcns-white rounded-bl-xl grow -mt-3 -mr-3">a</div> Corner element concept -->
        <InsetContainer theme="amber" :align="'right'">
          <TextLabel text="PLATFORM" position="left" class="w-full h-15">
            <TextBox theme="lcd">
              Donkey Kong Country Returns: Tropical Freeze
            </TextBox>
          </TextLabel>

          <TextLabel text="GAME TITLE" position="left" class="w-full h-15">
            <TextBox theme="lcd"> DOOM (2016) </TextBox>
          </TextLabel>
        </InsetContainer>
      </MaterialPanel>
    </div>

    <LCDPanel2 class="w-fit absolute top-10 left-203">
      <LCDItem label="TIMER">
        <TimerComponent :players="1" ratio="16-9" class="text-7xl" />
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
