<script setup lang="ts">
import { useReplicant } from "nodecg-vue-composable";
import {
  computed,
  onMounted,
  ref,
  Transition,
  TransitionGroup,
  watch,
} from "vue";
import { Polls } from "../../../../../../nodecg/bundles/nodecg-tiltify/src/types/schemas";
import ProgressBar from "./ProgressBar.vue";
import PollComponent from "./PollComponent.vue";

const props = defineProps<{
  ratio: string;
  color?: string;
}>();

const polls = useReplicant<Polls>("polls", "nodecg-tiltify");
const activePolls = ref<Polls>([]);
const currentPollIndex = ref(0);
const currentPollTotal = computed(() =>
  activePolls.value[currentPollIndex.value].options
    .map((o) => Number(o.amount_raised.value))
    .reduce((acc, amt) => acc + amt, 0)
);

onMounted(() => {
  activePolls.value = polls.data?.filter((p) => p.active) ?? [];
  setInterval(changePollIndex, 8000);
});

watch(
  () => polls.data,
  (newVal) => {
    if (newVal) {
      activePolls.value = newVal.filter((p) => p.active);
    }
  }
);

function changePollIndex() {
  if (activePolls.value.length > 1) {
    if (currentPollIndex.value + 1 >= activePolls.value.length) {
      currentPollIndex.value = 0;
    } else {
      currentPollIndex.value++;
    }
  }
}

const colours = ["bg-blue-500", "bg-amber-400", "bg-red-400", "bg-green-500"];
</script>

<template>
  <div id="incentive-container" :class="`layout-${ratio} absolute rounded-xl`">
    <div
      v-if="activePolls.length > 1"
      class="h-full w-full max-w-full max-h-full flex flex-col relative overflow-x-hidden overflow-y-clip"
    >
      <Transition name="slide">
        <PollComponent
          :textSize="ratio === '4-3' ? 'xl' : '2xl'"
          :poll="activePolls[currentPollIndex]"
          :key="activePolls[currentPollIndex].id"
        />
      </Transition>
    </div>

    <!-- <div class="p-1 h-full w-full relative overflow-x-hidden overflow-y-clip">
      <PollComponent :poll="activePolls[0]" :key="activePolls[0].id" />
    </div> -->
  </div>
</template>

<style scoped lang="scss">
@use "@licenseathon-vue/sass/style.scss";
@use "@licenseathon-vue/sass/color" as theme;

#incentive-container {
  background: theme.$lcns-blue;

  &.layout-4-3 {
    top: 960px;
    left: 662px;
    width: 1123px;
    height: 115px;
  }
  &.layout-3-2 {
    top: 855px;
    left: 662px;
    width: 1000px;
    height: 220px;
  }
  &.layout-16-9 {
    top: 845px;
    left: 647px;
    width: 735px;
    height: 230px;
    padding-block: 2em;
  }
}

.slide-enter-from {
  transform: translateY(110%);
}
.slide-enter-to {
  transform: translateY(0);
}

.slide-enter-active {
  position: absolute;
}

.slide-leave {
  transform: translateY(0);
}
.slide-leave-to {
  transform: translateY(-110%);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 750ms ease-in-out;
}
</style>
