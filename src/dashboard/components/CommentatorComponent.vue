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
useHead({ title: "Commentators" });

const commentators = useReplicant<Commentators>(
  "commentators",
  "licenseathon-vue",
  { defaultValue: { names: ["", ""] } }
);

const activeRun = useReplicant<RunDataActiveRun>(
  "runDataActiveRun",
  "nodecg-speedcontrol",
  { defaultValue: defaultRunData }
);

watch(
  () => activeRun.data,
  () => {
    commentators.loadDefault();
    commentators.save();
  }
);
</script>

<template>
  <div v-if="commentators.data" class="flex flex-col gap-2">
    <div class="flex items-center gap-2">
      <SvgIcon type="mdi" :path="mdiAccount" class="inline align-bottom" />
      <InputText
        size="small"
        placeholder="Commentator 1 Name"
        v-model="commentators.data.names[0]"
      />
    </div>

    <div class="flex items-center gap-2">
      <SvgIcon type="mdi" :path="mdiAccount" class="inline align-bottom" />
      <InputText
        size="small"
        placeholder="Commentator 2 Name"
        v-model="commentators.data.names[1]"
      />
    </div>

    <div class="flex gap-2 ms-8">
      <Button
        :disabled="!commentators.changed"
        severity="primary"
        class="h-9"
        @click="commentators.save()"
      >
        Submit
      </Button>
      <Button
        severity="danger"
        class="h-9"
        @click="
          commentators.loadDefault();
          commentators.save();
        "
      >
        Reset
      </Button>
    </div>
  </div>
</template>
