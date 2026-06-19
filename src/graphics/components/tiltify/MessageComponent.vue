<script setup lang="ts">
const props = defineProps<{
  message: { text?: string; img?: string; orientation: "h" | "v"; id: string };
}>();
</script>
<template>
  <div
    class="h-full w-full flex flex-wrap items-center justify-center text-4xl gap-2"
    :class="message.orientation === 'v' ? 'flex-col' : 'flex-row'"
  >
    <span class="text-center">
      {{ message.text }}
    </span>
    <div v-if="message.img" class="min-w-0 max-w-full h-8/12 grow">
      <img :src="message.img" class="h-full bg-white/80 rounded-xl" />
    </div>
  </div>
</template>
<style lang="scss"></style>
