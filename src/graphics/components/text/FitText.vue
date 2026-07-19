<!-- Adapted from https://github.com/lumenpink/vue3-fitty for the Composition API -->
<!-- Thank you, this works and trying to use Fitty on its own was driving me insane -->
<script setup lang="ts">
import fitty from "fitty";
import { v4 } from "uuid";
import { onMounted, ref } from "vue";

interface optionsInterface {
  minSize?: number;
  maxSize?: number;
}

const props = defineProps<{ options: optionsInterface }>();

const contentID = ref("fitty-" + v4());
const fit = () => fitty("#" + contentID.value, props.options);

/* This is fine because it ONLY triggers on mount. On a website
this would be unacceptable, but we can just preload our graphics in OBS
and not care. All update refits should be automatic anyways.

Unfortunately we do need to do this because sometimes flexbox and grid
take a bit long and the fixed size of an element isn't known at mount time,
leading to spillover. I thought it was an issue with fitty not knowing the size
of an element inside of flexbox (and it kind of is) but honestly I think it's just
a good old race condition between fitty and the CSS engine. */
onMounted(() => setTimeout(fit, 100));
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
