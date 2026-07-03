<script setup lang="ts">
import { mdiAccount } from "@mdi/js";
import TextLabel from "../text/TextLabel.vue";
import TextBox from "../text/TextBox.vue";
import { RunDataPlayer } from "speedcontrol-util/types/index.js";

const { runner, index } = defineProps<{
  runner: RunDataPlayer;
  index: number;
}>();

const styles = [
  { items: "items-start" },
  { items: "items-end" },
  { items: "items-end" },
];

const aligns = ["end", "start", "start"] as ("start" | "end")[];
</script>

<template>
  <div class="flex flex-col" :class="styles[index].items">
    <TextLabel
      :text="`RUNNER ${index + 1}`"
      position="bottom"
      :align="aligns[index]"
      class="w-full h-16 -mb-2 text-lcns-white"
    >
      <TextBox class="w-full" :icon="mdiAccount">
        {{ runner.name }}
      </TextBox>
    </TextLabel>
    <TextBox class="w-8/12 h-8" theme="pronouns">
      {{ runner.pronouns }}
    </TextBox>
  </div>
</template>

<style lang="scss"></style>
