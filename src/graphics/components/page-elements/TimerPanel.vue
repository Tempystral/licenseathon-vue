<script setup lang="ts">
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiCalendarMonth, mdiGamepadVariant } from "@mdi/js";
import { RunDataActiveRun } from "speedcontrol-util/types/index.js";
import LCDItem from "../panels/LCDItem.vue";
import LCDPanel from "../panels/LCDPanel.vue";
import MaterialPanel from "../panels/MaterialPanel.vue";
import TextLabel from "../text/TextLabel.vue";
import TimerComponent from "../TimerComponent.vue";

const props = defineProps<{
  runData: RunDataActiveRun;
}>();
</script>
<template>
  <MaterialPanel theme="amber" :connects="['bl']" class="w-fit -mb-3">
    <LCDPanel class="">
      <LCDItem label="TIMER">
        <TimerComponent :players="1" ratio="16-9" class="text-6xl" />
      </LCDItem>
      <LCDItem label="PLATFORM" class="w-28">
        <TextLabel
          v-if="runData?.system"
          :text="runData.system"
          position="bottom"
          size="md"
          class="text-lcns-teal"
        >
          <SvgIcon type="mdi" :path="mdiGamepadVariant" :size="40" />
        </TextLabel>
      </LCDItem>
      <LCDItem label="YEAR" class="w-12">
        <TextLabel
          v-if="runData?.release"
          :text="runData.release"
          position="bottom"
          size="md"
          class="text-lcns-teal"
        >
          <SvgIcon type="mdi" :path="mdiCalendarMonth" :size="40" />
        </TextLabel>
      </LCDItem>
    </LCDPanel>
  </MaterialPanel>
</template>
