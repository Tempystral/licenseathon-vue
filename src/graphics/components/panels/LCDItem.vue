<script setup lang="ts">
const props = defineProps<{
  label: string;
}>();
</script>
<template>
  <div class="lcd-item h-full flex flex-col items-center justify-end">
    <slot />
    <label class="absolute -bottom-4 text-lcns-label text-xs">
      {{ label }}
    </label>
  </div>
</template>
<style>
.lcd-item > figure {
  margin-bottom: -0.25rem;
}
</style>
