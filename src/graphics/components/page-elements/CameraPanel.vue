<script setup lang="ts">
import { mdiAccount, mdiGamepad } from "@mdi/js";
import { RunDataPlayer } from "speedcontrol-util/types/index.js";
import { onMounted, ref } from "vue";
import InsetContainer from "../panels/InsetContainer.vue";
import MaterialPanel from "../panels/MaterialPanel.vue";
import FitText from "../text/FitText.vue";
import TextBox from "../text/TextBox.vue";
import TextLabel from "../text/TextLabel.vue";
import TransitionList from "../text/TransitionList.vue";

const props = defineProps<{
  runner: RunDataPlayer;
}>();

const showingSocials = ref(false);
function changeDisplay() {
  if (props.runner.social?.twitch) {
    showingSocials.value = !showingSocials.value;
  } else {
    showingSocials.value = false;
  }
}
onMounted(() => setInterval(changeDisplay, 30_000));

const fitTextOptions = { multiLine: true, minSize: 14, maxSize: 24 };
</script>
<template>
  <div v-if="runner">
    <MaterialPanel theme="blue" class="rounded-bl-none" style="grid-area: main">
      <div class="h-full flex flex-col items-end gap-1">
        <InsetContainer
          class="aspect-video chroma-key"
          :class="!$slots.image ? 'inset-shadow-none!' : ''"
        >
          <!-- hack to remove the shadow around the edges in scenes with a camera -->
          <slot name="image" />
        </InsetContainer>
        <div class="w-full basis-18 -mb-4 relative">
          <TextLabel
            text="RUNNER"
            position="bottom"
            align="start"
            class="relative text-lcns-white w-full h-full basis-18"
          >
            <TextBox
              theme="nameplate"
              class="w-full h-full absolute top-0 left-0"
              :icon="showingSocials ? mdiAccount : mdiGamepad"
            >
              <template #rotation>
                <TransitionList
                  :items="[
                    { item: runner.name, condition: !showingSocials },
                    {
                      item: runner.social?.twitch ?? '',
                      condition: showingSocials,
                    },
                  ]"
                >
                  <template #item="{ item, condition }">
                    <div
                      v-if="condition"
                      :key="runner.id + runner.name"
                      class="absolute w-full h-full flex items-center justify-center"
                    >
                      <FitText :options="fitTextOptions">
                        {{ item }}
                      </FitText>
                    </div>
                  </template>
                </TransitionList>
              </template>
            </TextBox>
          </TextLabel>
        </div>
      </div>
    </MaterialPanel>
    <!-- Pronoun area -->
    <div id="camera-panel" class="grid auto-cols-fr w-full">
      <MaterialPanel
        theme="blue"
        class="rounded-t-none -z-10"
        style="grid-area: bttm"
      >
        <TextLabel
          text="PRONOUNS"
          align="end"
          class="text-lcns-white h-16 -mt-2"
        >
          <TextBox theme="pronouns" class="w-full">
            {{ runner.pronouns }}
          </TextBox>
        </TextLabel>
      </MaterialPanel>
      <div
        class="relative mb-5 rounded-br-3xl rounded-tl-3xl bg-lcns-dark-blue before:absolute before:top-0 before:w-6 before:h-6 before:-z-10 before:bg-lcns-blue"
        style="grid-area: crnr"
      ></div>
    </div>
  </div>
</template>
<style lang="scss">
#camera-panel {
  grid-template-areas: "bttm bttm bttm crnr crnr ....";
}

.fade-enter-from {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0%;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 750ms ease-out;
}
</style>
