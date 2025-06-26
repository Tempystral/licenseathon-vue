<script lang="ts" setup>
import creditsData from "@licenseathon-vue/extension/credits.json";
import { useReplicant } from "nodecg-vue-composable";
import { URL } from "url";
import { computed, onMounted, ref, watch } from "vue";
import InlineSvg from "vue-inline-svg";

import layoutPath from "../assets/splash.svg";
import logoPath from "../assets/logo_2025.png";
import logo2Path from "../assets/TLC_primaryNOTAG.svg";

/* const layoutPath = new URL("../assets/splash.svg", import.meta.url).href;
const layoutRef = ref<SVGElement | null>(null);

const logoPath = new URL("../assets/logo_2025.png", import.meta.url).href;
const logoRef = ref<SVGElement | null>(null);

const logo2Path = new URL("../assets/TLC_primaryNOTAG.svg", import.meta.url)
  .href; */

type Credits =
  | {
      type: "image";
      name: string;
      delay: number;
      data: string;
    }
  | {
      type: "text";
      name: string;
      delay: number;
      data: string[];
    };

const credits = computed<Credits[]>(() => [
  {
    name: "logo 1",
    type: "image",
    delay: 5,
    data: logoPath,
  },
  {
    name: "tlc logo",
    type: "image",
    delay: 5,
    data: logo2Path,
  },
  ...(creditsData.data as Credits[]),
  {
    name: "See you next year!",
    data: [],
    delay: -1,
    type: "text",
  },
]);

const started = useReplicant("creditsStart", "licenseathon-vue");

watch(
  () => started.data,
  (isPlaying) => {
    if (isPlaying) {
      nodecg.playSound("credits-music");
      currentTimeout.value = setTimeout(
        nextItem,
        currentItem.value.delay * 1000
      );
    } else {
      nodecg.stopAllSounds();
      currentIndex.value = 0;
    }
  }
);

const currentIndex = ref(0);
const currentItem = computed(() => credits.value[currentIndex.value]);
const currentTimeout = ref<NodeJS.Timeout | undefined>();

/* onMounted(() => {
  setTimeout(nextItem, currentItem.value.delay * 1000);
}); */

watch(currentItem, (item) => {
  if (started.data) {
    currentTimeout.value = setTimeout(nextItem, item.delay * 1000);
  } else {
    if (currentTimeout.value) clearTimeout(currentTimeout.value);
  }
});

function nextItem() {
  if (credits.value.length > 0) {
    if (currentIndex.value + 1 >= credits.value.length) {
      //currentIndex.value = 0;
    } else {
      currentIndex.value++;
    }
  }
}
</script>

<template>
  <div class="">
    <InlineSvg :src="layoutPath" ref="layoutRef" id="layout" />
    <div class="absolute h-[980px] w-8/12 overflow-clip">
      <Transition name="fade">
        <section
          v-if="currentItem"
          :key="currentItem.name"
          class="flex h-8/12 w-full absolute top-0 left-0 items-center justify-center font-[Fusion] text-center"
        >
          <div
            v-if="currentItem.type === 'image'"
            :id="currentItem.name"
            class="w-8/12"
          >
            <img :src="currentItem.data" ref="logoRef" id="logo" />
          </div>

          <dl v-if="currentItem.type === 'text'" :id="currentItem.name">
            <dt class="text-5xl mb-2">{{ currentItem.name }}</dt>
            <dd v-for="name in currentItem.data" :key="name" class="text-3xl">
              {{ name }}
            </dd>
          </dl>
        </section>
      </Transition>
    </div>
  </div>
</template>

<style lang="scss">
@use "@licenseathon-vue/sass/transition.scss";
@use "@licenseathon-vue/sass/style.scss";
@use "@licenseathon-vue/sass/color" as theme;

body {
  background-image: url("../assets/background.png");
  background-size: cover;
  margin: unset;
  overflow: hidden;
}

#layout {
  position: absolute;
  z-index: 10;
}
.fade-leave-active,
.fade-enter-active {
  transition: opacity 0.8s;
}

.fade-leave-to,
.fade-enter-from {
  opacity: 0;
}

.scrolling {
  animation: moveSlideshow 75s linear 1;
}
</style>
