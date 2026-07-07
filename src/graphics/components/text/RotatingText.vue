<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import TransitionList from "./TransitionList.vue";
import FitText from "./FitText.vue";

const { items, timeout = 20000 } = defineProps<{
  items: string[];
  timeout?: number;
}>();

const textElements = computed(() =>
  items.map((el, i) => ({ text: el, condition: i === selected.value })),
);

const selected = ref(0);
function nextItem() {
  if (items.length > 0) {
    if (selected.value + 1 >= items.length) {
      selected.value = 0;
    } else {
      selected.value++;
    }
  }
}

onMounted(() => {
  setInterval(nextItem, timeout);
});

const options = { multiLine: true, minSize: 14, maxSize: 24 };
</script>
<template>
  <TransitionList :items="textElements">
    <template #item="{ text, condition }">
      <div
        v-if="condition"
        :key="text"
        class="absolute w-full h-full flex items-center justify-center"
      >
        <FitText :options>
          {{ text }}
        </FitText>
      </div>
    </template>
  </TransitionList>
</template>
