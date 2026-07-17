<script setup lang="ts">
import SvgIcon from "@jamescoyle/vue-icon";
import { getPlayers } from "@licenseathon-vue/graphics/util/helpers.js";
import { mdiAccount } from "@mdi/js";
import { RunData } from "speedcontrol-util/types/index.js";
import MaterialPanel from "../panels/MaterialPanel.vue";
import FitText from "../text/FitText.vue";

const props = defineProps<{
  run: RunData;
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

const options = { multiLine: true, minSize: 11, maxSize: 24 };
</script>
<template>
  <!-- This set of properties defines a minimum height for each row.
   If There's not enough space for at least 4rem, don't add one. 
   The MaterialPanel will appear below the Up Next text if possible due to the grid flow.
   If it can't, it'll simply appear beside it.
   -->
  <div class="flex w-full h-full items-center justify-center">
    <div
      class="h-full w-full grid grid-flow-col items-start justify-center"
      style="
        grid-template-columns: minmax(15ch, max-content);
        grid-template-rows: repeat(auto-fill, minmax(3rem, calc(100% / 3)));
      "
    >
      <div
        class="text-4xl font-[Karnivore]"
        style="/* writing-mode: sideways-lr */"
      >
        Up Next
      </div>
      <div class="w-max h-max max-w-full max-h-full">
        <MaterialPanel
          :theme="run.category?.includes('Bonus') ? 'amber' : 'white'"
          class="flex flex-col gap-y-1 justify-start items-start text-lcns-black"
          :key="run.id"
        >
          <div class="flex flex-wrap w-full">
            <span
              class="w-fit h-fit p-1 mr-2 bg-lcns-dark-blue text-lcns-white rounded font-[Karnivore] text-xl"
              v-for="{ name, id } in getPlayers(run)"
              :key="id"
            >
              <SvgIcon type="mdi" :path="mdiAccount" class="inline mr-1" />
              <span>{{ name }}</span>
            </span>
            <FitText :options class="font-[Karnivore] pr-2">
              {{ run.game }}
            </FitText>
          </div>

          <div>
            <p class="inline" v-if="run.category">
              {{ run.category }}
            </p>
            |
            <p class="inline" v-if="run.estimate">({{ run.estimate }})</p>
          </div>
        </MaterialPanel>
      </div>
    </div>
  </div>
</template>
<style lang="scss"></style>
