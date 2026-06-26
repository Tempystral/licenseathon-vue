<script lang="ts" setup>
import { useReplicant } from "nodecg-vue-composable";
import { RunDataActiveRun, RunDataArray } from "speedcontrol-util/types";
import { ref } from "vue";
import InsetContainer from "../components/InsetContainer.vue";
import MaterialPanel from "../components/panels/MaterialPanel.vue";
import FitText from "../components/text/FitText.vue";
import TextBox from "../components/text/TextBox.vue";
import { defaultRunData } from "../util/defaults";
import { getPlayers } from "../util/helpers.js";

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
  { defaultValue: defaultRunData as RunDataActiveRun },
);

const allRuns = useReplicant<RunDataArray>(
  "runDataArray",
  "nodecg-speedcontrol",
  { defaultValue: [] as RunDataArray },
);

function remainingRuns() {
  return allRuns?.data?.slice(
    allRuns.data.findIndex((r) => r.id === activeRun.data?.id) + 1,
  );
}

const options = { multiLine: true, minSize: 14, maxSize: 24 };
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
    <!-- <InlineSvg :src="layoutPath" ref="layoutRef" id="layout" /> -->

    <!-- <IncentiveComponent ratio="setup" /> -->

    <div
      class="absolute w-full h-full grid"
      style="
        grid-template-columns: minmax(60%, 2fr) 1fr 8rem;
        grid-template-rows: 1fr 4fr 2fr 8rem;
      "
    >
      <div
        id="logo-container"
        class="absolute h-fit w-fit flex items-center col-start-2 col-span-1"
      >
        <img src="../assets/logo_2025.png" />
      </div>
      <MaterialPanel theme="red" class="row-start-3 row-span-1 font-[Fusion]">
        <InsetContainer theme="red" class="h-full flex-row justify-between">
          <TransitionGroup name="slide-h">
            <MaterialPanel
              theme="white"
              v-for="run in remainingRuns()?.slice(0, 3)"
              :key="run.id"
              class="flex flex-col gap-2 h-full text-lcns-black"
              style="width: calc((100% / 3) - 0.75rem)"
            >
              <TextBox theme="pronouns" class="grow">
                <span
                  v-for="(player, index) of getPlayers(run)"
                  class="fit"
                  :key="player.id"
                >
                  <FitText :options>{{ player.name }}</FitText>
                  <template
                    v-if="
                      getPlayers(run).length > 1 &&
                      getPlayers(run).length - index > 1
                    "
                  >
                    &nbsp;|&nbsp;
                  </template>
                </span>
              </TextBox>

              <TextBox theme="pronouns" class="grow">
                {{ run.game }}
              </TextBox>
              <TextBox theme="pronouns" class="grow">
                {{ run.category }}
              </TextBox>
              <TextBox theme="pronouns" class="grow">
                {{ run.estimate }}
              </TextBox>
            </MaterialPanel>
          </TransitionGroup>
        </InsetContainer>
      </MaterialPanel>
    </div>

    <!-- <div class="layout-container">
      <LicenseComponent :run="activeRun?.data" />

      <div id="carousel-container" class="font-[Fusion] overflow-hidden">
        <div
          id="up-next-carousel"
          class="h-full flex flex-row-reverse gap-2 p-2 overflow-hidden"
        ></div>
      </div>
    </div> -->
  </div>
</template>

<style lang="scss">
@use "@licenseathon-vue/sass/transition";
@use "@licenseathon-vue/sass/style.scss";
@use "@licenseathon-vue/sass/color" as theme;

body {
  background-image: url(../assets/background.png);
  background-size: cover;
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
</style>
