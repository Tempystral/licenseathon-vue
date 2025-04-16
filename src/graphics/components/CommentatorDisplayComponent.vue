<script setup lang="ts">
import { Commentators } from '@licenseathon-vue/types/schemas';
import { useReplicant } from 'nodecg-vue-composable';

const props = defineProps<{
  ratio: string,
  players: number
}>();

const commentators = useReplicant<Commentators>(
  'commentators',
  'licenseathon-vue',
  { defaultValue: { names: ['', ''] } },
);

const getNonEmptyNames = () => commentators.data!.names.filter((n) => n.length > 0);

</script>

<template>
  <div :class="`comms-container layout-${ratio} layout-${players}p`" >
    <span v-for="commentator in getNonEmptyNames()" v-bind:key="commentator" :class="`commentator`">
      <span v-if="commentator.length">
        <font-awesome-icon icon="fa-solid fa-microphone" class="userIcon"/>
        {{ commentator }}
      </span>
    </span>
  </div>
</template>

<style lang="scss">
@use '@licenseathon-vue/sass/style.scss';
@import '@licenseathon-vue/sass/color';

.userIcon {
    height: 1rem;
  }

.comms-container.layout-1p{
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  color: $lcns-white;
  font-family: "Fusion";
  font-size: 14px;

  position: absolute;
  top: 422px;
  left: 22px;
  height: 54px;

  text-align: left;
  span {
    align-self: start;
  }

  &.layout-16-9 {
    width: 216px;
  }

  &.layout-4-3,
  &.layout-3-2 {
    width: 220px;
  }
}

.comms-container.layout-2p, .comms-container.layout-3p {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  color: $lcns-white;
  font-family: "Fusion";
  font-size: 14px;

  span {
    align-self: start;
  }

  position: absolute;
  top: 554px;
  right: -366px;
  width: 180px;
  height: 50px;
}

</style>
