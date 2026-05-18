<script setup lang="ts">
import { computed } from "vue";
import FitText from "./FitText.vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { v4 } from "uuid";

const { xPad = 2, theme = "nameplate" } = defineProps<{
  xPad?: number;
  theme?: keyof typeof themes;
  icon?: string;
}>();

interface Theme {
  [key: string]: {
    font: string;
    colors: {
      main: string;
      accent: string;
      border: string;
    };
    ears?: {
      side: "left" | "right" | "both" | "none";
      separator: boolean;
    };
    shadow?: {
      type: "inset" | "drop";
      color: string;
    };
  };
}

const themes: Theme = {
  nameplate: {
    font: "font-[Fusion]",
    colors: {
      main: "bg-lcns-blue text-lcns-black",
      accent: "bg-lcns-amber text-lcns-black",
      border: "border-lcns-black",
    },
    ears: {
      side: "left",
      separator: true,
    },
    shadow: {
      type: "drop",
      color: "bg-lcns-dark-blue",
    },
  },

  pronouns: {
    font: "font-[Fusion]",
    colors: {
      main: "bg-lcns-red text-lcns-black",
      accent: "bg-lcns-blue text-lcns-white",
      border: "border-lcns-black",
    },
    shadow: {
      type: "drop",
      color: "bg-lcns-purple",
    },
  },

  lcd: {
    font: "font-[Fusion]",
    colors: {
      main: "bg-lcns-teal text-lcns-black",
      accent: "bg-lcns-amber text-lcns-black",
      border: "border-lcns-black",
    },
    shadow: {
      type: "inset",
      color: "inset-shadow-xs inset-shadow-black",
    },
  },
} as const;

const style = computed(() => themes[theme]);

function hasLeft() {
  return style.value.ears?.side === "left" || style.value.ears?.side === "both";
}
function hasRight() {
  return (
    style.value.ears?.side === "right" || style.value.ears?.side === "both"
  );
}

function hasDropShadow() {
  return style.value.shadow?.type === "drop";
}

function hasInsetShadow() {
  return style.value.shadow?.type === "inset";
}

const maxWidth = computed(
  () => `max-width: calc(100% - (var(--spacing) * ${calcEarsWidth()}))`,
);

function calcEarsWidth() {
  return (hasLeft() ? 12 : 0) + (hasRight() ? 12 : 0);
}

const padding = computed(() => ({
  x: `padding-inline: calc(var(--spacing) * ${xPad ?? 2})`,
}));

const fitTextOptions = { multiLine: true, minSize: 14, maxSize: 24 };
</script>

<template>
  <div
    class="min-h-12 max-h-20 w-10/12"
    :class="[style.font, hasDropShadow() ? 'pr-1' : '']"
  >
    <div class="relative h-full rounded-md" :class="style.colors.main">
      <div
        v-if="style.shadow?.type === 'drop'"
        :id="'drop-shadow-' + v4()"
        class="absolute h-full w-full inset-1 rounded-lg"
        :class="style.shadow.color"
      ></div>

      <div
        v-if="hasLeft()"
        class="absolute h-full w-12 rounded-l-md"
        :class="[
          style.colors.accent,
          style.colors.border,
          style.ears?.separator ? 'border-r-2' : '',
        ]"
      >
        <div
          v-if="icon"
          class="flex flex-col items-center justify-center h-full"
        >
          <SvgIcon type="mdi" :path="icon" class="" :size="32" />
        </div>
      </div>

      <div
        class="relative h-full w-full"
        :class="[
          hasLeft() ? 'left-12' : 'rounded-l-md',
          hasRight() ? '' : 'rounded-r-md',
          style.colors.main,
          style.shadow?.type === 'inset' ? style.shadow.color : '',
        ]"
        :style="[padding.x, maxWidth]"
      >
        <div class="flex flex-col items-center justify-center h-full">
          <FitText :options="fitTextOptions">
            <template #content>
              <slot />
            </template>
          </FitText>
        </div>
      </div>

      <div
        v-if="hasRight()"
        class="absolute h-full w-12 rounded-r-md right-0"
        :class="[
          style.colors.accent,
          style.colors.border,
          style.ears?.separator ? 'border-l-2' : '',
        ]"
      >
        <div
          v-if="icon"
          class="flex flex-col items-center justify-center h-full"
        >
          <SvgIcon type="mdi" :path="icon" class="" :size="32" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "@licenseathon-vue/sass/style.scss";
</style>
