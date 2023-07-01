<script lang="ts" setup>
import { useReplicant } from 'nodecg-vue-composable';
import { RunData, RunDataActiveRun, RunDataArray } from 'speedcontrol-util/types';
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

const allRuns = useReplicant<RunDataArray>(
  'runDataArray',
  'nodecg-speedcontrol',
  { defaultValue: [] as RunDataArray },
);

function remainingRuns() {
  return allRuns?.data?.slice(allRuns.data.findIndex((r) => r.id === activeRun?.data?.id) + 1);
}

function getPlayers(run:RunData | undefined) {
  return run?.teams.map((t) => t.players[0]) || [];
}

const seconds = getSeconds();
const players = computed(() => getPlayers(activeRun?.data));
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

      <p class="header">Coming up...</p>
      <div class="up-next-carousel">
        <span v-for=" run in remainingRuns()" :key="run.id" class="up-next-game">
          <div class="player-name-container info-container">
            <span v-for="player, index of getPlayers(run)" id="next-player-name" class="fit" :key="player.id">
              {{ player.name }}<template v-if="getPlayers(run).length > 1 && getPlayers(run).length-index > 1">&nbsp;|&nbsp;</template>
            </span>
          </div>

          <div class="game-name-container info-container">
            <p id="next-game-name" class="fit">{{ run?.game }}</p>
          </div>
          <div class="game-category-container info-container">
            <p id="next-game-category" class="fit">{{ run?.category }}</p>
          </div>
          <div class="game-estimate-container info-container">
            <p id="next-game-estimate" class="fit">{{ run?.estimate }}</p>
          </div>
        </span>
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
  z-index: 1;
}

.header {
  font-family: "Fusion";
  font-size: 18px;
}

.info-container {
  font-family: "Fusion";
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}

.up-next-carousel {
  position: absolute;
  bottom: 86px;
  left: 44px;

  display: flex;
  flex-direction: row;
}

.layout-container {
  position: absolute;
  height: 100%;
  width: 100%;
  clip-path: polygon(0% 0%, 0% 100%, 65% 90%, 100% 0%);

  .license {
    position: absolute;
    top: 164px;
    left: 48px;
    display: flex;
    z-index: 12;
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
  }

  .up-next-game {
    background: $lcns-dark-blue;
    padding: .5em;
    border-radius: 0 .7em .7em .7em;
    width: max-content;

    display: grid;
    gap: .5em .5em;

    .info-container {
      background-color: $lcns-white;
      padding: .3em;
      border-radius: .5em;
      position: unset;
      color: $lcns-dark-blue;
      font-size: .8em;
    }
    .player-name-container {
      grid-column: 1 / span 4;
      color: $lcns-orange;
      background: $lcns-dark-blue;
    }

    .game-name-container {
      grid-column: 1 / span 4;
      grid-row: 2;
    }
    .game-category-container {
      grid-row: 1 / span 1;
      grid-column: 5;
    }
    .game-estimate-container {
      grid-row: 2 / span 1;
      grid-column: 5;
    }
  }

  .up-next-game + .up-next-game {
    margin-inline-start: .5em;
  }
}

</style>
