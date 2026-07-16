<script setup lang="ts">
import { RunData } from "speedcontrol-util/types/index.js";
import MaterialPanel from "../panels/MaterialPanel.vue";
import FitText from "../text/FitText.vue";
import { getPlayers } from "@licenseathon-vue/graphics/util/helpers.js";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAccount, mdiGamepad } from "@mdi/js";

const props = defineProps<{
  runs: RunData[];
}>();

function splitName(name?: string) {
  if (!name) {
    return;
  }
  if (name.length < 45) {
    return [name];
  } else {
    const out = [];
    let namePart = "";
    let len = 0;
    for (const word of name.split(" ")) {
      namePart = `${namePart} ${word}`;
      len += word.length;

      if (namePart.length >= name.length / 2) {
        out.push(namePart);
        namePart = "";
        len = 0;
      }
    }
    if (namePart.length) {
      out.push(namePart);
    }
    return out;
  }
}

const options = { multiLine: true, minSize: 11, maxSize: 18 };
</script>
<template>
  <div class="h-full w-full flex gap-2 items-start justify-center">
    <div
      class="shrink text-3xl font-[Karnivore] h-full text-center -ml-1"
      style="writing-mode: sideways-lr"
    >
      Up Next
    </div>
    <div class="h-full grow flex gap-2 text-lcns-black">
      <MaterialPanel
        theme="white"
        class="h-full grow flex flex-wrap gap-2 justify-between items-center"
        :class="run.category?.includes('Bonus') ? 'bg-lcns-amber!' : ''"
        v-for="run in runs"
        :key="run.id"
      >
        <!-- <div class="flex flex-wrap gap-1">
          <span
            class="w-fit h-fit p-1 bg-lcns-dark-blue text-lcns-white rounded font-[Karnivore]"
            v-for="{ name, id } in getPlayers(run)"
            :key="id"
          >
            <SvgIcon type="mdi" :path="mdiAccount" class="inline mr-1" />
            <span>{{ name }}</span>
          </span>
        </div> -->
        <FitText :options class="font-[Karnivore] mr-1">
          {{ run.game }}
        </FitText>
        <div class="grow flex flex-col gap-1">
          <div class="flex gap-2 justify-between">
            <p class="text-sm" v-if="run.category">
              {{ run.category }}
            </p>
            <p class="text-sm" v-if="run.estimate">
              {{ run.estimate }}
            </p>
          </div>
        </div>
      </MaterialPanel>
    </div>
  </div>
</template>
<style lang="scss"></style>
