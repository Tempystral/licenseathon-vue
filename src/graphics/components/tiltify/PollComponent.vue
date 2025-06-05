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
  <div
    id="poll-bg"
    class="w-full h-full p-2 rounded-xl grid grid-cols-1 grid-rows-subgrid"
  >
    <div class="row-start-1 row-end-1">
      <div class="text-xl mb-1">
        Poll: <b>{{ poll.name }}</b>
      </div>
      <hr class="mb-1" />
    </div>
    <div class="row-start-3 row-end-4 flex gap-2">
      <div
        v-for="(option, i) of poll.options"
        :key="option.id"
        :style="`width: ${100 / poll.options.length}%;`"
      >
        <ProgressBar
          :amount_raised="parseInt(option.amount_raised.value as string)"
          :total="totalRaised"
          :name="option.name"
          :colour="colours[i]"
          position="in"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "@licenseathon-vue/sass/style.scss";
@use "@licenseathon-vue/sass/color" as theme;

#poll-bg {
  //background: theme.$lcns-dark-blue;
}
</style>
