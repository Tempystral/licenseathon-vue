<script setup lang="ts">
import {
  Incentive,
  withIncentives,
} from "@licenseathon-vue/graphics/composables/tiltify";
import { useReplicant } from "nodecg-vue-composable";
import { MaybeRef, Transition } from "vue";
import { Total } from "../../../../../nodecg-tiltify/src/types/schemas/total.js";
import InsetContainer from "../panels/InsetContainer.vue";
import MaterialPanel from "../panels/MaterialPanel.vue";
import MessageComponent from "./MessageComponent.vue";
import MilestoneComponent from "./MilestoneComponent.vue";
import PollComponent from "./PollComponent.vue";
import RewardComponent from "./RewardComponent.vue";
import UpcomingRunComponent from "./UpcomingRunComponent.vue";

const { vertical = false, incentives = [] } = defineProps<{
  vertical?: boolean;
  incentives?: MaybeRef<Incentive[]>[];
}>();

const campaignTotal = useReplicant<Total>("total", "nodecg-tiltify");

const { incentive, hasIncentives } = withIncentives(incentives);
</script>

<template>
  <MaterialPanel class="w-full h-full relative">
    <InsetContainer
      class="relative h-full overflow-x-hidden overflow-y-clip z-10"
    >
      <div class="w-full h-full inline-block relative" v-if="hasIncentives()">
        <Transition name="slide">
          <PollComponent
            class="font-[Fusion] absolute"
            v-if="incentive.type === 'poll'"
            :poll="incentive.item"
            :key="'poll' + incentive.item.id"
            :orientation="vertical ? 'vertical' : 'horizontal'"
          />
          <RewardComponent
            class="font-[Fusion] absolute"
            v-else-if="incentive.type === 'reward'"
            :key="'reward' + incentive.item.id"
            :reward="incentive.item"
          />
          <MilestoneComponent
            class="font-[Fusion] absolute"
            v-else-if="incentive.type === 'milestone'"
            :key="'milestone' + incentive.item.id"
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
            :run="incentive.item"
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
