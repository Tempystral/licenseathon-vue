import { useReplicant } from "nodecg-vue-composable";
import { computed, onMounted, Ref, ref, watch } from "vue";
import {
  Poll,
  Polls,
  Target,
  Targets,
} from "../../../../nodecg-tiltify/src/types/schemas";

export type Incentive =
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
      item: {
        id: string;
        text?: string;
        img?: string;
        orientation: "h" | "v";
      };
    };

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

export function withTiltifyTargets() {
  const targets = useReplicant<Targets>("targets", "nodecg-tiltify");
  const activeTargets = ref<Incentive[]>(getActiveTargets());

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
    () => targets.data,
    (newVal) => {
      if (newVal) {
        activeTargets.value = getActiveTargets();
      }
    },
  );

  return { targets: activeTargets };
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
    setInterval(nextItem, 150000);
  });

  return {
    incentive: currentItem,
    hasIncentives: () => incentiveList.value.length > 0,
  };
}
