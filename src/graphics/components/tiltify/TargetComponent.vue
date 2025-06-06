<script setup lang="ts">
import { useReplicant } from "nodecg-vue-composable";
import { onMounted, ref, watch } from "vue";
import {
  Target,
  Targets,
} from "../../../../../../nodecg/bundles/nodecg-tiltify/src/types/schemas";
import ProgressBar from "./ProgressBar.vue";

const { target, textSize = "xl" } = defineProps<{
  textSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  target: Target;
}>();
</script>

<template>
  <div id="options" class="w-full h-full p-2 flex flex-col rounded-xl">
    <div class="w-full max-w-full" :key="target.id">
      <div :class="`text-${textSize} mb-1`">
        Incentive: <b>{{ target.name }}</b>
      </div>
      <hr class="mb-1" />
    </div>
    <div class="relative grow">
      <ProgressBar
        :amount_raised="parseInt(target.amount_raised.value as string)"
        :total="parseInt(target.amount.value as string)"
        position="in"
        text-size="3xl"
      />
    </div>
  </div>
</template>

<style lang="scss"></style>
