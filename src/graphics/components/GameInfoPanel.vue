<script setup lang="ts">
import { RunDataActiveRun } from 'speedcontrol-util/types';
import VueResizeText from 'vue3-resize-text';

const props = defineProps<{
  run: RunDataActiveRun,
  players: number
}>();

const vResizeText = VueResizeText.ResizeText;
const resizeProps = { ratio: 0.8, minFontSize: '12px', maxFontSize: '30px', delay: 200 };

</script>

<template>
  <div v-if="run" :class="['game-container', `layout-${players}p`]" :id="run.id">
    <div class="game-name-container info-container">
      <p id="game-name">{{ run?.game }}</p>
    </div>
    <div class="game-category-container info-container">
      <p id="game-category">{{ run?.category }}</p>
    </div>
    <div class="game-estimate-container info-container">
      <p id="game-estimate">{{ run.estimate }}</p>
    </div>
  </div>
</template>

<style lang="scss">
@use '@licenseathon-vue/sass/style.scss';
@import '@licenseathon-vue/sass/color';

.info-container {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}

.game-container {
  position: fixed;

  color: $lcns-white;
  font-family: "Fusion";
  text-align: center;

  &.layout-1p{
    top: 56px;
    left: 10px;

    .game-name-container {
      top: 2px;
      left: 12px;
      width: 192px;
      height: 68px;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .game-category-container {
      top: 86px;
      left: 26px;
      width: 192px;
      height: 40px;
    }

    .game-estimate-container {
      top: 136px;
      left: 26px;
      width: 184px;
      height: 36px;
    }
  }

}

</style>
