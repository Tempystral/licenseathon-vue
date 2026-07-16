import { useReplicant } from "nodecg-vue-composable";
import { RunData } from "speedcontrol-util/types";
import { computed, onMounted, Ref, ref } from "vue";
import {
  Milestone,
  Milestones,
  Poll,
  Polls,
  Reward,
  Rewards,
} from "../../../../nodecg-tiltify/src/types/schemas";

type PollItem = { type: "poll"; item: Poll };
type MilestoneItem = { type: "milestone"; item: Milestone };
type RewardItem = { type: "reward"; item: Reward };
type MessageItem = {
  type: "message";
  item: {
    id: string;
    text?: string;
    img?: string;
    orientation: "h" | "v";
  };
};
type UpcomingRunItem = { type: "upcoming"; item: RunData[] };

export type Incentive =
  | PollItem
  | RewardItem
  | MilestoneItem
  | MessageItem
  | UpcomingRunItem;

export function withPolls() {
  const polls = useReplicant<Polls>("polls", "nodecg-tiltify");
  const activePolls = computed<Incentive[]>(getActivePolls);

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
  return { polls: activePolls };
}

export function withMilestones() {
  const milestones = useReplicant<Milestones>("milestones", "nodecg-tiltify");
  const activeMilestones = computed<Incentive[]>(getActiveMilestones);

  function getActiveMilestones(): Incentive[] {
    return (
      milestones.data
        ?.filter((t) => t.active)
        .map((t) => ({
          type: "milestone",
          item: t,
        })) ?? []
    );
  }

  return { milestones: activeMilestones };
}

export function withRewards() {
  const rewards = useReplicant<Rewards>("rewards", "nodecg-tiltify");

  const activeRewards = computed<Incentive[]>(getActiveRewards);

  function getActiveRewards(): Incentive[] {
    return (
      rewards.data
        ?.filter((t) => t.active)
        .map((t) => ({
          type: "reward",
          item: t,
        })) ?? []
    );
  }

  return { rewards: activeRewards };
}

export function withIncentives(...incentives: Ref<Incentive[]>[]) {
  const incentiveList = computed(() => incentives.flatMap((inc) => inc.value));

  const selected = ref(0);
  const currentItem = computed(() => incentiveList.value[selected.value]);

  function nextItem() {
    if (incentiveList.value.length > 0) {
      if (selected.value + 1 >= incentiveList.value.length) {
        selected.value = 0;
      } else {
        selected.value++;
      }
    }
  }

  onMounted(() => {
    setInterval(nextItem, 20000);
  });

  return {
    incentive: currentItem,
    hasIncentives: () => incentiveList.value.length > 0,
  };
}
