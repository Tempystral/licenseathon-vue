<script setup lang="ts">
import { RunDataPlayer } from 'speedcontrol-util/types';
import { computed, onMounted, ref, watch } from 'vue';
import fitText from '../util/composables';

const props = defineProps<{
  player: RunDataPlayer,
  ratio: string,
  position: number
}>();

const date = ref(new Date());
const seconds = computed(() => date.value.getSeconds());

function updateTime() {
  date.value = new Date();
  console.log(date.value.getSeconds());
}

// Fit text
const options = { multiLine: true, minSize: 14, maxSize: 24 };
const fit = () => fitText(['#player-name', '#player-social', '#player-pronouns'], options);

onMounted(() => {
  fit();
  updateTime();
  setInterval(updateTime, 1000);
});
watch(() => props.player, fit);

</script>

<template>
  <div :class="['player-container', `layout-${ratio}`, `player-${position}`]" :data-player="`${player.id}`">
    <Transition name="wipe">
    <div class="player-name-container" v-if="seconds < 30">
      <font-awesome-icon icon="fa-solid fa-gamepad" class="icon"/>
      <span class="wrapper"><span id="player-name">{{ player.name }}</span></span>
    </div>
    <div class="player-social-container" v-else-if="seconds >= 30">
      <font-awesome-icon icon="fa-brands fa-twitch" class="icon"/>
      <span class="wrapper"><span id="player-social">{{ player.social.twitch }}</span></span>
    </div>
    </Transition>
    <div class="player-pronouns-container">
      <span class="wrapper" id="player-pronouns">{{ player.pronouns }}</span>
    </div>
  </div>
</template>

<style lang="scss">
@use '@licenseathon-vue/sass/style.scss';
@import '@licenseathon-vue/sass/color';
@import '@licenseathon-vue/sass/transition';

.layout-container.solo {
  .player-container:not(.player-1) {
    display: none;
  }

  .player-container {
    position: fixed;

    color: $lcns-white;
    font-family: "Fusion";
    font-size: large;
    text-align: center;

    display: flex;
    align-items: end;

    // General settings for the name and social fields
    .player-name-container,
    .player-social-container {
      position: absolute;
      width: 100%;
      .wrapper {
        display: inline-block;
        max-width: 80%;
      }
    }
    // Per-player positions
    &.player-1 {
      top: 480px;
      left: 23px;
      width: 215px;
      height: 30px;
    }

    &.layout-16-9 .player-pronouns-container{
      position: absolute;
    }
    &.layout-4-3 .player-pronouns-container{
      position: absolute;
    }
    &.layout-3-2 .player-pronouns-container{
      position: absolute;
      left: 224px;
      top: 18px;
      width: 72px;
      height: 30px;
    }
  }
}

.svg-inline--fa {
  padding-inline-end: .5em;
  vertical-align: middle;
}</style>
