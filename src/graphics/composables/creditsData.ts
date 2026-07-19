import { useReplicant } from "nodecg-vue-composable";
import { computed, ref, watch } from "vue";

import creditsData from "@licenseathon-vue/extension/credits.json";

export interface Credits {
  name: string;
  image?: {
    path: string;
    style?: string;
  };
  text?: {
    content: string[];
    style?: string;
  };
  delay: number;
  style?: string;
}

export function withCreditsData() {
  const credits = computed(() =>
    (creditsData.data as Credits[]).map((el, i) => ({
      item: el,
      condition: currentIndex.value === i,
    })),
  );

  const started = useReplicant("creditsStart", "licenseathon-vue");
  const currentIndex = ref(0);
  const currentItem = computed(() => credits.value[currentIndex.value]);
  const currentTimeout = ref<NodeJS.Timeout | undefined>();

  function startCredits() {
    nodecg.playSound("credits-music");
    currentTimeout.value = setTimeout(
      nextItem,
      currentItem.value.item.delay * 1000,
    );
  }

  function stopCredits() {
    nodecg.stopAllSounds();
    currentIndex.value = 0;
  }

  function nextItem() {
    if (credits.value.length > 0) {
      if (currentIndex.value + 1 >= credits.value.length) {
      } else {
        currentIndex.value++;
      }
    }
  }

  watch(
    () => started.data,
    (isPlaying) => {
      if (isPlaying) {
        startCredits();
      } else {
        stopCredits();
      }
    },
  );

  watch(currentItem, (item) => {
    if (started.data) {
      currentTimeout.value = setTimeout(nextItem, item.item.delay * 1000);
    } else {
      if (currentTimeout.value) clearTimeout(currentTimeout.value);
    }
  });

  return { credits };
}
