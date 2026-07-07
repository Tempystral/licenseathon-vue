<script lang="ts" setup>
import { useReplicant } from "nodecg-vue-composable";
import { RunDataArray } from "speedcontrol-util/types";
import { ref } from "vue";
import InlineSvg from "vue-inline-svg";
import CameraPanel from "../components/page-elements/CameraPanel.vue";
import LogoContainer from "../components/page-elements/LogoContainer.vue";
import MaterialPanel from "../components/panels/MaterialPanel.vue";
import FitText from "../components/text/FitText.vue";
import TextBox from "../components/text/TextBox.vue";
import TextLabel from "../components/text/TextLabel.vue";
import IncentiveComponent from "../components/tiltify/IncentiveComponent.vue";
import { withRunData } from "../composables/runData.js";
import { getPlayers } from "../util/helpers.js";

const layoutPath = new URL("../assets/setup.svg", import.meta.url).href;
const layoutRef = ref<SVGElement | null>(null);

const cornerPath = new URL("../assets/corner.svg", import.meta.url).href;

/**
 * Replicants required:
 * runDataActiveRun
 * runDataActiveRunSurrounding (Maybe not, do we really care about the before part?)
 * runDataArray
 */

const { runData, runners } = withRunData();

const allRuns = useReplicant<RunDataArray>(
  "runDataArray",
  "nodecg-speedcontrol",
  { defaultValue: [] as RunDataArray },
);

function remainingRuns() {
  return allRuns?.data?.slice(
    allRuns.data.findIndex((r) => r.id === runData.value?.id) + 1,
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
    <InlineSvg :src="layoutPath" ref="layoutRef" id="layout" />

    <!-- <IncentiveComponent ratio="setup" /> -->

    <div
      id="main-grid"
      class="absolute w-full h-full grid gap-3 -z-10"
      style="
        grid-template-columns: 2rem auto 34rem 34rem 16rem;
        grid-template-rows: 4rem 1fr 2fr 1fr 8rem;
      "
    >
      <div
        class="grid grid-cols-subgrid font-[Karnivore] text-3xl"
        style="grid-area: top"
      >
        <p></p>
        <p class="flex justify-center items-end">UP NEXT</p>
        <p class="flex justify-center items-end">UPCOMING</p>
      </div>

      <div
        theme="amber"
        class="font-[Fusion]"
        style="
          grid-area: rite;
          clip-path: polygon(0 0, 0 100%, 60% 100%, 100% 70%, 100% 0);
        "
      >
        <div
          class="relative w-full h-full overflow-hidden grid grid-rows-4 gap-2 p-0"
        >
          <TransitionGroup name="slide-h">
            <div
              class="relative w-full grid grid-cols-[3fr_1fr] grid-rows-3"
              v-for="run in remainingRuns()?.slice(0, 4)"
              :key="run.id"
            >
              <MaterialPanel
                theme="white"
                class="flex flex-col gap-2 justify-between w-full text-lcns-black row-span-3"
              >
                <TextLabel
                  v-if="getPlayers(run).length > 0"
                  class="h-20"
                  text="RUNNER"
                  align="start"
                >
                  <TextBox theme="pronouns" class="w-full">
                    <template #rotation>
                      <span
                        v-for="(player, index) of getPlayers(run)"
                        class="absolute h-full flex items-center justify-center"
                        style="width: calc(100% - 1rem)"
                        :key="player.id"
                      >
                        <FitText :options>{{ player.name }}</FitText>
                        <span
                          v-if="
                            getPlayers(run).length > 1 &&
                            getPlayers(run).length - index > 1
                          "
                        >
                          &nbsp;|&nbsp;
                        </span>
                      </span>
                    </template>
                  </TextBox>
                </TextLabel>

                <TextLabel
                  v-if="run.game"
                  class="h-18"
                  text="GAME NAME"
                  align="start"
                >
                  <TextBox theme="invisible" class="w-full">
                    {{ run.game }}
                  </TextBox>
                </TextLabel>
                <TextLabel
                  v-if="run.category"
                  class="h-18"
                  text="CATEGORY"
                  align="start"
                >
                  <TextBox theme="invisible" class="w-full">
                    {{ run.category }}
                  </TextBox>
                </TextLabel>
              </MaterialPanel>
              <MaterialPanel v-if="run.estimate" theme="white" class="-ml-3">
                <TextLabel class="h-18" text="ESTIMATE" align="end">
                  <TextBox theme="invisible" class="w-full">
                    {{ run.estimate }}
                  </TextBox>
                </TextLabel>
              </MaterialPanel>
              <InlineSvg :src="cornerPath" class="fill-lcns-white h-6 w-6" />
              <!-- <div class="inner-corner-xl corner-tl bg-lcns-white"></div> -->
            </div>
          </TransitionGroup>
        </div>
      </div>

      <CameraPanel :runner="runners[0] ?? ''" style="grid-area: mid">
        <template #image>
          <div
            theme="white"
            class="w-full h-full flex flex-col gap-4 justify-around"
          >
            <TextLabel
              v-if="runData?.game"
              class="h-20 text-lcns-white"
              text="GAME NAME"
              align="start"
            >
              <TextBox theme="lcd2" class="w-full">
                {{ runData.game }}
              </TextBox>
            </TextLabel>
            <TextLabel
              v-if="runData?.category"
              class="h-20 text-lcns-white"
              text="CATEGORY"
              align="start"
            >
              <TextBox theme="lcd2" class="w-full">
                {{ runData.category }}
              </TextBox>
            </TextLabel>
            <TextLabel
              class="h-20 text-lcns-white"
              text="ESTIMATE"
              align="start"
            >
              <TextBox theme="lcd2" class="w-full">
                {{ runData?.estimate }}
              </TextBox>
            </TextLabel>
          </div>
        </template>
      </CameraPanel>

      <IncentiveComponent style="grid-area: ictv" :vertical="true" />

      <LogoContainer
        class="my-4 col-start-3 col-span-1"
        style="grid-area: logo"
      />
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

#main-grid {
  grid-template-areas:
    ". top  top  top  ."
    ". ictv mid  rite ."
    ". logo logo rite ."
    ". logo logo rite ."
    ". bttm bttm bttm .";
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
