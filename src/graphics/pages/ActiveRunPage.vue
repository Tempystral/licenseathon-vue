<script lang="ts" setup>
import { useReplicant } from 'nodecg-vue-composable';
import { RunDataActiveRun, RunDataPlayer } from 'speedcontrol-util/types';
import { computed, ref } from 'vue';
import InlineSvg from 'vue-inline-svg';
import GameInfoPanel from '../components/GameInfoPanel.vue';
import RunnerInfoPanel from '../components/RunnerInfoPanel.vue';
import TimerComponent from '../components/TimerComponent.vue';
import { defaultRunData, defaultRunDataPlayer } from '../util/defaults';

/**
 * Layout is passed in as prop
 * The prop determines the class name of various layout tags, e.g. "solo-16-9" => ".layout.solo-16-9.timerContainer"
 * This will let us style each element for each layout
 */

const props = defineProps<{
  players: number,
  ratio: string
}>();

const layoutPath = new URL(`../assets/layout-${props.players}p-${props.ratio}.svg`, import.meta.url).href;
const layoutRef = ref<SVGElement | null>(null);

const runDataActiveRun = useReplicant<RunDataActiveRun>(
  'runDataActiveRun',
  'nodecg-speedcontrol',
  { defaultValue: defaultRunData as RunDataActiveRun },
);

const runners = computed(() => {
  // The following line is ok because the map() only gets called if each null-coalescing operator is passed
  const players = runDataActiveRun?.data?.teams.map((team) => team.players[0]);
  // console.info(`Player is ${player?.name}`);
  if (!players) return [defaultRunDataPlayer as RunDataPlayer];
  return players;
});

</script>

<template>
<div>
  <InlineSvg :src="layoutPath" ref="layoutRef" id="layout" />

  <div class="layout-container">
      <RunnerInfoPanel v-for="runner in runners" :key=runners.indexOf(runner) :player='runner' :ratio='ratio' :position='runners.indexOf(runner) + 1'/>
      <GameInfoPanel :run='runDataActiveRun?.data' />
      <TimerComponent />
  </div>
</div>

</template>

<style lang="scss">
body {
  background: #e2e2e4;
  overflow: hidden;
}

#layout {
  position: absolute;
  bottom: 0;
  left: 0;
}

.layout-container {
  position: absolute;
  top: 0;
  left: 0;

  //display: flex;
  //flex-direction: row;
  // #column-left {
  //   flex-grow: 1;
  // }

  // #column-right {
  //   flex-grow: 6;
  // }
}

</style>
