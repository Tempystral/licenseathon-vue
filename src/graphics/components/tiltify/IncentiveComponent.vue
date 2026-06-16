<script setup lang="ts">
import { useReplicant } from "nodecg-vue-composable";
import { computed, onMounted, ref, Transition, watch } from "vue";
import {
  Poll,
  Polls,
  Target,
  Targets,
  Total,
} from "../../../../../nodecg-tiltify/src/types/schemas";
import PollComponent from "./PollComponent.vue";
import TargetComponent from "./TargetComponent.vue";
import tlcLogo from "../../assets/TLC_primaryNOTAG.svg";
import MaterialPanel from "../panels/MaterialPanel.vue";
import InsetContainer from "../InsetContainer.vue";

const polls = useReplicant<Polls>("polls", "nodecg-tiltify");
const activePolls = ref<Incentive[]>(getActivePolls());

const targets = useReplicant<Targets>("targets", "nodecg-tiltify");
const activeTargets = ref<Incentive[]>(getActiveTargets());

const campaignTotal = useReplicant<Total>("total", "nodecg-tiltify");

type Incentive =
  | {
      type: "poll";
      item: Poll;
    }
  | {
      type: "target";
      item: Target;
    }
  | {
      type: "message";
      item: { text?: string; img?: string; orientation: "h" | "v"; id: string };
    };

const messages = computed<Incentive[]>(() => [
  {
    type: "message",
    item: {
      id: "tlclogo",
      orientation: "h",
      text: "In support of: ",
      img: tlcLogo,
    },
  },
  {
    type: "message",
    item: {
      text: "Donate at: www.licenseathon.live/donate",
      orientation: "v",
      id: "donomsg",
    },
  },
  {
    type: "message",
    item: {
      text: `$${campaignTotal.data?.value} raised so far for the Transgender Law Center!`,
      orientation: "v",
      id: "campaigntotal",
    },
  },
]);

const incentives = computed<Incentive[]>(() => [
  ...messages.value,
  ...activePolls.value,
  ...activeTargets.value,
]);

function getActivePolls(): Incentive[] {
  return (
    polls.data
      ?.filter((p) => p.active)
      .map((p) => ({
        type: "poll",
        item: p,
      })) ?? []
  );
}

function getActiveTargets(): Incentive[] {
  return (
    targets.data
      ?.filter((t) => t.active)
      .map((t) => ({
        type: "target",
        item: t,
      })) ?? []
  );
}

watch(
  () => polls.data,
  (newVal) => {
    if (newVal) {
      activePolls.value = getActivePolls();
    }
  },
);

watch(
  () => targets.data,
  (newVal) => {
    if (newVal) {
      activeTargets.value = getActiveTargets();
    }
  },
);

const currentItem = computed(() => incentives.value[currentIndex.value]);
const currentIndex = ref(0);

onMounted(() => {
  setInterval(nextItem, 15000);
});

function nextItem() {
  if (incentives.value.length > 0) {
    if (currentIndex.value + 1 >= incentives.value.length) {
      currentIndex.value = 0;
    } else {
      currentIndex.value++;
    }
  }
}
</script>

<template>
  <MaterialPanel class="h-full relative">
    <InsetContainer
      v-if="incentives.length > 0"
      class="relative max-h-full max-w-full h-full flex flex-col overflow-x-hidden overflow-y-clip z-10"
    >
      <Transition name="slide">
        <div
          v-if="currentItem"
          class="w-full h-full"
          :key="currentItem.item.id"
        >
          <PollComponent
            class="font-[Fusion]"
            v-if="currentItem.type === 'poll'"
            :poll="currentItem.item"
          />
          <TargetComponent
            class="font-[Fusion]"
            v-else-if="currentItem.type === 'target'"
            :target="currentItem.item"
          />
          <div
            v-else-if="currentItem.type === 'message'"
            class="w-full h-full font-sans flex items-center justify-center text-4xl gap-2"
            :class="
              currentItem.item.orientation === 'v' ? 'flex-col' : 'flex-row'
            "
          >
            <span class="">{{ currentItem.item.text }}</span>
            <div
              v-if="currentItem.item.img"
              class="min-w-0 max-w-8/12 h-full bg-white/80 rounded-xl"
            >
              <img :src="currentItem.item.img" class="h-full" />
            </div>
          </div>
        </div>
      </Transition>
    </InsetContainer>
  </MaterialPanel>
</template>

<style scoped lang="scss">
@use "@licenseathon-vue/sass/style.scss";
@use "@licenseathon-vue/sass/color" as theme;

.slide-enter-from {
  transform: translateY(120%);
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
  transform: translateY(-120%);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 750ms ease-in-out;
}
</style>
