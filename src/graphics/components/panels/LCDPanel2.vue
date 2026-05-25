<script setup lang="ts">
import { computed, VNode } from "vue";
import LCDItem from "./LCDItem.vue";

const slots = defineSlots();
const defaultSlot: VNode[] = slots.default();

const hasLabelledItem = computed(
  () => defaultSlot.findIndex((slot) => slot.type === LCDItem) > -1,
);
</script>
<template>
  <div class="font-[Karnivore]">
    <div
      class="relative p-2 gap-4 grid grid-flow-col auto-cols-max auto-rows-min rounded bg-lcns-purple text-lcns-teal inset-shadow-xs inset-shadow-black"
      :class="hasLabelledItem ? 'mb-4' : ''"
    >
      <div id="crt" class="absolute w-full h-full before:rounded-lg"></div>
      <slot />
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
