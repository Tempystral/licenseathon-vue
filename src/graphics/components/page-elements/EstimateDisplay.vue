<script setup lang="ts">
import { ref } from "vue";
import InlineSvg from "vue-inline-svg";
import TextBox from "../text/TextBox.vue";
import TextLabel from "../text/TextLabel.vue";

const { side = "right", time } = defineProps<{
  time: string | undefined;
  side: "left" | "right" | "center";
}>();

const knobPath = new URL("../../assets/knob.svg", import.meta.url).href;
const knob = ref<SVGElement | null>(null);

const styles = {
  right: "rounded-bl-xl rounded-tr-3xl",
  left: "rounded-br-xl rounded-tl-3xl before:right-0",
  center: "rounded-t-3xl rounded-b-none max-w-80",
};
</script>
<template>
  <div
    id="estimate-panel"
    class="relative grow mt-3 bg-lcns-white before:absolute before:bottom-0 before:w-6 before:h-6 before:-z-10 before:bg-lcns-amber"
    :class="[styles[side]]"
  >
    <div class="relative p-2 h-full flex gap-2 items-end">
      <InlineSvg :src="knobPath" ref="knob" class="h-10" />
      <TextLabel text="ESTIMATE" position="top" align="start" class="grow">
        <TextBox theme="lcd2" class="w-full"> {{ time }} </TextBox>
      </TextLabel>
    </div>
  </div>
</template>
<style lang="scss">
#estimate-panel {
  &:has(+ .material-panel:nth-of-type(2)) {
    margin-left: calc(var(--spacing) * 3);
  }
}

.material-panel + #estimate-panel {
  margin-right: calc(var(--spacing) * 3);
}
</style>
