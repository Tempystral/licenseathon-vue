<script setup lang="ts">
import LayoutComponent from "../components/LayoutComponent.vue";
</script>

<template>
  <LayoutComponent>
    <!-- <template #header></template> -->
    <template #left></template>

    <template #main>
      <div class="bg-blue-500 w-300"></div>
    </template>

    <!-- <template #right></template> -->
    <template #footer></template>
  </LayoutComponent>
</template>

<style lang="scss">
@use "@licenseathon-vue/sass/style.scss";
@use "@licenseathon-vue/sass/color" as theme;
</style>
