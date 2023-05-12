<script lang="ts" setup>
import { ref } from 'vue';
import background from '../assets/setup.svg';

const layoutRef = ref<SVGElement | null>(null);

layoutRef.value?.blur();

/**
 * Replicants required:
 * runDataActiveRun
 * runDataActiveRunSurrounding (Maybe not, do we really care about the before part?)
 * runDataArray
 */

</script>

<template>

<object :data="background" ref="layoutRef" type="image/svg+xml" id="layout" ></object>
<!-- Current run details panel -->

<!-- Upcoming runs -->

<!-- Marathon info? -->


</template>

<style lang="scss">
html {
  background: #e2e2e4
}
</style>
