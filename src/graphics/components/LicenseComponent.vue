<script setup lang="ts">
import { RunDataActiveRun } from "speedcontrol-util/types";
import { computed, onMounted, ref, watch } from "vue";
import InlineSvg from "vue-inline-svg";
import { fitText, getPlayers } from "../util/composables";
import getSeconds from "../util/updatetime";
import { mdiCalendarMonth, mdiGamepadVariant } from "@mdi/js";
import SvgIcon from "@jamescoyle/vue-icon";

const props = defineProps<{
  run: RunDataActiveRun;
}>();

const layoutPath = new URL("../assets/license.svg", import.meta.url).href;
const layoutRef = ref<SVGElement | null>(null);

const seconds = getSeconds();
const players = computed(() => getPlayers(props.run));

function showByTime(s: number) {
  return Math.floor(s / Math.floor(60 / players.value.length));
}
const activePlayer = computed(() => players.value[showByTime(seconds.value)]);
const activePlayerImage = computed(
  () =>
    new URL(
      `../assets/runners/${activePlayer.value.social.twitch}.png`,
      import.meta.url
    ).href
);

const fit = () => {
  fitText(["#player-name", "#game-name", "#game-category"], {
    multiLine: true,
    minSize: 12,
    maxSize: 24,
  });
};
onMounted(fit);
watch(
  () => props.run,
  () => console.log(`Run: ${props.run?.game} | ${props.run?.id}`)
);
</script>

<template>
  <div class="license font-[Fusion]">
    <Transition name="wipe" appear>
      <div
        class="player-name-container info-container"
        v-if="activePlayer"
        :key="activePlayer.id"
      >
        <p id="player-name" class="fit">{{ activePlayer.name }}</p>
      </div>
    </Transition>

    <div class="game-container">
      <Transition name="wipe" appear :onAfterLeave="fit">
        <div class="game-name-container info-container" :key="run?.id">
          <p id="game-name" class="fit">{{ run?.game }}</p>
        </div>
      </Transition>
      <Transition name="wipe" appear>
        <div class="game-category-container info-container" :key="run?.id">
          <p id="game-category" class="fit">{{ run?.category }}</p>
        </div>
      </Transition>

      <div class="game-estimate-container">
        <div id="crt" class="absolute z-10 rounded"></div>
        <p id="game-estimate" class="font-[Karnivore] mb-1">
          {{ run?.estimate }}
        </p>
      </div>

      <div class="font-[Karnivore] text-lg">
        <div v-if="run?.system" class="game-platform-container info-container">
          <SvgIcon
            type="mdi"
            :path="mdiGamepadVariant"
            class="inline align-middle"
            :size="32"
          />
          <p id="game-platform">{{ run?.system }}</p>
        </div>
        <div v-if="run?.release" class="game-year-container info-container">
          <SvgIcon
            type="mdi"
            :path="mdiCalendarMonth"
            class="inline align-middle"
            :size="32"
          />
          <p id="game-year">{{ run?.release }}</p>
        </div>
      </div>
    </div>

    <div
      class="profile-image-container border-4 border-black rounded-xl overflow-clip"
    >
      <Transition name="wipe" appear>
        <div class="profile-image" v-if="activePlayer" :key="activePlayer.id">
          <img :src="activePlayerImage" />
        </div>
      </Transition>
    </div>
  </div>
</template>

<style lang="scss">
@use "@licenseathon-vue/sass/transition";
@use "@licenseathon-vue/sass/style.scss";
@use "@licenseathon-vue/sass/color" as theme;

.fit {
  transition: font-size 0.25s;
}

.license {
  position: absolute;
  top: 290px;
  left: 10px;
  width: 1085px;
  height: 449px;
  display: flex;

  .info-container {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: theme.$lcns-black;
    width: 460px;
    height: 50px;
  }

  .player-name-container {
    top: 218px;
    left: 130px;
  }

  .game-container {
    position: absolute;
    text-align: center;

    .game-name-container {
      top: 288px;
      left: 130px;
    }

    .game-category-container {
      top: 358px;
      left: 130px;
    }
    .game-estimate-container {
      color: theme.$lcns-teal;
      text-align: right;
      font-size: 3em;

      position: absolute;
      top: 98px;
      left: 215px;
      width: 220px;
      height: 70px;
    }
    .game-platform-container {
      color: theme.$lcns-teal;
      top: 98px;
      left: 435px;
      width: 120px;
      height: 70px;
    }
    .game-year-container {
      color: theme.$lcns-teal;
      top: 98px;
      left: 555px;
      width: 60px;
      height: 70px;
    }
  }
  .profile-image-container {
    position: relative;
    top: 10px;
    left: 685px;
    width: 360px;
    height: 360px;
    .profile-image img {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
}

#crt {
  width: 400px;
  height: 70px;
}

#crt::before {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
    linear-gradient(
      90deg,
      rgba(255, 0, 0, 0.06),
      rgba(0, 255, 0, 0.02),
      rgba(0, 0, 255, 0.06)
    );
  z-index: 2;
  background-size: 100% 2px, 3px 100%;
  pointer-events: none;
}
</style>
