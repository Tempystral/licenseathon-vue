<script setup lang="ts">
import { Timer } from 'speedcontrol-util/types';
import { useReplicant } from 'nodecg-vue-composable';

// Helper composable to make accessing/modifying replicants easier.
// For more information see https://github.com/Dan-Shields/nodecg-vue-composable
const timer = useReplicant<Timer>(
  'timer',
  'nodecg-speedcontrol',
);

function timerState() : string {
  return timer?.data?.state || 'stopped';
}

</script>

<template>
  <div :class="`timer-${timerState()}`" >
    {{ timer?.data?.time }}
  </div>
</template>
