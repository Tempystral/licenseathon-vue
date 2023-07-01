<script lang="ts" setup>
import { useReplicant } from 'nodecg-vue-composable';
import { RunDataActiveRun } from 'speedcontrol-util/types';
import { computed, onMounted, ref, watch } from 'vue';
import InlineSvg from 'vue-inline-svg';
import fitText from '../util/composables';
import { defaultRunData } from '../util/defaults';
import getSeconds from '../util/updatetime';

const layoutPath = new URL('../assets/setup.svg', import.meta.url).href;
const layoutRef = ref<SVGElement | null>(null);

/**
 * Replicants required:
 * runDataActiveRun
 * runDataActiveRunSurrounding (Maybe not, do we really care about the before part?)
 * runDataArray
 */

const activeRun = useReplicant<RunDataActiveRun>(
  'runDataActiveRun',
  'nodecg-speedcontrol',
  { defaultValue: defaultRunData as RunDataActiveRun },
);

const seconds = getSeconds();
const players = computed(() => activeRun?.data?.teams.map((t) => t.players[0]) || []);
// Determines whether to show a value based on its index in an array and the time.
// const showByIndex = (index:number) => seconds.value < Math.floor(60 / players.value.length) * (index + 1) && seconds.value >= Math.floor(60 / players.value.length) * (index);
function showByTime(s:number) { return Math.floor(s / Math.floor(60 / players.value.length)); }
const activePlayer = computed(() => players.value[showByTime(seconds.value)]);


const fit = () => {
  fitText(['#game-name', '#game-category', '#game-estimate', '#player-name'], { multiLine: true, minSize: 14, maxSize: 24 });
};
onMounted(fit);
watch(() => activeRun?.data, fit);

</script>

<template>
  <div>
    <InlineSvg :src="layoutPath"  ref="layoutRef" id="layout" />

    <div class="layout-container">

      <div class="license">
        <Transition name="wipe" appear>
          <div class="player-name-container info-container" v-if="activePlayer" :key="activePlayer.id">
            <p id="player-name" class="fit">{{ activePlayer.name }}</p>
          </div>
        </Transition>

        <div class="game-container">
          <div class="game-name-container info-container">
            <p id="game-name" class="fit">{{ activeRun?.data?.game }}</p>
          </div>
          <div class="game-category-container info-container">
            <p id="game-category" class="fit">{{ activeRun?.data?.category }}</p>
          </div>
          <div class="game-estimate-container info-container">
            <p id="game-estimate" class="fit">{{ activeRun?.data?.estimate }}</p>
          </div>
        </div>

      </div>
      <div class="up-next-carousel">

      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "@licenseathon-vue/sass/transition";
@use '@licenseathon-vue/sass/style.scss';
@import '@licenseathon-vue/sass/color';

html {
  background: $lcns-white;
}

body {
  margin: unset;
  overflow: hidden;
}

#layout {
  position: absolute;
  bottom: 0;
  left: 0;
}

.layout-container {
  .license {
    position: absolute;
    top: 164px;
    left: 48px;
    display: flex;
  }
}

.info-container {

  font-family: "Fusion";
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  &.layout-1p p {
    padding-inline: .5em;
  }
}

.player-name-container {
    color: $lcns-white;
    justify-content: right;
    top: 110px;
    left: 168px;
    width: 222px;
    height: 32px;
  }

.game-container {
  position: absolute;
  color: $lcns-white;
  text-align: center;

  .game-name-container {
    top: 58px;
    left: 68px;
    width: 224px;
    height: 40px;
  }

  .game-category-container {
    color: $lcns-dark-blue;
    top: 192px;
    left: 208px;
    width: 226px;
    height: 34px;
  }
  .game-estimate-container {
    color: $lcns-dark-blue;
    top: 256px;
    left: 268px;
    width: 130px;
    height: 34px;
  }
}
</style>
