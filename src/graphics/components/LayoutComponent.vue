<script setup lang="ts">
import { computed, ref } from "vue";
import { getHeight, getWidth } from "../util/helpers";

type Properties =
  | {
      width: number;
      height?: never;
      aspectRatio: [number, number];
      numPlayers: number;
    }
  | {
      width?: never;
      height: number;
      aspectRatio: [number, number];
      numPlayers: number;
    };

const {
  aspectRatio = [16, 9],
  numPlayers,
  ...props
} = defineProps<Properties>();

const width = ref(props.width ?? getWidth(props.height, aspectRatio));
const height = ref(props.height ?? getHeight(props.width, aspectRatio));

const gridStyles = computed(() =>
  numPlayers === 3 // Ugly hack for three players
    ? `grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr calc(100% - ${0.5 * numPlayers}rem - ${height.value}rem);
  grid-template-areas: ${layouts[numPlayers]}`
    : `
  grid-template-columns: calc(100% - ${0.5 * numPlayers}rem - ${width.value}rem) 1fr 1fr;
  grid-template-rows: 1fr 1fr calc(100% - ${0.5 * numPlayers}rem - ${height.value}rem);
  grid-template-areas: ${layouts[numPlayers]}
  `,
);

const layouts = [
  "",
  // 1
  `"left main main"
   "left main main"
   "left foot foot"`,
  // 2
  `"main main main"
   "main main main"
   "foot foot foot"`,
  // 3
  `"left foot main"
   "left foot main"
   "left foot main"`,
];
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
  /* grid-template-areas:
    "left main"
    "left foot"; */
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
