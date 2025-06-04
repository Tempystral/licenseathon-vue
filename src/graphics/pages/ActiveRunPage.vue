<script lang="ts" setup>
import { useReplicant } from "nodecg-vue-composable";
import { RunDataActiveRun, RunDataPlayer } from "speedcontrol-util/types";
import { computed, ref } from "vue";
import InlineSvg from "vue-inline-svg";
import CommentatorDisplayComponent from "../components/CommentatorDisplayComponent.vue";
import GameInfoPanel from "../components/GameInfoPanel.vue";
import RaceTimerComponent from "../components/RaceTimerComponent.vue";
import RunnerInfoPanel from "../components/RunnerInfoPanel.vue";
import TimerComponent from "../components/TimerComponent.vue";
import { defaultRunData, defaultRunDataPlayer } from "../util/defaults";

/**
 * Layout is passed in as prop
 * The prop determines the class name of various layout tags, e.g. "solo-16-9" => ".layout.solo-16-9.timerContainer"
 * This will let us style each element for each layout
 */

const props = defineProps<{
  players: number;
  ratio: string;
}>();

const layoutPath = new URL(
  `../assets/layout-${props.players}p-${props.ratio}.svg`,
  import.meta.url
).href;
const layoutRef = ref<SVGElement | null>(null);

const runDataActiveRun = useReplicant<RunDataActiveRun>(
  "runDataActiveRun",
  "nodecg-speedcontrol",
  { defaultValue: defaultRunData as RunDataActiveRun }
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
    <svg height="0" width="0">
      <defs>
        <filter
          id="offset-inset-shadow"
          color-interpolation-filters="sRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feOffset dx="20" dy="0" in="SourceGraphic" result="offset" />
          <feGaussianBlur
            stdDeviation="20 20"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="offset"
            edgeMode="none"
            result="blur"
          />
          <feComposite
            in="SourceGraphic"
            in2="blur"
            operator="out"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="composite"
          />
          <feFlood
            flood-color="#000000"
            flood-opacity="0.95"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="flood"
          />
          <feComposite
            in="flood"
            in2="composite"
            operator="in"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="composite1"
          />
          <feComposite
            in="composite1"
            in2="SourceGraphic"
            operator="over"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="composite2"
          />
        </filter>

        <filter
          id="inset-shadow"
          color-interpolation-filters="sRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feGaussianBlur
            stdDeviation="20 20"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="offset"
            edgeMode="none"
            result="blur"
          />
          <feComposite
            in="SourceGraphic"
            in2="blur"
            operator="out"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="composite"
          />
          <feFlood
            flood-color="#000000"
            flood-opacity="0.95"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="flood"
          />
          <feComposite
            in="flood"
            in2="composite"
            operator="in"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="composite1"
          />
          <feComposite
            in="composite1"
            in2="SourceGraphic"
            operator="over"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="composite2"
          />
        </filter>
      </defs>
    </svg>
    <InlineSvg :src="layoutPath" ref="layoutRef" id="layout" />

    <div
      :class="[
        'layout-container',
        { solo: players == 1, race: players > 1 },
        `ratio-${ratio}`,
      ]"
    >
      <RunnerInfoPanel
        v-for="runner in runners"
        :key="runners.indexOf(runner)"
        :player="runner"
        :ratio="props.ratio"
        :position="runners.indexOf(runner) + 1"
      />
      <CommentatorDisplayComponent
        :ratio="props.ratio"
        :players="props.players"
      />
      <GameInfoPanel
        :active-run="runDataActiveRun?.data"
        :ratio="props.ratio"
        :players="props.players"
      />

      <TimerComponent :ratio="props.ratio" :players="props.players" />
      <div
        v-if="props.players > 1"
        :class="`finish-timer-container layout-${ratio}`"
      >
        <RaceTimerComponent
          v-for="runner in runners"
          :key="runners.indexOf(runner)"
          :id="runner.teamID"
          :ratio="props.ratio"
          :position="runners.indexOf(runner) + 1"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "@licenseathon-vue/sass/style.scss";
@use "@licenseathon-vue/sass/color" as theme;

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
  transition: font-size 0.25s;
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

svg {
  #LCD,
  #Camera-Frame,
  #Estimate-Container,
  #Info-Inset-Panel {
    filter: url(#inset-shadow);
  }

  #Camera-Inset-Panel {
    filter: url(#offset-inset-shadow);
  }

  #Game-Title-Group path:first-of-type {
    filter: drop-shadow(0 0 8px black);
  }
}
</style>
