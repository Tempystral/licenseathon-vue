<script setup lang="ts" generic="T extends string | object">
import { TransitionGroup } from "vue";

interface Item<T> {
  item: T;
  condition: boolean;
}

const { animation = "slide" } = defineProps<{
  animation?: string;
  items: Item<T>[];
}>();
</script>
<template>
  <div class="relative overflow-hidden h-full w-full">
    <TransitionGroup :name="animation">
      <slot
        name="item"
        v-for="item in items"
        :key="item.item"
        v-bind="item"
        class=""
      />
    </TransitionGroup>
  </div>
</template>
