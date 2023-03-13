<script lang="ts" setup>
import { useReplicant } from 'nodecg-vue-composable';
import { RunDataActiveRun } from 'speedcontrol-util/types';
import { computed } from 'vue';
import GameInfoPanel from '../components/GameInfoPanel.vue';
import RunnerInfoPanel from '../components/RunnerInfoPanel.vue';
import TimerComponent from '../components/TimerComponent.vue';
import { defaultRunData, defaultRunDataPlayer } from '../util/defaults';

const runDataActiveRun = useReplicant<RunDataActiveRun>(
  'runDataActiveRun',
  'nodecg-speedcontrol',
  { defaultValue: defaultRunData },
);

const runners = computed(() => {
  // The following line is ok because the map() only gets called if each null-coalescing operator is passed
  const players = runDataActiveRun?.data?.teams.map((team) => team.players[0]);
  // console.info(`Player is ${player?.name}`);
  if (!players) return [defaultRunDataPlayer];
  return players;
});

</script>

<template>

<div class="layout-container columns">
  <div id="column-left" class="column is-3">
    <!-- Webcam panel -->
    <RunnerInfoPanel v-for="runner in runners" :key=runners.indexOf(runner) :player='runner' />
  </div>
  <div id="column-right" class="column is-9">
    <video class="video-player"></video>
    <GameInfoPanel :run='runDataActiveRun?.data' />
    <TimerComponent />
  </div>
</div>

</template>

<style lang="scss">
.layout-container {
  //display: flex;
  //flex-direction: row;
  // #column-left {
  //   flex-grow: 1;
  // }

  // #column-right {
  //   flex-grow: 6;
  // }
}

video {
  aspect-ratio: 16/9;
  width: 100%;
  background: black;
}

</style>
