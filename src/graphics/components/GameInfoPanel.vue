<script setup lang="ts">
import { useReplicant } from 'nodecg-vue-composable';
import { RunDataActiveRun } from 'speedcontrol-util/types';
import { onMounted, watch } from 'vue';
import fitText from '../util/composables';
import { defaultRunData } from '../util/defaults';

const props = defineProps<{
  activeRun: RunDataActiveRun,
  players: number
}>();

const runDataActiveRun = useReplicant<RunDataActiveRun>(
  'runDataActiveRun',
  'nodecg-speedcontrol',
  { defaultValue: defaultRunData as RunDataActiveRun },
);

// Fit text
// const options = { multiLine: true, minSize: 14, maxSize: 24 };
const fit = () => {
  let options = {};
  if (props.players === 1) { options = { multiLine: true, minSize: 14, maxSize: 24 }; }
  if (props.players > 1) { options = { multiLine: true, minSize: 11, maxSize: 18 }; }
  fitText(['#game-name', '#game-category', '#game-estimate'], options);
};
onMounted(fit);
watch(() => runDataActiveRun?.data, fit);

</script>

<template>
  <div v-if="activeRun" :class="['game-container', `layout-${players}p`]" :id="activeRun.id">
    <div class="game-name-container info-container">
      <p id="game-name" class="fit">{{ activeRun?.game }}</p>
    </div>
    <div class="game-category-container info-container">
      <p id="game-category" class="fit">{{ activeRun?.category }}</p>
    </div>
    <div class="game-estimate-container info-container">
      <p id="game-estimate" class="fit">{{ activeRun.estimate }}</p>
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
  &.layout-1p p {
    padding-inline: .5em;
  }
}

.game-container {
  position: fixed;
  font-family: "Fusion";


  &.layout-1p{
    color: $lcns-white;
    text-align: center;
    top: 56px;
    left: 10px;

    .game-name-container {
      top: 2px;
      left: 12px;
      width: 192px;
      height: 68px;
    }
    .game-category-container {
      top: 86px;
      left: 26px;
      width: 192px;
      height: 40px;
    }
    .game-estimate-container {
      top: 180px;
      left: 26px;
      width: 150px;
      height: 36px;
    }
  }

  &.layout-2p, &.layout-3p{
    color: $lcns-dark-blue;
    text-align: right;
    top: 530px;
    left: 570px;

    .game-name-container {
      top: 34px;
      left: 8px;
      width: 190px;
      height: 46px;
      p::first-line{
        text-indent: 1em;
      }
      text-indent: 0;
    }
    .game-category-container {
      top: 78px;
      left: 20px;
      width: 168px;
      height: 42px;
      justify-content: end;
    }
    .game-estimate-container {
      top: 120px;
      left: 50px;
      width: 136px;
      height: 36px;
      justify-content: end;
    }
  }

}

</style>
