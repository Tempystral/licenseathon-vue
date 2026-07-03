<script setup lang="ts">
import { defaultTimer } from "@licenseathon-vue/graphics/util/defaults";
import { useReplicant } from "nodecg-vue-composable";
import { Timer } from "speedcontrol-util/types/speedcontrol";
import { computed } from "vue";

const props = defineProps<{
  id: string;
  player: number;
  position: "tl" | "bl" | "tr" | "br";
}>();

const timer = useReplicant<Timer>("timer", "nodecg-speedcontrol", {
  defaultValue: defaultTimer as Timer,
});

const finishTime = computed(() => timer?.data?.teamFinishTimes[props.id]);

const positions = {
  tl: "rounded-tl-lg rounded-br-2xl",
  tr: "right-0 rounded-tr-lg rounded-bl-2xl",
  bl: "bottom-0 rounded-bl-lg rounded-tr-2xl",
  br: "right-0 bottom-0 rounded-br-lg rounded-tl-2xl",
};
</script>
<template>
  <div
    class="relative chroma-key h-full border-4 border-lcns-white rounded-2xl"
  >
    <div
      v-if="finishTime"
      class="absolute w-[8ch] h-12 font-[Fusion] text-4xl bg-lcns-white text-lcns-black flex items-center justify-center"
      :class="positions[position]"
    >
      {{ finishTime.time }}
    </div>
  </div>
</template>
<style lang="scss">
@use "@licenseathon-vue/sass/style.scss";
@use "@licenseathon-vue/sass/color" as theme;

.chroma-key {
  background-color: magenta;
}
</style>
