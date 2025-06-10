<script setup lang="ts">
import { useReplicant } from "nodecg-vue-composable";
import { computed, onMounted, ref, Transition, watch } from "vue";
import {
  Poll,
  Polls,
  Target,
  Targets,
} from "../../../../../../nodecg/bundles/nodecg-tiltify/src/types/schemas";
import PollComponent from "./PollComponent.vue";
import TargetComponent from "./TargetComponent.vue";
import { NodeCGAPIClient } from "node_modules/nodecg/out/client/api/api.client";
import { Configschema } from "@licenseathon-vue/types/schemas";
import tlcLogo from "../../assets/TLC_primaryNOTAG.svg";

const props = defineProps<{
  ratio: string;
  color?: string;
}>();

const polls = useReplicant<Polls>("polls", "nodecg-tiltify");
const activePolls = ref<Incentive[]>(getActivePolls());
const targets = useReplicant<Targets>("targets", "nodecg-tiltify");
const activeTargets = ref<Incentive[]>(getActiveTargets());

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

const messages: Incentive[] = [
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
];

const incentives = computed<Incentive[]>(() => [
  ...messages,
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
  }
);

watch(
  () => targets.data,
  (newVal) => {
    if (newVal) {
      activeTargets.value = getActiveTargets();
    }
  }
);

const currentItem = computed(() => incentives.value[currentIndex.value]);
const currentIndex = ref(0);

onMounted(() => {
  setInterval(nextItem, 8000);
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
  <div
    id="incentive-container"
    :class="`layout-${ratio} absolute rounded-xl inline-block`"
  >
    <div
      v-if="incentives.length > 0"
      class="h-full w-full max-w-full max-h-full flex flex-col relative overflow-x-hidden overflow-y-clip z-10"
    >
      <Transition name="slide">
        <div
          v-if="currentItem"
          class="h-full w-full"
          :key="currentItem.item.id"
        >
          <PollComponent
            class="font-[Fusion]"
            v-if="currentItem.type === 'poll'"
            :textSize="ratio === '4-3' ? 'xl' : '2xl'"
            :poll="currentItem.item"
          />
          <TargetComponent
            class="font-[Fusion]"
            v-else-if="currentItem.type === 'target'"
            :target="currentItem.item"
          />
          <div
            v-else-if="currentItem.type === 'message'"
            class="font-sans flex basis-1 h-full items-center justify-center text-4xl gap-2 p-4"
            :class="
              currentItem.item.orientation === 'v' ? 'flex-col' : 'flex-row'
            "
          >
            <p class="">{{ currentItem.item.text }}</p>
            <img
              v-if="currentItem.item.img"
              :src="currentItem.item.img"
              class="bg-white/80 rounded-xl min-w-0 max-w-8/12 min-h-0 max-h-full"
            />
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@licenseathon-vue/sass/style.scss";
@use "@licenseathon-vue/sass/color" as theme;

#incentive-container {
  background: theme.$lcns-dark-blue;
  border: 0.5em solid theme.$lcns-blue;
  box-shadow: inset 0 0 4px 0 black;

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

  &.layout-setup {
    top: 70px;
    left: 10px;
    width: 1090px;
    height: 180px;
    padding-block: 1em;
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
