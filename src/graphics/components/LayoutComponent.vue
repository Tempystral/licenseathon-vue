<script setup lang="ts">
import { computed } from "vue";

const { mainWidth: width, aspectRatio = [16, 9] } = defineProps<{
  mainWidth: number;
  aspectRatio: [number, number];
}>();

const height = computed(() => (width * aspectRatio[1]) / aspectRatio[0]);

const gridStyles = computed(
  () => `
  grid-template-columns: calc(100% - 8px - ${width}rem) ${width}rem;
  grid-template-rows: ${height.value}rem calc(100% - 8px - ${height.value}rem)
  `,
);
</script>

<template>
  <div class="absolute grid layout p-2 gap-2 h-full w-full" :style="gridStyles">
    <div v-if="$slots.left" id="left" style="grid-area: left">
      <slot name="left" />
    </div>

    <div id="main" style="grid-area: main">
      <slot name="main" />
    </div>

    <div v-if="$slots.footer" id="footer" style="grid-area: foot">
      <slot name="footer" />
    </div>
  </div>
</template>

<style lang="scss">
@use "@licenseathon-vue/sass/style.scss";
@use "@licenseathon-vue/sass/color" as theme;

.layout {
  /* grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr; */
  /* grid-template-areas:
    "left main"
    "foot foot"; */
  grid-template-areas:
    "left main"
    "left foot";
}

/* #left {
  background: pink;
}

#main {
  background: grey;
}

#right {
  background: green;
}

#header {
  background: blue;
}

#footer {
  background: orange;
} */
</style>
