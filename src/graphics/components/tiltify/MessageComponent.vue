<script setup lang="ts">
import FitText from "../text/FitText.vue";

const props = defineProps<{
  message: { text?: string; img?: string; orientation: "h" | "v"; id: string };
}>();

const fitTextOptions = { multiLine: true, minSize: 28, maxSize: 32 };
</script>
<template>
  <div
    class="h-full w-full flex items-center flex-wrap justify-center gap-2"
    :class="message.orientation === 'v' ? 'flex-col' : 'flex-row'"
  >
    <FitText class="text-center" :options="fitTextOptions">
      {{ message.text }}
    </FitText>

    <div v-if="message.img" class="min-w-0 max-w-full h-8/12">
      <img :src="message.img" class="h-full bg-white/80 rounded-xl" />
    </div>
  </div>
</template>
<style lang="scss"></style>
