<script setup lang="ts">
import { useReplicant } from "nodecg-vue-composable";
import { computed } from "vue";
import {
  Donation,
  Donations,
  Reward,
} from "../../../../../nodecg-tiltify/src/types/schemas";

const { reward, textSize = "xl" } = defineProps<{
  textSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  reward: Reward;
}>();

const donationsRep = useReplicant<Donations>("donations", "nodecg-tiltify");
function hasRewardClaim(dono: Donation, id: string) {
  return (
    dono.reward_claims?.find((reward) => reward.reward_id === id) !== undefined
  );
}

function donosForReward() {
  return (
    donationsRep.data?.filter((dono) => hasRewardClaim(dono, reward.id)) ?? []
  );
}

function totalRewardClaims() {
  return donosForReward()
    .map((dono) => dono.amount.value)
    .reduce(
      (acc, curr, i) => parseFloat(acc as string) + parseFloat(curr as string),
      0,
    );
}

const donations = computed(totalRewardClaims);

const breakpoint = computed(
  () =>
    parseFloat(donations.value as string) %
    parseFloat((reward.fair_market_value?.value ?? 1) as string),
);
</script>

<template>
  <div id="options" class="w-full h-full flex flex-col rounded-xl">
    <div class="w-full max-w-full" :key="reward.id">
      <div :class="`text-${textSize} mb-1`">
        <b>{{ reward.name }}</b> - ${{ reward.amount?.value }}
        <p class="inline">
          | Redeemed: {{ donosForReward().length }} (${{ donations }})
        </p>
      </div>
      <hr class="mb-1" />
    </div>
    <div class="relative grow bg-black/25 p-2 rounded text-2xl">
      {{ reward.description }}

      <!-- <ProgressBar
        :amount_raised="breakpoint"
        :total="parseInt((reward.fair_market_value?.value ?? 0) as string)"
        position="in"
        text-size="3xl"
      >
        <template #text>
          <b class="inline"> ${{ donations }}</b>
        </template>
      </ProgressBar> -->
    </div>
  </div>
</template>

<style lang="scss"></style>
