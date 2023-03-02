<script setup lang="ts">
import { useReplicant } from 'nodecg-vue-composable';
import { RunDataActiveRun, RunDataPlayer } from 'speedcontrol-util/types';
import { defaultRunDataPlayer } from '../util/defaults';

const props = defineProps<{
  player: RunDataPlayer
}>();

const runDataActiveRun = useReplicant<RunDataActiveRun>(
  'runDataActiveRun',
  'nodecg-speedcontrol',
);

function getRunner() {
  if (!runDataActiveRun?.data?.teams[0]?.players[0]) return defaultRunDataPlayer;
  return runDataActiveRun.data.teams[0].players[0];
}

</script>

<template>

<div> {{ getRunner() }}</div>

</template>
