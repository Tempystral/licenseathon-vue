<script lang="ts" setup>
import { useReplicant } from "nodecg-vue-composable";
import { computed } from "vue";
import InlineSvg from "vue-inline-svg";
import { Total } from "../../../../nodecg-tiltify/src/types/schemas";
import layoutPath from "../assets/splash.svg";
import TransitionList from "../components/text/TransitionList.vue";
import { withAssets } from "../composables/assets";
import { withCreditsData } from "../composables/creditsData";

const { credits } = withCreditsData();
const campaignTotal = useReplicant<Total>("total", "nodecg-tiltify");

const { getAsset } = withAssets("images");

const refs = computed<Record<string, unknown>>(() => ({
  total: campaignTotal.data?.value,
}));

function replaceRef(input: string) {
  const match = input.match(/\%\w+\%/gi)?.[0];
  if (!match) {
    return input;
  }
  const ref = getRef(unescape(match));
  return input.split(match).join(`${ref}`);
}

function getRef(name: keyof typeof refs.value) {
  return refs.value[name];
}

function unescape(input: string) {
  return input.replaceAll("%", "");
}
</script>

<template>
  <div class="">
    <InlineSvg :src="layoutPath" ref="layoutRef" id="layout" />
    <div class="absolute h-240 w-8/12 overflow-clip">
      <TransitionList :animation="'fade'" :items="credits">
        <template #item="{ item, condition }">
          <section
            v-if="condition"
            :key="item.name"
            class="h-full w-full absolute flex flex-col items-center justify-center text-center"
          >
            <dl v-if="item.text">
              <dt class="text-5xl mb-4 font-[Fusion]">
                {{ replaceRef(item.name) }}
              </dt>
              <div
                :class="[
                  item.text.style,
                  item.text.content.length > 15 ? 'grid grid-cols-2' : '',
                ]"
              >
                <dd
                  v-for="element in item.text.content"
                  :key="element"
                  class="text-4xl font-sans pb-1"
                >
                  {{ replaceRef(element) }}
                </dd>
              </div>
            </dl>
            <div v-if="item.image" class="w-8/12" :class="item.image?.style">
              <img
                :src="getAsset(item.image.path)?.url"
                ref="logoRef"
                id="logo"
              />
            </div>
          </section>
        </template>
      </TransitionList>
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
