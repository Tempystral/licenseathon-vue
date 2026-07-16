<script setup lang="ts">
import {
  Incentive,
  withIncentives,
  withTiltifyMilestones,
  withTiltifyPolls,
} from "@licenseathon-vue/graphics/composables/tiltify";
import { withUpcomingRunData } from "@licenseathon-vue/graphics/composables/upcomingRunData";
import { useReplicant } from "nodecg-vue-composable";
import { computed, ref, Transition } from "vue";
import { Total } from "../../../../../nodecg-tiltify/src/types/schemas";
import tlcLogo from "../../assets/TLC_primaryNOTAG.svg";
import InsetContainer from "../panels/InsetContainer.vue";
import MaterialPanel from "../panels/MaterialPanel.vue";
import MessageComponent from "./MessageComponent.vue";
import MilestoneComponent from "./MilestoneComponent.vue";
import PollComponent from "./PollComponent.vue";
import UpcomingRunComponent from "./UpcomingRunComponent.vue";

const { vertical = false } = defineProps<{
  vertical?: boolean;
}>();

const { polls } = withTiltifyPolls();
const { milestones } = withTiltifyMilestones();
const { upcoming } = withUpcomingRunData(2);

const upcomingRuns = ref([
  {
    type: "upcoming" as const,
    item: upcoming,
  },
]); /* computed<Incentive[]>(() =>
  upcoming.value.map((run) => ({ type: "upcoming", item: run })),
); */

const campaignTotal = useReplicant<Total>("total", "nodecg-tiltify");

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
      text: "Donate at: licenseathon.live/donate",
      orientation: "v",
      id: "donomsg",
    },
  },
  {
    type: "message",
    item: {
      text: `$${campaignTotal.data?.value} raised for the Transgender Law Center!`,
      orientation: "v",
      id: "campaigntotal",
    },
  },
]);

const { incentive, hasIncentives } = withIncentives(
  //messages,
  polls,
  //milestones,
  //upcomingRuns,
);
</script>

<template>
  <MaterialPanel class="w-full h-full relative">
    <InsetContainer
      v-if="hasIncentives()"
      class="relative h-full overflow-x-hidden overflow-y-clip z-10"
    >
      <div class="w-full h-full inline-block relative">
        <Transition name="slide">
          <PollComponent
            class="font-[Fusion] absolute"
            v-if="incentive.type === 'poll'"
            :poll="incentive.item"
            :key="'poll' + incentive.item.id"
            :orientation="vertical ? 'vertical' : 'horizontal'"
          />
          <MilestoneComponent
            class="font-[Fusion] absolute"
            v-else-if="incentive.type === 'milestone'"
            :key="'target' + incentive.item.id"
            :milestone="incentive.item"
            :total="campaignTotal.data"
          />
          <MessageComponent
            class="font-[Karnivore] absolute"
            v-else-if="incentive.type === 'message'"
            :key="'msg' + incentive.item.id"
            :message="incentive.item"
          />
          <UpcomingRunComponent
            class="absolute font-[Fusion]"
            v-else-if="incentive.type === 'upcoming'"
            key="upcoming"
            :runs="incentive.item"
          />
        </Transition>
      </div>
    </InsetContainer>
  </MaterialPanel>
</template>

<style lang="scss">
@use "@licenseathon-vue/sass/style.scss";
@use "@licenseathon-vue/sass/color" as theme;
@use "@licenseathon-vue/sass/transition";
</style>
