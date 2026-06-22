<script setup lang="ts">
import {
  Incentive,
  withIncentives,
  withTiltifyPolls,
  withTiltifyTargets,
} from "@licenseathon-vue/graphics/composables/tiltify";
import { useReplicant } from "nodecg-vue-composable";
import { computed, Transition } from "vue";
import { Total } from "../../../../../nodecg-tiltify/src/types/schemas";
import tlcLogo from "../../assets/TLC_primaryNOTAG.svg";
import InsetContainer from "../InsetContainer.vue";
import MaterialPanel from "../panels/MaterialPanel.vue";
import MessageComponent from "./MessageComponent.vue";
import PollComponent from "./PollComponent.vue";
import TargetComponent from "./TargetComponent.vue";

const { polls } = withTiltifyPolls();
const { targets } = withTiltifyTargets();

const campaignTotal = useReplicant<Total>("total", "nodecg-tiltify");

const messages = computed<Incentive[]>(() => [
  {
    type: "message",
    item: {
      id: "tlclogo",
      orientation: "v",
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

const { incentive, hasIncentives } = withIncentives(messages, polls, targets);
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
          />
          <TargetComponent
            class="font-[Fusion] absolute"
            v-else-if="incentive.type === 'target'"
            :target="incentive.item"
          />
          <MessageComponent
            class="font-[Karnivore] absolute"
            v-else-if="incentive.type === 'message'"
            :key="incentive.item.id"
            :message="incentive.item"
          />
        </Transition>
      </div>
    </InsetContainer>
  </MaterialPanel>
</template>

<style lang="scss">
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
