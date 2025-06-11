<script setup lang="ts">
import { computed } from "vue";
import { Poll } from "../../../../../../nodecg/bundles/nodecg-tiltify/src/types/schemas";
import ProgressBar from "./ProgressBar.vue";

const { poll, textSize = "xl" } = defineProps<{
  textSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  poll: Poll;
}>();

const totalRaised = computed(() =>
  poll.options
    .map((o) => Number(o.amount_raised.value))
    .reduce((acc, amt) => acc + amt, 0)
);

const colours = ["bg-blue-500", "bg-amber-400", "bg-red-400", "bg-green-500"];
</script>

<template>
  <div id="poll-bg" class="w-full h-full p-2 rounded-xl flex flex-col gap-2">
    <div class="">
      <div :class="`text-${textSize} mb-1`">
        Bid War: <b>{{ poll.name }}</b>
      </div>
      <hr class="mb-1" />
    </div>
    <div class="relative grow flex gap-2">
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
          text-size="xl"
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
