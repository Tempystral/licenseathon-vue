<script setup lang="ts">
import { computed } from "vue";

const { align = "center" } = defineProps<{
  align?: keyof typeof alignment;
}>();

const alignment = {
  left: "items-start",
  center: "items-center",
  right: "items-end",
};
</script>
<template>
  <div
    class="w-full flex flex-col gap-4 p-3 rounded-sm bg-black/10 inset-shadow-xs inset-shadow-black"
    :class="['justify-center', alignment[align]]"
  >
    <slot />
  </div>
</template>

<style lang="scss"></style>
