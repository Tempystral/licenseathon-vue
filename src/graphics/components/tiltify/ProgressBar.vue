<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps<{
  amount_raised: number;
  total: number;
  name?: string;
  colour?: string;
  position?: "in" | "over";
}>();

const barColor = computed(() => props.colour ?? "bg-amber-500");

const percentRaised = computed(() =>
  props.total === 0 ? 0 : (props.amount_raised / props.total) * 100
);
</script>
<template>
  <p class="mb-1" v-if="name != undefined && position === 'over'">
    <b>{{ name }}</b>
  </p>
  <div :class="`flex h-10`">
    <div class="absolute ms-2 flex items-center h-[inherit]">
      <p class="text-xl">
        <span class="mb-1" v-if="name != undefined && position === 'in'">
          {{ name }}:
        </span>
        <b>${{ amount_raised }}</b>
      </p>
    </div>
    <div
      class="text-black transition-all rounded-l"
      :class="`${
        percentRaised >= 100 ? 'rounded-r' : 'rounded-r-none'
      } ${barColor}`"
      :style="`width: ${percentRaised}%`"
      role="progressbar"
      :aria-valuenow="percentRaised"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      &nbsp;
    </div>
    <div
      class="bg-black/25 transition-all rounded-r"
      :class="percentRaised <= 0 ? 'rounded-l' : 'rounded-l-none'"
      :style="`width: calc(100% - ${percentRaised}%)`"
    >
      &nbsp;
    </div>
  </div>
</template>
