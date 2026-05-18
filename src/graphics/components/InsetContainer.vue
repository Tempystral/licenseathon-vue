<script setup lang="ts">
import { computed } from "vue";

const { theme = "blue", align = "center" } = defineProps<{
  theme?: keyof typeof themes;
  align?: keyof typeof alignment;
}>();

const themes = {
  amber: "bg-lcns-amber",
  blue: "bg-lcns-blue",
  lightblue: "bg-lcns-light-blue",
  red: "bg-lcns-red",
  white: "bg-lcns-white",
};

const alignment = {
  left: "items-start",
  center: "items-center",
  right: "items-end",
};

const colour = computed(() => themes[theme]);
</script>
<template>
  <div class="p-3 rounded-lg" :class="colour">
    <div
      class="w-full h-full flex flex-col gap-4 p-3 rounded-sm bg-black/10 inset-shadow-xs inset-shadow-black"
      :class="['justify-center', alignment[align]]"
    >
      <slot />
    </div>
  </div>
</template>

<style lang="scss"></style>
