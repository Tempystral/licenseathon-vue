<script setup lang="ts">
import { TransitionGroup } from "vue";
import FitText from "./FitText.vue";

const props = defineProps<{
  animation?: string;
  items: {
    text?: string;
    condition: boolean;
  }[];
}>();
</script>
<template>
  <div class="relative overflow-hidden h-full w-full">
    <TransitionGroup name="slide">
      <slot
        name="item"
        v-for="item in items"
        :key="item.text"
        v-bind="item"
        class=""
      />
    </TransitionGroup>
  </div>
</template>
