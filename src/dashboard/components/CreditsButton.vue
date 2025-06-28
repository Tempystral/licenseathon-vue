<script setup lang="ts">
import { useHead } from "@vueuse/head";
import { useReplicant } from "nodecg-vue-composable";
import Button from "primevue/button";

// Set the title of this page.
useHead({ title: "Credits Control" });

const isStarted = useReplicant<boolean>("creditsStart", "licenseathon-vue");

function start() {
  isStarted.data = true;
  isStarted.save();
}

function stop() {
  isStarted.loadDefault();
  isStarted.save();
}
</script>

<template>
  <div class="w-full flex gap-2 items-center justify-center">
    <Button
      :disabled="isStarted.data"
      severity="info"
      class="h-9"
      @click="start"
    >
      Roll Credits
    </Button>
    <Button
      :disabled="!isStarted.data"
      severity="danger"
      class="h-9"
      @click="stop"
    >
      Reset Credits
    </Button>
  </div>
</template>
