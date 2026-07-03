<script setup lang="ts">
import { computed } from "vue";

const { theme = "blue" } = defineProps<{
  theme?: keyof typeof themes;
}>();

const themes = {
  amber: "bg-lcns-amber",
  blue: "bg-lcns-blue",
  lightblue: "bg-lcns-light-blue",
  red: "bg-lcns-red",
  white: "bg-lcns-white",
};
</script>
<template>
  <div class="material-panel p-2 rounded-lg" :class="themes[theme]">
    <slot />
  </div>
</template>

<style lang="scss">
/* Merge padding of sequential panels */
/* Maybe make this relate to a grid */
/* .material-panel + .material-panel,
.material-panel + div + .material-panel {
  margin-top: calc(var(--spacing) * -3);
} */
</style>
