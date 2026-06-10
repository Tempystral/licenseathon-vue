<script setup lang="ts">
import { mdiCalendarMonth, mdiGamepadVariant } from "@mdi/js";
import { ref } from "vue";
import MaterialPanel from "../panels/MaterialPanel.vue";
import LCDPanel from "../panels/LCDPanel.vue";
import LCDItem from "../panels/LCDItem.vue";
import TimerComponent from "../TimerComponent.vue";
import TextLabel from "../text/TextLabel.vue";
import SvgIcon from "@jamescoyle/vue-icon";
import EstimateDisplay from "./EstimateDisplay.vue";
import TextBox from "../text/TextBox.vue";
import InsetContainer from "../InsetContainer.vue";
</script>
<template>
  <div class="flex flex-wrap">
    <EstimateDisplay side="left" />
    <MaterialPanel theme="amber" :connects="['bl']" class="w-fit -mb-3">
      <LCDPanel class="">
        <LCDItem label="TIMER">
          <TimerComponent :players="1" ratio="16-9" class="text-6xl" />
        </LCDItem>
        <LCDItem label="PLATFORM" class="w-28">
          <TextLabel
            text="PC-ENGINE"
            position="bottom"
            size="md"
            class="text-lcns-teal"
          >
            <SvgIcon type="mdi" :path="mdiGamepadVariant" :size="40" />
          </TextLabel>
        </LCDItem>
        <LCDItem label="YEAR" class="w-12">
          <TextLabel
            text="2001"
            position="bottom"
            size="md"
            class="text-lcns-teal"
          >
            <SvgIcon type="mdi" :path="mdiCalendarMonth" :size="40" />
          </TextLabel>
        </LCDItem>
      </LCDPanel>
    </MaterialPanel>

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
</template>
