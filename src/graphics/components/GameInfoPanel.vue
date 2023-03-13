<script setup lang="ts">
import { RunDataActiveRun } from 'speedcontrol-util/types';

defineProps<{
  run: RunDataActiveRun,
}>();

</script>

<template>
  <div v-if="run" class="game-container" :id="run.id">
    <div class="game-name">    {{ run?.game }}</div>
    <div class="game-category">{{ run?.category }}</div>
    <div class="game-estimate">{{ run.estimate }}</div>
    <div class="game-extras-container">
      <div class="game-release-year">{{ run.release }}</div>
      <div class="game-region">      {{ run.region }}</div>
      <div class="game-system">      {{ run.system }}</div>
    </div>
  </div>
</template>
