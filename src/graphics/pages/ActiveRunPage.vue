<script lang="ts" setup>
import { useReplicant } from 'nodecg-vue-composable';
import { RunDataActiveRun, RunDataPlayer } from 'speedcontrol-util/types';
import { computed, ref } from 'vue';
import InlineSvg from 'vue-inline-svg';
import CommentatorDisplayComponent from '../components/CommentatorDisplayComponent.vue';
import GameInfoPanel from '../components/GameInfoPanel.vue';
import RaceTimerComponent from '../components/RaceTimerComponent.vue';
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

// watch(() => runDataActiveRun?.changed, () => { fitText() });

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

  <div :class="['layout-container', {'solo': players == 1, 'race': players > 1,}, `ratio-${ratio}`]">
      <RunnerInfoPanel v-for="runner in runners" :key=runners.indexOf(runner) :player='runner' :ratio='props.ratio' :position='runners.indexOf(runner) + 1'/>
      <CommentatorDisplayComponent :ratio="props.ratio" :players="props.players" />
      <GameInfoPanel :active-run='runDataActiveRun?.data' :players="props.players" />
      <TimerComponent :ratio='props.ratio' :players="props.players"/>
      <div v-if="props.players > 1" :class="`finish-timer-container layout-${ratio}`">
        <RaceTimerComponent v-for="runner in runners" :key=runners.indexOf(runner) :id='runner.teamID' :ratio='props.ratio' :position='runners.indexOf(runner) + 1' />
      </div>
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

.fit {
  display: inline-block;
  white-space: nowrap;
  transition: font-size .25s;
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
