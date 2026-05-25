<script setup lang="ts">
import { computed, ref } from "vue";

const { items = [] } = defineProps<{ items: ItemProps[] }>();

interface ItemProps {
  contents: string;
  label: string;
  icon?: string;
}
</script>
<template>
  <div class="font-[Karnivore]">
    <div
      class="relative p-2 mb-4 gap-4 grid grid-flow-col auto-cols-max auto-rows-min rounded bg-lcns-purple text-lcns-teal inset-shadow-xs inset-shadow-black"
    >
      <div id="crt" class="absolute w-full h-full before:rounded-lg"></div>
      <div v-for="(item, i) in items" :key="i">
        <slot name="item" v-bind="item" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#crt::before {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background:
    linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
    linear-gradient(
      90deg,
      rgba(255, 0, 0, 0.06),
      rgba(0, 255, 0, 0.02),
      rgba(0, 0, 255, 0.06)
    );
  z-index: 2;
  background-size:
    100% 2px,
    3px 100%;
  pointer-events: none;
}
</style>
