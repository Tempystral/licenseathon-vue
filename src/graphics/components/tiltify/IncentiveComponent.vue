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
  <div
    v-if="activePolls.length > 1"
    class="bg-amber-400 p-2 flex max-w-84 h-84 relative overflow-x-hidden overflow-y-clip"
  >
    <Transition name="slide">
      <PollComponent
        :poll="activePolls[currentPollIndex]"
        :key="activePolls[currentPollIndex].id"
      />
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.slide-enter-from {
  transform: translateX(110%);
}
.slide-enter-to {
  transform: translateX(0);
}

.slide-enter-active {
  position: absolute;
}

.slide-leave {
  transform: translateX(0);
}
.slide-leave-to {
  transform: translateX(-110%);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 750ms ease-in-out;
}
</style>
