<script setup lang="ts">
import SvgIcon from "@jamescoyle/vue-icon";
import { Commentators } from "@licenseathon-vue/types/schemas";
import { mdiAccount } from "@mdi/js";
import { useHead } from "@vueuse/head";
import { useReplicant } from "nodecg-vue-composable";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import { RunDataActiveRun } from "speedcontrol-util/types";
import { watch } from "vue";
import { defaultRunData } from "../../graphics/util/defaults";

// Set the title of this page.
useHead({ title: "Credits Control" });

const isStarted = useReplicant<boolean>("creditsStart", "licenseathon-vue", {
  defaultValue: false,
});

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
