<script setup lang="ts">
import { RunDataPlayer } from 'speedcontrol-util/types';
import { computed, onMounted, watch } from 'vue';
import { fitText } from '../util/composables';
import getSeconds from '../util/updatetime';

const props = defineProps<{
  player: RunDataPlayer,
  ratio: string,
  position: number
}>();

const pronouns = computed(() => props.player.pronouns?.split(','));
const seconds = getSeconds();

// Fit text
const options = computed(() => ({ multiLine: true, minSize: 14, maxSize: 24 }));
const fit = () => {
  fitText(['#player-name', '#player-social'], options.value);
  fitText(['#player-pronouns'], { multiLine: true, minSize: 10, maxSize: 14 });
};

onMounted(() => {
  fit();
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
      <Transition name="wipe">
        <span class="wrapper" id="player-pronouns">{{ player.pronouns }}</span>
      </Transition>
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
      left: 138px;
      top: 30px;
      width: 84px;
      height: 18px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &.layout-4-3 .player-pronouns-container{
      position: absolute;
      left: 224px;
      top: 12px;
      width: 72px;
      height: 36px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &.layout-3-2 .player-pronouns-container{
      position: absolute;
      left: 224px;
      top: 12px;
      width: 72px;
      height: 36px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
}

.layout-container.race {
  .player-container {
    position: fixed;

    color: $lcns-white;
    font-family: "Fusion";
    font-size: large;
    text-align: center;

    display: flex;
    align-items: center;

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
    &.layout-16-9 {
      // Per-player positions
      .player-pronouns-container {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: unset;
      }
      &.player-1 {
        top: 464px;
        left: 30px;
        width: 236px;
        height: 40px;
        .player-pronouns-container {
          left: 254px;
          top: 14px;
          width: 90px;
          height: 16px;
        }
      }
      &.player-2 {
        top: 464px;
        left: 1010px;
        width: 236px;
        height: 40px;
        .player-pronouns-container {
          left: -102px;
          top: 8px;
          width: 90px;
          height: 16px;
        }
      }
    }

    &.layout-4-3 {
      // Per-player positions
      .player-pronouns-container {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: unset;
      }
      &.player-1 {
        top: 505px;
        left: 30px;
        width: 236px;
        height: 40px;
        .player-pronouns-container {
          left: 254px;
          top: 14px;
          width: 90px;
          height: 16px;
        }
      }
      &.player-2 {
        top: 505px;
        left: 1010px;
        width: 236px;
        height: 40px;
        .player-pronouns-container {
          left: -102px;
          top: 8px;
          width: 90px;
          height: 16px;
        }
      }
    }
    &.layout-3-way {
      // Per-player positions
      .player-pronouns-container {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: unset;
      }
      &.player-1 {
        top: 410px;
        left: 30px;
        width: 236px;
        height: 40px;
        .player-pronouns-container {
          left: 16px;
          top: 42px;
          width: 90px;
          height: 16px;
        }
      }
      &.player-2 {
        top: 76px;
        left: 436px;
        width: 236px;
        height: 40px;
        .player-pronouns-container {
          left: 236px;
          top: 0px;
          width: 90px;
          height: 16px;
        }
      }
      &.player-3 {
        top: 410px;
        left: 1010px;
        width: 236px;
        height: 40px;
        .player-pronouns-container {
          left: 112px;
          top: 42px;
          width: 90px;
          height: 16px;
        }
      }
    }
  }
}

.svg-inline--fa {
  padding-inline-end: .5em;
  vertical-align: middle;
}</style>
