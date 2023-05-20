<script setup lang="ts">
import fitty from 'fitty';
import { useReplicant } from 'nodecg-vue-composable';
import { RunDataActiveRun } from 'speedcontrol-util/types';
import { onMounted, watch } from 'vue';
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

const options = { multiLine: true, minSize: 14, maxSize: 28 };
function fitText() {
  fitty('.fit', options).forEach((el) => {
    el.fit();
  });
}

onMounted(fitText);

watch(() => runDataActiveRun?.data, fitText);

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
  p {
    padding-inline: .5em;
  }
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

}

</style>
