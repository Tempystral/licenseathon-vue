<script setup lang="ts">
import SvgIcon from "@jamescoyle/vue-icon";
import { Commentators } from "@licenseathon-vue/types/schemas";
import { mdiMicrophone } from "@mdi/js";
import { useReplicant } from "nodecg-vue-composable";
import { fitText } from "../util/composables";
import { computed, onMounted, watch } from "vue";

const props = defineProps<{
  ratio: string;
  players: number;
}>();

const commentators = useReplicant<Commentators>(
  "commentators",
  "licenseathon-vue",
  { defaultValue: { names: ["", ""] } }
);

const nonEmptyNames = computed(
  () => commentators.data?.names.filter((n) => n.length > 0) ?? []
);

const fit = () => {
  fitText(["#commentator-1", "#commentator-2"], {
    multiLine: true,
    minSize: 18,
    maxSize: 24,
  });
};

function hideAndShowPanels(names: string[]) {
  const com1 = document.getElementById("Commentator-1");
  const com2 = document.getElementById("Commentator-2");
  if (names.length == 2) {
    if (com1) com1.style.display = "";
    if (com2) com2.style.display = "";
  } else if (names.length == 1) {
    if (com2) com2.style.display = "none";
    if (com1) com1.style.display = "";
  } else if (names.length === 0) {
    if (com2) com2.style.display = "none";
    if (com1) com1.style.display = "none";
  }
}

watch(nonEmptyNames, (names) => {
  hideAndShowPanels(names);
  fit();
});

onMounted(() => {
  hideAndShowPanels(nonEmptyNames.value);
  setTimeout(fit, 1000);
});
</script>

<template>
  <div
    :class="`comms-container layout-${ratio} layout-${players}p font-[Fusion]`"
  >
    <div
      class="commentator"
      id="commentator-1-container"
      v-if="nonEmptyNames.length > 0"
    >
      <SvgIcon
        type="mdi"
        :path="mdiMicrophone"
        class="ms-1 mic-icon"
        id="mic-icon-1"
        :size="18"
      />
      <p id="commentator-1" class="inline-block whitespace-nowrap">
        {{ nonEmptyNames[0] }}
      </p>
    </div>

    <div
      class="commentator"
      id="commentator-2-container"
      v-if="nonEmptyNames.length > 1"
    >
      <SvgIcon
        type="mdi"
        :path="mdiMicrophone"
        class="ms-1 mic-icon"
        id="mic-icon-2"
        :size="18"
      />
      <p id="commentator-2" class="inline-block whitespace-nowrap">
        {{ nonEmptyNames[1] }}
      </p>
    </div>
  </div>
</template>

<style lang="scss">
@use "@licenseathon-vue/sass/style.scss";
@use "@licenseathon-vue/sass/color" as theme;

.comms-container.layout-1p {
  display: flex;

  color: theme.$lcns-black;

  &.layout-4-3,
  &.layout-3-2 {
    position: absolute;
    top: 433px;
    left: 75px;
    height: 50px;
    gap: 60px;

    #mic-icon-1 {
      color: theme.$lcns-white;
      position: fixed;
      top: 442px;
      left: 24px;
      width: 32px;
      height: 32px;
    }
    #mic-icon-2 {
      display: none;
    }
  }

  &.layout-16-9 {
    position: absolute;
    top: 485px;
    left: 159px;
    height: 110px;
    margin-inline-start: 0.5rem;

    flex-direction: column;
    gap: 10px;

    .mic-icon {
      color: theme.$lcns-white;
      position: fixed;
      left: 117px;
      width: 32px;
      height: 32px;

      &#mic-icon-1 {
        top: 493px;
      }
      &#mic-icon-2 {
        top: 553px;
      }
    }
    .commentator {
      width: 290px;
    }
  }

  .commentator {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 245px;
    height: 50px;
  }
}

.comms-container.layout-2p,
.comms-container.layout-3p {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  color: theme.$lcns-white;
  font-family: "Fusion";
  font-size: 14px;

  span {
    align-self: start;
  }

  position: absolute;
  top: 554px;
  right: -366px;
  width: 180px;
  height: 50px;
}
</style>
