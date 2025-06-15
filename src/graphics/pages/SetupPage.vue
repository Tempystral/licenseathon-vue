<script lang="ts" setup>
import { useReplicant } from "nodecg-vue-composable";
import { RunDataActiveRun, RunDataArray } from "speedcontrol-util/types";
import { ref } from "vue";
import InlineSvg from "vue-inline-svg";
import LicenseComponent from "../components/LicenseComponent.vue";
import { getPlayers } from "../util/composables";
import { defaultRunData } from "../util/defaults";
import GameInfoPanel from "../components/GameInfoPanel.vue";
import IncentiveComponent from "../components/tiltify/IncentiveComponent.vue";

const layoutPath = new URL("../assets/setup.svg", import.meta.url).href;
const layoutRef = ref<SVGElement | null>(null);

/**
 * Replicants required:
 * runDataActiveRun
 * runDataActiveRunSurrounding (Maybe not, do we really care about the before part?)
 * runDataArray
 */

const activeRun = useReplicant<RunDataActiveRun>(
  "runDataActiveRun",
  "nodecg-speedcontrol",
  { defaultValue: defaultRunData as RunDataActiveRun }
);

const allRuns = useReplicant<RunDataArray>(
  "runDataArray",
  "nodecg-speedcontrol",
  { defaultValue: [] as RunDataArray }
);

function remainingRuns() {
  return allRuns?.data?.slice(
    allRuns.data.findIndex((r) => r.id === activeRun.data?.id) + 1
  );
}
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

    <div id="logo-container" class="absolute h-fit w-fit flex items-center">
      <img src="../assets/logo_2025.png" />
    </div>

    <IncentiveComponent ratio="setup" />

    <div class="layout-container">
      <LicenseComponent :run="activeRun?.data" />
      <!-- <GameInfoPanel :active-run="activeRun.data" ratio="setup" :players="1" /> -->

      <div id="carousel-container" class="font-[Fusion] overflow-hidden">
        <!-- <p class="header">Coming up...</p> -->
        <div
          id="up-next-carousel"
          class="h-full flex flex-row-reverse gap-2 p-2"
        >
          <TransitionGroup name="slide-h">
            <span
              v-for="run in remainingRuns()?.slice(0, 3)"
              :key="run.id"
              class="up-next-game p-2 rounded-md grid gap-2 w-4/12"
            >
              <div
                id="player-name-container"
                class="setup-info-container col-start-1 col-span-4"
              >
                <span
                  v-for="(player, index) of getPlayers(run)"
                  id="next-player-name"
                  class="fit"
                  :key="player.id"
                >
                  {{ player.name }}
                  <template
                    v-if="
                      getPlayers(run).length > 1 &&
                      getPlayers(run).length - index > 1
                    "
                  >
                    &nbsp;|&nbsp;
                  </template>
                </span>
              </div>

              <div
                id="game-name-container"
                class="setup-info-container col-start-1 col-span-4 row-start-2"
                v-if="run?.game"
              >
                <p id="next-game-name" class="fit">{{ run?.game }}</p>
              </div>
              <div
                id="game-category-container"
                class="setup-info-container row-start-1 row-span-1 col-start-5"
                v-if="run?.category"
              >
                <p id="next-game-category" class="fit">{{ run?.category }}</p>
              </div>
              <div
                id="game-estimate-container"
                class="setup-info-container row-start-2 row-span-1 col-start-5"
                v-if="run?.estimate"
              >
                <p id="next-game-estimate" class="fit">{{ run?.estimate }}</p>
              </div>
            </span>
          </TransitionGroup>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "@licenseathon-vue/sass/transition";
@use "@licenseathon-vue/sass/style.scss";
@use "@licenseathon-vue/sass/color" as theme;

body {
  background-image: url(../assets/background.png);
  overflow: hidden;
  margin: unset;
}

svg {
  #Grille,
  #Grille1,
  #Grille2,
  #Grille3,
  #LCD,
  #Estimate-Container,
  #Info-Inset-Panel,
  #Up-Next-Panel {
    filter: url(#inset-shadow);
  }

  #Game-Title-Group,
  #Category-Group,
  #Category-Group1 {
    path:first-of-type {
      filter: drop-shadow(0 0 8px black);
    }
    g path:first-of-type {
      filter: none;
    }
  }
}

#layout {
  position: absolute;
  bottom: 0;
  left: 0;
}

#logo-container {
  left: 1120px;
  width: 625px;
  height: 310px;
}

#carousel-container {
  position: absolute;
  bottom: 141px;
  left: 20px;
  height: 150px;
  width: 994px;
}

.layout-container {
  position: absolute;
  height: 100%;
  width: 100%;
  clip-path: polygon(0% 0%, 0% 95%, 62% 95%, 100% 0%);

  .up-next-game {
    background: theme.$lcns-red;
    box-shadow: 0 0 4px 0 black;

    &:first-of-type {
      background: theme.$lcns-black;
    }

    #player-name-container {
      color: theme.$lcns-amber;
      background: theme.$lcns-dark-blue;
    }

    .setup-info-container {
      background-color: theme.$lcns-white;
      color: theme.$lcns-dark-blue;
      font-size: 0.9em;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-inline: 0.25em;
      border-radius: 0.5em;
    }
  }
}
</style>
