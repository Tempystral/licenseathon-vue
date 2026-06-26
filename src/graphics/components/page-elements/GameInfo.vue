<script setup lang="ts">
import { RunDataActiveRun } from "speedcontrol-util/types/index.js";
import InsetContainer from "../InsetContainer.vue";
import MaterialPanel from "../panels/MaterialPanel.vue";
import TextBox from "../text/TextBox.vue";
import TextLabel from "../text/TextLabel.vue";

const props = defineProps<{
  runData: RunDataActiveRun;
}>();
</script>
<template>
  <MaterialPanel theme="amber" class="grow max-w-full">
    <!-- <div class="bg-lcns-white rounded-bl-xl grow -mt-3 -mr-3">a</div> Corner element concept -->
    <InsetContainer theme="amber" :align="'right'">
      <TextLabel text="GAME TITLE" position="left" class="w-full h-15">
        <TextBox theme="lcd">
          {{ runData?.game }}
        </TextBox>
      </TextLabel>
      <TextLabel text="CATEGORY" position="left" class="w-full h-15">
        <TextBox theme="lcd">
          {{ runData?.category }}
        </TextBox>
      </TextLabel>
    </InsetContainer>
  </MaterialPanel>
</template>
