<script setup lang="ts">
import { RunDataPlayer } from 'speedcontrol-util/types';

defineProps<{
  player: RunDataPlayer
}>();

</script>

<template>
<div class="player-container" :data-player="`${player.id}`">
  <div class="player-name">{{ player.name }}</div>
  <div class="player-social"> {{ player.social.twitch }}</div>
  <div class="player-pronouns"> {{ player.pronouns }}</div>
  <hr>
</div>
</template>

<style lang="scss">
@use "@/sass/style.scss";

</style>
