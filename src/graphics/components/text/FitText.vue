<!-- Adapted from https://github.com/lumenpink/vue3-fitty for the Composition API -->
<!-- Thank you, this works and trying to use Fitty on its own was driving me insane -->
<script setup lang="ts">
import { defineComponent, nextTick, onMounted, ref } from "vue";
import fitty from "fitty";
import { v4 } from "uuid";

interface optionsInterface {
  minSize?: number;
  maxSize?: number;
}

const props = defineProps<{ options: optionsInterface }>();

const contentID = ref("fitty-" + v4());

onMounted(() => {
  fitty("#" + contentID.value, props.options);
});
</script>
<template>
  <div class="mainwrap" :id="contentID">
    <slot name="content" />
    <slot />
  </div>
</template>
<style scoped>
.mainwrap {
  position: relative;
}

.content {
  position: relative;
  overflow: hidden;
}

.svgoverlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
}
</style>
