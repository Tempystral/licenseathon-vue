<script setup lang="ts">
import { useReplicant } from 'nodecg-vue-composable';
import { type Timer } from 'speedcontrol-util/types';
import { defaultTimer } from '../util/defaults';

const props = defineProps<{
  ratio: string,
  players: number
}>();

// Helper composable to make accessing/modifying replicants easier.
// For more information see https://github.com/Dan-Shields/nodecg-vue-composable
const timer = useReplicant<Timer>(
  'timer',
  'nodecg-speedcontrol',
  { defaultValue: defaultTimer as Timer },
);

function timerState() : string {
  return timer?.data?.state || 'stopped';
}

</script>

<template>
  <div :class="`timer-container layout-${ratio} layout-${players}p`" >
    <span :class="`timer-${timerState()}`">{{ timer?.data?.time }}</span>
  </div>
</template>

<style lang="scss">
@use '@licenseathon-vue/sass/style.scss';
@import '@licenseathon-vue/sass/color';

.timer-container.layout-1p{

  &.layout-16-9 {
    color: $lcns-dark-blue;
    font-family: "Fusion";
    font-size: 46px;

    position: absolute;
    top: 580px;
    left: 532px;
    width: 248px;
    height: 70px;

    text-align: right;
    display: flex;
    span {
      align-self: end;
    }
  }

  &.layout-4-3,
  &.layout-3-2 {
    color: $lcns-white;
    font-family: "Fusion";
    font-size: 40px;

    position: absolute;
    top: 308px;
    left: 128px;
    width: 210px;
    height: 56px;

    text-align: right;
    display: flex;
    span {
      align-self: baseline;
    }
  }
}

.timer-container.layout-2p {
  color: $lcns-dark-blue;
  font-family: "Fusion";
  font-size: 34px;

  position: absolute;
  top: 608px;
  left: 280px;
  width: 180px;
  height: 50px;
}

</style>
