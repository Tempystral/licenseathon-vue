<script setup lang="ts">
import SvgIcon from "@jamescoyle/vue-icon";
import { Commentators } from "@licenseathon-vue/types/schemas";
import { mdiMicrophone } from "@mdi/js";
import { useReplicant } from "nodecg-vue-composable";
import { computed, onMounted, watch } from "vue";
import FitText from "../text/FitText.vue";
import TextBox from "../text/TextBox.vue";
import TextLabel from "../text/TextLabel.vue";
import { defaultCommentators } from "@licenseathon-vue/graphics/util/defaults.js";

const { orientation } = defineProps<{
  orientation: "horizontal" | "vertical";
}>();

const commentatorsRep = useReplicant<Commentators>(
  "commentators",
  "licenseathon-vue",
  { defaultValue: defaultCommentators },
);

const commentators = computed(
  () => commentatorsRep.data?.names.filter((n) => n.name.length > 0) ?? [],
);

function getCommentator(num: number) {
  return commentatorsRep.data?.names[num];
}

function getName(num: number) {
  return getCommentator(num)?.name;
}

function getPronouns(num: number) {
  const text = getCommentator(num)?.pronouns ?? "";
  return text.length > 0 ? text : "\u00a0"; // nbsp
}
</script>

<template>
  <div
    class="grid gap-2 auto-cols-fr auto-rows-fr"
    :class="
      orientation === 'horizontal' ? 'w-full grid-cols-2' : 'w-8/12 -mt-4'
    "
  >
    <TextLabel
      v-if="commentators.length >= 1"
      :text="getPronouns(0)"
      class="h-16 w-full text-lcns-white"
      :position="orientation === 'horizontal' ? 'bottom' : 'top'"
      align="end"
    >
      <TextBox class="w-full" theme="commentator" :icon="mdiMicrophone">
        {{ getName(0) }}
      </TextBox>
    </TextLabel>
    <TextLabel
      v-if="commentators.length >= 2"
      :text="getPronouns(1)"
      class="h-16 w-full text-lcns-white"
      position="bottom"
      :align="orientation === 'horizontal' ? 'start' : 'end'"
    >
      <TextBox class="w-full" theme="commentator" :icon="mdiMicrophone">
        {{ getName(1) }}
      </TextBox>
    </TextLabel>
  </div>
</template>

<style lang="scss">
@use "@licenseathon-vue/sass/style.scss";
@use "@licenseathon-vue/sass/color" as theme;
</style>
