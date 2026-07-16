<script setup lang="ts">
import {
  Milestone,
  Total,
} from "../../../../../nodecg-tiltify/src/types/schemas";
import ProgressBar from "./ProgressBar.vue";

const { milestone, textSize = "xl" } = defineProps<{
  textSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  milestone: Milestone;
  total?: Total;
}>();
</script>

<template>
  <div id="options" class="w-full h-full flex flex-col rounded-xl">
    <div class="w-full max-w-full" :key="milestone.id">
      <div :class="`text-${textSize} mb-1`">
        Incentive: <b>{{ milestone.name }}</b>
      </div>
      <hr class="mb-1" />
    </div>
    <div class="relative grow">
      <ProgressBar
        :amount_raised="parseInt((total?.value ?? '0') as string)"
        :total="parseInt(milestone.amount.value as string)"
        position="in"
        text-size="3xl"
      >
        <template #text>
          <p id="target-value" class="inline">${{ total?.value ?? 0 }}</p>
          <p class="inline font-[Karnivore]">&nbsp;/&nbsp;</p>
          <b class="inline">${{ milestone.amount.value }}</b>
        </template>
      </ProgressBar>
    </div>
  </div>
</template>

<style lang="scss"></style>
