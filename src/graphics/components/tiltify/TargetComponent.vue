<script setup lang="ts">
import { useReplicant } from "nodecg-vue-composable";
import { onMounted, ref, watch } from "vue";
import {
  Target,
  Targets,
} from "../../../../../../nodecg/bundles/nodecg-tiltify/src/types/schemas";
import ProgressBar from "./ProgressBar.vue";

const targets = useReplicant<Targets>("targets", "nodecg-tiltify");
const activeTargets = ref<Targets>([]);
const currentTarget = ref(0);

onMounted(() => {
  activeTargets.value = targets.data?.filter((p) => p.active) ?? [];
  setInterval(nextTarget, 8000);
});

watch(
  () => targets.data,
  (newVal) => {
    if (newVal) {
      activeTargets.value = newVal.filter((p) => p.active);
    }
  }
);

function nextTarget() {
  if (activeTargets.value.length > 1) {
    if (currentTarget.value + 1 >= activeTargets.value.length) {
      currentTarget.value = 0;
    } else {
      currentTarget.value++;
    }
    //drawPoll();
  }
}
</script>

<template>
  <div id="options" class="w-80 h-full p-2 m-2 bg-teal-500 rounded-xl">
    <div
      class="w-full max-w-full"
      v-for="target of activeTargets"
      :key="target.id"
    >
      <div>
        <span class="text-xl">
          Goal: <b>{{ target.name }}</b>
        </span>
      </div>
      <hr class="mb-2" />
      <ProgressBar
        :amount_raised="parseInt(target.amount_raised.value as string)"
        :total="parseInt(target.amount.value as string)"
      />
    </div>
  </div>
</template>

<style lang="scss"></style>
