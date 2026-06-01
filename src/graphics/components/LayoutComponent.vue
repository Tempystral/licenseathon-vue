<script setup lang="ts"></script>

<template>
  <div class="absolute flex flex-col gap-2 p-2 h-full w-full">
    <div v-if="$slots.header" id="footer" class="grow flex flex-row">
      <slot name="footer" />
    </div>

    <div class="flex flex-row gap-2">
      <div v-if="$slots.left" id="left" class="grow flex flex-col">
        <slot name="left" />
      </div>
      <div id="main" class="aspect-retro">
        <slot name="main" />
      </div>
      <div v-if="$slots.right" id="right" class="grow flex flex-col">
        <slot name="right" />
      </div>
    </div>

    <div v-if="$slots.footer" id="footer" class="grow flex flex-row">
      <slot name="footer" />
    </div>
  </div>
</template>

<style lang="scss">
@use "@licenseathon-vue/sass/style.scss";
@use "@licenseathon-vue/sass/color" as theme;

#left {
  background: pink;
}

#main {
  background: grey;
}

#right {
  background: green;
}

#header {
  background: blue;
}

#footer {
  background: orange;
}
</style>
