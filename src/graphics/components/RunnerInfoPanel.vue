<script setup lang="ts">
import { RunDataPlayer } from 'speedcontrol-util/types';

defineProps<{
  player: RunDataPlayer,
  ratio: string,
  position: number
}>();

</script>

<template>
<div :class="['player-container', `layout-${ratio}`, `player-${position}`]" :data-player="`${player.id}`">
  <div class="player-name">
    <font-awesome-icon icon="fa-solid fa-gamepad" />
    <span>{{ player.name }}</span>
  </div>
  <div class="player-social">
    <font-awesome-icon icon="fa-brands fa-twitch" />
    <span>{{ player.social.twitch }}</span>
  </div>
  <div v-if="player.pronouns" class="player-pronouns">{{ player.pronouns }}</div>
</div>
</template>

<style lang="scss">
@use '@licenseathon-vue/sass/style.scss';
@import '@licenseathon-vue/sass/color';

.svg-inline--fa {
  padding-inline-end: .5em;
  vertical-align: middle;
}

.player-container {
  position: fixed;
  display: flex;

  color: $lcns-white;
  font-family: "Fusion";
  font-size: large;
  text-align: center;

  .player-name, .player-social {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  &.layout-16-9{
    &.player-1 {
      top: 480px;
      left: 23px;
      width: 215px;
      height:30px;
    }
  }


}

</style>
