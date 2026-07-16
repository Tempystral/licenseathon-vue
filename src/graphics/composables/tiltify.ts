import { useReplicant } from "nodecg-vue-composable";
import { RunData } from "speedcontrol-util/types";
import { computed, onMounted, Ref, ref, watch } from "vue";
import {
  Milestone,
  Milestones,
  Poll,
  Polls,
} from "../../../../nodecg-tiltify/src/types/schemas";

type PollItem = { type: "poll"; item: Poll };
type MilestoneItem = { type: "milestone"; item: Milestone };
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
  | MilestoneItem
  | MessageItem
  | UpcomingRunItem;

export function withTiltifyPolls() {
  const polls = useReplicant<Polls>("polls", "nodecg-tiltify");
  const activePolls = ref<Incentive[]>(getActivePolls());

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

  watch(
    () => polls.data,
    (newVal) => {
      if (newVal) {
        activePolls.value = getActivePolls();
      }
    },
  );
  return { polls: activePolls };
}

export function withTiltifyMilestones() {
  const milestones = useReplicant<Milestones>("milestones", "nodecg-tiltify");
  const activeMilestones = ref<Incentive[]>(getActiveMilestones());

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

  watch(
    () => milestones.data,
    (newVal) => {
      if (newVal) {
        activeMilestones.value = getActiveMilestones();
      }
    },
  );

  return { milestones: activeMilestones };
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
