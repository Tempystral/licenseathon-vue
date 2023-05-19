<script setup lang="ts">
import { RunDataActiveRun } from 'speedcontrol-util/types';

defineProps<{
  run: RunDataActiveRun,
}>();

</script>

<template>
  <div v-if="run" class="game-container columns is-multiline" :id="run.id">
    <div class="game-name-container column is-6 info-container">
      <p class="info-heading">GAME NAME</p>
      <p id="game-name">{{ run?.game }}</p>
    </div>
    <div class="game-category-container column is-3 info-container">
      <p class="info-heading">CATEGORY</p>
      <p id="game-category">{{ run?.category }}</p>
    </div>
    <div class="game-estimate-container column is-3 info-container">
      <p class="info-heading">ESTIMATE</p>
      <p id="game-estimate">{{ run.estimate }}</p>
    </div>
    <div class="game-extras-container columns column is-12">
      <div v-if="run.release" class="game-release-year column"><p class="game-extra">{{ run.release }}</p></div>
      <div v-if="run.region" class="game-region column">       <p class="game-extra">{{ run.region }}</p></div>
      <div v-if="run.system" class="game-system column">       <p class="game-extra">{{ run.system }}</p></div>
    </div>
  </div>
</template>

<style lang="scss">

.info-container {
  text-align: center;
  .info-heading {
    background: skyblue;
  }
  #game-name,
  #game-category,
  #game-estimate {
    background: pink;
  }
}

.game-extras-container {
  .game-extra {
    background: red;
    text-align: center;
  }
}
</style>
