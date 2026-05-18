<script setup lang="ts">
import { mdiGamepad } from "@mdi/js";
import TextBox2 from "../components/TextBox2.vue";
import InsetContainer from "../components/InsetContainer.vue";
import TextLabel from "../components/TextLabel.vue";
</script>

<template>
  <div class="bg-lcns-white absolute w-full h-full">
    <TextBox2
      theme="nameplate"
      :icon="mdiGamepad"
      class="absolute top-40 left-40 h-15 w-120"
    >
      Donkey Kong Country Returns: Tropical Freeze
    </TextBox2>
    <TextBox2
      theme="pronouns"
      :icon="mdiGamepad"
      class="absolute top-60 left-40 h-12 w-80"
    >
      They/Them
    </TextBox2>

    <TextBox2
      theme="lcd"
      :icon="mdiGamepad"
      class="absolute top-80 left-40 h-13 w-120"
    >
      Donkey Kong Country Returns: Tropical Freeze
    </TextBox2>

    <InsetContainer
      theme="amber"
      :align="'right'"
      class="absolute top-40 left-200 h-60 w-150"
    >
      <TextLabel text="PLATFORM" position="top" align="start">
        <TextBox2 theme="nameplate" :icon="mdiGamepad" class="h-12">
          Donkey Kong Country Returns: Tropical Freeze
        </TextBox2>
      </TextLabel>

      <TextLabel text="GAME TITLE" position="left" class="w-full h-15">
        <TextBox2 theme="lcd" :icon="mdiGamepad" class="h-full">
          DOOM (2016)
        </TextBox2>
      </TextLabel>
    </InsetContainer>
  </div>
</template>

<style></style>
