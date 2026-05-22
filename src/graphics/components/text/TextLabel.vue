<script setup lang="ts">
import { computed, ref } from "vue";
import InlineSvg from "vue-inline-svg";

const {
  text,
  align = "middle",
  position = "top",
} = defineProps<{
  text: string;
  position?: "top" | "bottom" | "left" | "right";
  align?: "start" | "end";
}>();

const knobPath = new URL("../../assets/knob.svg", import.meta.url).href;
const knob = ref<SVGElement | null>(null);

const isVertical = computed(() => position === "top" || position === "bottom");

function getAlignment() {
  // If the layout is horizontal, always start-align
  return !isVertical.value ? alignment["start"] : alignment[align];
}
const alignment = {
  start: "items-start",
  end: "items-end-safe",
  middle: "items-center",
};
</script>
<template>
  <label
    class="font-[Karnivore] text-gray-600 text-xs flex"
    :class="[isVertical ? 'flex-col gap-1' : 'flex-row gap-2', getAlignment()]"
  >
    <div
      v-if="position === 'top' || position === 'left'"
      :class="[isVertical ? '' : 'h-full w-24']"
    >
      <div class="flex flex-col h-full items-center">
        <span>{{ text }}</span>
        <div v-if="!isVertical" class="grid grid-cols-2 items-end h-full">
          <div
            class="m-2.5 bg-red-600 border-2 border-black/20 rounded-md aspect-square"
          ></div>
          <InlineSvg :src="knobPath" ref="knob" class="h-10" />
        </div>
      </div>
    </div>

    <slot />
    <span
      v-if="position === 'bottom' || position === 'right'"
      :class="[isVertical ? 'mt-1' : 'ml-2 -mt-1']"
    >
      {{ text }}
      <InlineSvg v-if="!isVertical" :src="knobPath" ref="knob" class="h-8" />
    </span>
  </label>
</template>
<style></style>
