<script setup lang="ts">

import { RunDataActiveRun } from 'speedcontrol-util/types';
import { computed, onMounted, ref, watch } from 'vue';
import InlineSvg from 'vue-inline-svg';
import { fitText, getPlayers } from '../util/composables';
import getSeconds from '../util/updatetime';

const props = defineProps<{
  run: RunDataActiveRun
}>();

const layoutPath = new URL('../assets/license.svg', import.meta.url).href;
const layoutRef = ref<SVGElement | null>(null);

const seconds = getSeconds();
const players = computed(() => getPlayers(props.run));

function showByTime(s:number) { return Math.floor(s / Math.floor(60 / players.value.length)); }
const activePlayer = computed(() => players.value[showByTime(seconds.value)]);
const activePlayerImage = computed(() => new URL(`../assets/runners/${activePlayer.value.name}.png`, import.meta.url).href);

const fit = () => {
  fitText(['#game-name', '#game-category'], { multiLine: true, minSize: 12, maxSize: 24 });
  fitText(['#game-estimate', '#player-name'], { multiLine: true, minSize: 14, maxSize: 24 });
};
onMounted(fit);
watch(() => props.run, () => console.log(`Run: ${props.run?.game} | ${props.run?.id}`));

</script>

<template>
  <div class="license">

    <InlineSvg :src="layoutPath"  ref="layoutRef" id="licensesvg" width="450" height="300" preserveAspectRatio="none"/>

    <Transition name="wipe" appear>
      <div class="player-name-container info-container" v-if="activePlayer" :key="activePlayer.id">
        <p id="player-name" class="fit">{{ activePlayer.name }}</p>
      </div>
    </Transition>

    <div class="game-container">
      <Transition name="wipe" appear :onAfterLeave="fit">
        <div class="game-name-container info-container" :key="run?.id">
          <p id="game-name" class="fit">{{ run?.game }}</p>
        </div>
      </Transition>
      <Transition name="wipe" appear>
        <div class="game-category-container info-container" :key="run?.id">
          <p id="game-category" class="fit">{{ run?.category }}</p>
        </div>
      </Transition>
      <Transition name="wipe" appear>
        <div class="game-estimate-container info-container" :key="run?.id">
          <p id="game-estimate" class="fit">{{ run?.estimate }}</p>
        </div>
      </Transition>
    </div>

    <div class="profile-image-container">
      <Transition name="wipe" appear>
        <div class="profile-image" v-if="activePlayer" :key="activePlayer.id">
          <img :src="activePlayerImage">
        </div>
      </Transition>
    </div>


  </div>
</template>

<style lang="scss">
@use "@licenseathon-vue/sass/transition";
@use '@licenseathon-vue/sass/style.scss';
@import '@licenseathon-vue/sass/color';

.fit {
  transition: font-size .25s;
}

.license {
    position: absolute;
    top: 164px;
    left: 44px;
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
        width: 220px;
        height: 40px;
      }

      .game-category-container {
        color: $lcns-dark-blue;
        top: 192px;
        left: 200px;
        width: 232px;
        height: 30px;
      }
      .game-estimate-container {
        color: $lcns-dark-blue;
        top: 256px;
        left: 268px;
        width: 130px;
        height: 34px;
      }
    }
    .profile-image-container {
      position: absolute;
      top: 145px;
      left: 19px;
      width: 140px;
      height: 140px;
      border-radius: 1em;
      img {
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }
  }

</style>
