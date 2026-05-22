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
import LCDPanel from "../components/LCDPanel.vue";
import SvgIcon from "@jamescoyle/vue-icon";

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
      class="absolute top-40 left-40 h-15 w-120"
    >
      Donkey Kong Country Returns: Tropical Freeze
    </TextBox>
    <TextBox
      theme="pronouns"
      :icon="mdiGamepad"
      class="absolute top-60 left-40 h-12 w-80"
    >
      They/Them
    </TextBox>

    <TextBox
      theme="lcd"
      :icon="mdiGamepad"
      class="absolute top-80 left-40 h-13 w-120"
    >
      Donkey Kong Country Returns: Tropical Freeze
    </TextBox>

    <InsetContainer
      theme="amber"
      :align="'right'"
      class="absolute top-40 left-200 h-60 w-150"
    >
      <TextLabel text="PLATFORM" position="top" align="start">
        <TextBox theme="nameplate" :icon="mdiGamepad" class="h-12">
          Donkey Kong Country Returns: Tropical Freeze
        </TextBox>
      </TextLabel>

      <TextLabel text="GAME TITLE" position="left" class="w-full h-15">
        <TextBox theme="lcd" :icon="mdiGamepad" class="h-full">
          DOOM (2016)
        </TextBox>
      </TextLabel>
    </InsetContainer>

    <LCDPanel class="absolute top-120 left-40" :items="timerTestData">
      <template #item="{ contents, label, icon }">
        <div class="min-w-20 h-full flex flex-col items-center justify-between">
          <div v-if="icon" class="grow">
            <SvgIcon type="mdi" :path="icon" :size="40" class="h-full" />
          </div>
          <div :class="label === 'TIMER' ? 'text-7xl' : ''">
            {{ contents }}
          </div>
          <div class="absolute -bottom-4 text-gray-600 text-xs">
            {{ label }}
          </div>
        </div>
      </template>
      <!-- <template #label="{ label }">
        <div v-if="label">{{ label }}</div>
      </template> -->
    </LCDPanel>
  </div>
</template>

<style></style>
