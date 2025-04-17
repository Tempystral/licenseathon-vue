<script lang="ts" setup>
import { useReplicant } from 'nodecg-vue-composable';
import { RunDataActiveRun, RunDataArray } from 'speedcontrol-util/types';
import { ref } from 'vue';
import InlineSvg from 'vue-inline-svg';
import LicenseComponent from '../components/LicenseComponent.vue';
import { getPlayers } from '../util/composables';
import { defaultRunData } from '../util/defaults';

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

</script>

<template>
  <div>
    <InlineSvg :src="layoutPath"  ref="layoutRef" id="layout" />

    <div class="layout-container">

      <LicenseComponent :run="activeRun?.data"/>

      <div class="carousel-container">
        <p class="header">Coming up...</p>
        <div class="up-next-carousel">
          <TransitionGroup name="slide">
            <span v-for=" run in remainingRuns()" :key="run.id" class="up-next-game">
              <div class="player-name-container info-container">
                <span v-for="player, index of getPlayers(run)" id="next-player-name" class="fit" :key="player.id">
                  {{ player.name }}<template v-if="getPlayers(run).length > 1 && getPlayers(run).length-index > 1">&nbsp;|&nbsp;</template>
                </span>
              </div>

              <div class="game-name-container info-container" v-if="run?.game">
                <p id="next-game-name" class="fit">{{ run?.game }}</p>
              </div>
              <div class="game-category-container info-container" v-if="run?.category">
                <p id="next-game-category" class="fit">{{ run?.category }}</p>
              </div>
              <div class="game-estimate-container info-container" v-if="run?.estimate">
                <p id="next-game-estimate" class="fit">{{ run?.estimate }}</p>
              </div>
            </span>
          </TransitionGroup>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "@licenseathon-vue/sass/transition";
@use '@licenseathon-vue/sass/style.scss';
@use '@licenseathon-vue/sass/color' as theme;

html {
  background: theme.$lcns-white;
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

.carousel-container {
  position: absolute;
  bottom: 86px;
  left: 44px;
  .up-next-carousel {
    display: flex;
    flex-direction: row;
  }
}

.layout-container {
  position: absolute;
  height: 100%;
  width: 100%;
  clip-path: polygon(0% 0%, 0% 95%, 62% 95%, 100% 0%);

  .up-next-game {
    background: theme.$lcns-dark-blue;
    padding: .5em;
    border-radius: 0 .7em .7em .7em;
    width: max-content;

    display: grid;
    gap: .5em .5em;

    .info-container {
      background-color: theme.$lcns-white;
      padding: .3em;
      border-radius: .5em;
      position: unset;
      color: theme.$lcns-dark-blue;
      font-size: .8em;
    }
    .player-name-container {
      grid-column: 1 / span 4;
      color: theme.$lcns-orange;
      background: theme.$lcns-dark-blue;
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
