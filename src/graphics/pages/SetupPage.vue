<script lang="ts" setup>
import { ref } from 'vue';
import background from '../assets/setup.svg';

const layoutRef = ref<SVGElement | null>(null);

/**
 * Replicants required:
 * runDataActiveRun
 * runDataActiveRunSurrounding (Maybe not, do we really care about the before part?)
 * runDataArray
 */

</script>

<template>
  <object :data="background" ref="layoutRef" type="image/svg+xml" id="layout"></object>
</template>

<style lang="scss">
body {
  margin: unset;
  background: #e2e2e4
}

#layout {
  z-index: -1;
}
</style>
