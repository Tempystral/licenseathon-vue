<!-- Accept a list of teams in order -->
<!-- For each team in the list, keep track of their state -->
<!-- Reveal the finish time per team when said team is finished -->
<script setup lang="ts">
import { useReplicant } from 'nodecg-vue-composable';
import { Timer } from 'speedcontrol-util/types';
import { computed } from 'vue';
import { defaultTimer } from '../util/defaults';


const props = defineProps<{
  id: string,
  ratio: string,
  position: number
}>();

const timer = useReplicant<Timer>(
  'timer',
  'nodecg-speedcontrol',
  { defaultValue: defaultTimer as Timer },
);

const finishTime = computed(() => timer?.data?.teamFinishTimes[props.id]);

</script>
<template>
  <Transition name="wipe">
    <div v-if="finishTime" :class='`timer timer-${finishTime?.state} player-${position}`'>{{ finishTime?.time }}</div>
  </Transition>
</template>
<style lang="scss">
@use '@licenseathon-vue/sass/style.scss';
@import '@licenseathon-vue/sass/color';
@import '@licenseathon-vue/sass/transition';

.layout-container.race {
  .finish-timer-container.layout-16-9{
    color: $lcns-white;
    font-family: "Fusion";
    font-size: 20px;
    .timer {
      display: flex;
      justify-content: center;
      &.player-1 {
        position: absolute;
        top: 464px;
        left: 380px;
        width: 112px;
        height: 32px;
      }
      &.player-2 {
        position: absolute;
        top: 472px;
        left: 784px;
        width: 112px;
        height: 32px;
      }
    }
  }
  .finish-timer-container.layout-4-3{
    color: $lcns-white;
    font-family: "Fusion";
    font-size: 20px;
    .timer {
      display: flex;
      justify-content: center;
      &.player-1 {
        position: absolute;
        top: 506px;
        left: 380px;
        width: 112px;
        height: 32px;
      }
      &.player-2 {
        position: absolute;
        top: 512px;
        left: 784px;
        width: 112px;
        height: 32px;
      }
    }
  }
}

</style>
