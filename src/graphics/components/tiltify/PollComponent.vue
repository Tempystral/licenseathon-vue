<script setup lang="ts">
import { computed } from "vue";
import { Poll } from "../../../../../../nodecg/bundles/nodecg-tiltify/src/types/schemas";
import ProgressBar from "./ProgressBar.vue";

const props = defineProps<{
  poll: Poll;
}>();

const totalRaised = computed(() =>
  props.poll.options
    .map((o) => Number(o.amount_raised.value))
    .reduce((acc, amt) => acc + amt, 0)
);

const colours = ["bg-blue-500", "bg-amber-400", "bg-red-400", "bg-green-500"];
</script>

<template>
  <div class="w-80 h-fit p-2 rounded-xl bg-teal-500">
    <div class="text-xl mb-1">
      Poll: <b>{{ poll.name }}</b>
    </div>
    <hr class="mb-1" />
    <div v-for="(option, i) of poll.options" :key="option.id">
      <ProgressBar
        :amount_raised="parseInt(option.amount_raised.value as string)"
        :total="totalRaised"
        :name="option.name"
        :colour="colours[i]"
      />
    </div>
  </div>
</template>

<style lang="scss"></style>
