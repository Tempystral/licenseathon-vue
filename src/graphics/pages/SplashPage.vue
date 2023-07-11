<script lang="ts" setup>
import { ref } from 'vue';
import InlineSvg from 'vue-inline-svg';

const layoutPath = new URL('../assets/setup.svg', import.meta.url).href;
const layoutRef = ref<SVGElement | null>(null);

const logoPath = new URL('../assets/logo.png', import.meta.url).href;
const logoRef = ref<SVGElement | null>(null);

</script>

<template>
  <div>
    <InlineSvg :src="layoutPath"  ref="layoutRef" id="layout" />
    <div id="logo-container">
      <img :src="logoPath" ref="logoRef" id="logo" />
    </div>
  </div>
</template>

<style lang="scss">
@use '@licenseathon-vue/sass/transition.scss';
@use '@licenseathon-vue/sass/style.scss';
@import '@licenseathon-vue/sass/color';

html {
  background: $lcns-white;
}

body {
  margin: unset;
  overflow: hidden;
}

#layout, #logo-container {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
}

#logo-container {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  img#logo {
    padding-left: 5em;
    max-width: 50%;
    height: auto;

    transform: translatey(0px);
    animation: float 8s ease-in-out infinite;
  }
}

</style>
