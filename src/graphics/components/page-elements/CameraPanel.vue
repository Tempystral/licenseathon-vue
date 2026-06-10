<script setup lang="ts">
import { mdiGamepad } from "@mdi/js";
import MaterialPanel from "../panels/MaterialPanel.vue";
import TextBox from "../text/TextBox.vue";
import TextLabel from "../text/TextLabel.vue";
import InsetContainer from "../InsetContainer.vue";
</script>
<template>
  <div>
    <div theme="lightblue" id="camera-panel" class="grid auto-cols-auto w-full">
      <MaterialPanel
        theme="blue"
        class="rounded-bl-none"
        style="grid-area: main"
      >
        <div class="w-full h-full flex flex-col items-end gap-1 pb-2">
          <InsetContainer class="aspect-video" />
          <TextLabel
            text="RUNNER"
            position="bottom"
            align="start"
            class="text-lcns-white w-full basis-18"
          >
            <TextBox theme="nameplate" class="w-full" :icon="mdiGamepad">
              Donkey
            </TextBox>
          </TextLabel>
        </div>
      </MaterialPanel>
      <!-- Pronoun area -->

      <MaterialPanel
        theme="blue"
        class="rounded-t-none"
        style="grid-area: bttm"
      >
        <TextLabel
          text="PRONOUNS"
          align="end"
          class="text-lcns-white h-16 -mt-6"
        >
          <TextBox theme="pronouns" class="w-full"> They/Them </TextBox>
        </TextLabel>
      </MaterialPanel>
      <div
        class="relative mb-5 rounded-br-3xl rounded-tl-3xl bg-lcns-dark-blue before:absolute before:top-0 before:w-6 before:h-6 before:-z-10 before:bg-lcns-blue"
        style="grid-area: crnr"
      ></div>
    </div>
  </div>
</template>
<style lang="scss">
#camera-panel {
  grid-template-areas:
    "main main main main"
    "main main main main"
    "bttm crnr crnr ....";
}
</style>
