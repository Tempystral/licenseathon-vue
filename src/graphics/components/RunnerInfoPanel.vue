<script setup lang="ts">
import { RunDataPlayer } from "speedcontrol-util/types";
import { computed, onMounted, watch } from "vue";
import { fitText } from "../util/composables";
import getSeconds from "../util/updatetime";
import { mdiGamepad, mdiTwitch } from "@mdi/js";
import SvgIcon from "@jamescoyle/vue-icon";

const props = defineProps<{
  player: RunDataPlayer;
  ratio: string;
  position: number;
}>();

const pronouns = computed(() => props.player.pronouns?.split(","));
const seconds = getSeconds();

// Fit text
const options = computed(() => ({ multiLine: true, minSize: 14, maxSize: 30 }));
const fit = () => {
  fitText(["#player-name", "#player-social"], options.value);
  fitText(["#player-pronouns"], { multiLine: true, minSize: 18, maxSize: 24 });
};

onMounted(() => {
  fit();
});
watch(() => props.player, fit);
</script>

<template>
  <div
    class="absolute font-[Fusion] flex flex-col justify-center text-center"
    :class="['player-container', `layout-${ratio}`, `player-${position}`]"
    :data-player="`${player.id}`"
  >
    <Transition name="wipe" :onEnter="fit">
      <div class="player-name-container absolute w-full" v-if="seconds < 30">
        <p id="player-name" class="inline-block whitespace-nowrap max-w-10/12">
          <SvgIcon
            type="mdi"
            :path="mdiGamepad"
            class="inline align-middle"
            :size="28"
          />
          {{ player.name }}
        </p>
      </div>
      <div
        class="player-social-container absolute w-full"
        v-else-if="seconds >= 30"
      >
        <p
          id="player-social"
          class="inline-block whitespace-nowrap max-w-10/12"
        >
          <SvgIcon
            type="mdi"
            :path="mdiTwitch"
            class="inline align-middle"
            :size="28"
          />
          {{ player.social.twitch }}
        </p>
      </div>
    </Transition>
  </div>
  <div
    :data-player="`${player.id}`"
    :class="[
      'player-pronouns-container',
      `layout-${ratio}`,
      `player-${position}`,
    ]"
    class="absolute font-[Fusion] flex flex-col justify-center text-center"
  >
    <Transition name="wipe">
      <span
        class="wrapper inline-block whitespace-nowrap"
        id="player-pronouns"
        v-if="player.pronouns && player.pronouns?.length > 0"
      >
        {{ player.pronouns }}
      </span>
    </Transition>
  </div>
</template>

<style lang="scss">
@use "@licenseathon-vue/sass/style.scss";
@use "@licenseathon-vue/sass/color" as theme;
@use "@licenseathon-vue/sass/transition";

.layout-container.solo {
  .player-container:not(.player-1) {
    display: none;
  }

  .player-container {
    color: theme.$lcns-white;

    // Per-player positions
    &.player-1 {
      top: 358px;
      left: 276px;
      width: 348px;
      height: 60px;
      &.layout-ds {
        top: 424px;
      }
    }
  }

  .player-pronouns-container {
    color: theme.$lcns-black;

    &.layout-16-9 {
      left: 138px;
      top: 30px;
      width: 84px;
      height: 18px;
    }
    &.layout-4-3,
    &.layout-ds {
      left: 460px;
      top: 308px;
      width: 165px;
      height: 40px;
    }
    &.layout-3-2 {
      left: 224px;
      top: 12px;
      width: 72px;
      height: 36px;
    }
  }
}

.layout-container.race {
  .player-container {
    position: fixed;

    color: theme.$lcns-white;
    font-family: "Fusion";
    font-size: large;
    text-align: center;

    display: flex;
    align-items: center;

    // General settings for the name and social fields
    .player-name-container,
    .player-social-container {
      position: absolute;
      width: 100%;
      .wrapper {
        display: inline-block;
        max-width: 80%;
      }
    }
    &.layout-16-9 {
      // Per-player positions
      .player-pronouns-container {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: unset;
      }
      &.player-1 {
        top: 464px;
        left: 30px;
        width: 236px;
        height: 40px;
        .player-pronouns-container {
          left: 254px;
          top: 14px;
          width: 90px;
          height: 16px;
        }
      }
      &.player-2 {
        top: 464px;
        left: 1010px;
        width: 236px;
        height: 40px;
        .player-pronouns-container {
          left: -102px;
          top: 8px;
          width: 90px;
          height: 16px;
        }
      }
    }

    &.layout-4-3 {
      // Per-player positions
      .player-pronouns-container {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: unset;
      }
      &.player-1 {
        top: 505px;
        left: 30px;
        width: 236px;
        height: 40px;
        .player-pronouns-container {
          left: 254px;
          top: 14px;
          width: 90px;
          height: 16px;
        }
      }
      &.player-2 {
        top: 505px;
        left: 1010px;
        width: 236px;
        height: 40px;
        .player-pronouns-container {
          left: -102px;
          top: 8px;
          width: 90px;
          height: 16px;
        }
      }
    }
    &.layout-3-way {
      // Per-player positions
      .player-pronouns-container {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: unset;
      }
      &.player-1 {
        top: 410px;
        left: 30px;
        width: 236px;
        height: 40px;
        .player-pronouns-container {
          left: 16px;
          top: 42px;
          width: 90px;
          height: 16px;
        }
      }
      &.player-2 {
        top: 76px;
        left: 436px;
        width: 236px;
        height: 40px;
        .player-pronouns-container {
          left: 236px;
          top: 0px;
          width: 90px;
          height: 16px;
        }
      }
      &.player-3 {
        top: 410px;
        left: 1010px;
        width: 236px;
        height: 40px;
        .player-pronouns-container {
          left: 112px;
          top: 42px;
          width: 90px;
          height: 16px;
        }
      }
    }
  }
}

.svg-inline--fa {
  padding-inline-end: 0.5em;
  vertical-align: middle;
}
</style>
