<script setup lang="ts">
import { computed, ref } from "vue";
import { Layout } from "../util/constants";
import { getHeight, getWidth } from "../util/helpers";

type Properties =
  | {
      width: number;
      height?: never;
      aspectRatio: [number, number];
      numPlayers: number;
      layout: Layout;
    }
  | {
      width?: never;
      height: number;
      aspectRatio: [number, number];
      numPlayers: number;
      layout: Layout;
    };

const {
  aspectRatio = [16, 9],
  numPlayers,
  layout,
  ...props
} = defineProps<Properties>();

const width = ref(props.width ?? getWidth(props.height, aspectRatio));
const height = ref(props.height ?? getHeight(props.width, aspectRatio));

const emptyWidth = computed(
  () => `calc(100% - ${0.5 * numPlayers + width.value}rem)`,
);
const emptyHeight = computed(
  () => `calc(100% - ${0.5 * numPlayers + height.value}rem)`,
);

const gridStyles = computed(() => buildGrid(layouts[layout]));

function buildGrid(layout: (typeof layouts)[Layout]) {
  return `
  grid-template-areas: ${layout.grid};
  grid-template-columns: ${layout.cols.replace(/empty/gi, emptyWidth.value)};
  grid-template-rows: ${layout.rows.replace(/empty/gi, emptyHeight.value)};
  `;
}

const layouts = {
  layout_4_3: {
    grid: `
  "left main main"
  "left main main"
  "left foot foot"`,
    rows: "1fr 1fr empty",
    cols: "empty 1fr 1fr",
  },

  layout_16_9: {
    grid: `
  "left top  top"
  "left main main"
  "left main main"
  "foot foot foot"`,
    rows: "2rem 1fr 1fr calc(empty - 2.5rem)",
    cols: "empty 1fr 1fr",
  },

  layout_race: {
    grid: `
  "main main main"
  "main main main"
  "foot foot foot"`,
    rows: "1fr 1fr empty",
    cols: "empty 1fr 1fr",
  },

  layout_3_way: {
    grid: `
  "left foot main"
  "left foot main"
  "left foot main"`,
    rows: "1fr 1fr empty",
    cols: "1fr 1fr 1fr",
  },
};
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
</style>
