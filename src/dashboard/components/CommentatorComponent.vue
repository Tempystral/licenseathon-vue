<script setup lang="ts">
import { Commentators } from '@licenseathon-vue/types/schemas';
import { useHead } from '@vueuse/head';
import { useReplicant } from 'nodecg-vue-composable';
import { RunDataActiveRun } from 'speedcontrol-util/types';
import { watch } from 'vue';
import { defaultRunData } from '../../graphics/util/defaults';

// Set the title of this page.
useHead({ title: 'Commentators' });

const commentators = useReplicant<Commentators>(
  'commentators',
  'licenseathon-vue',
  { defaultValue: { names: ['', ''] } }
);

const activeRun = useReplicant<RunDataActiveRun>(
  'runDataActiveRun',
  'nodecg-speedcontrol',
  { defaultValue: defaultRunData }
);

watch(() => activeRun?.data, () => { commentators?.loadDefault(); commentators?.save(); });

</script>

<template>
  <div class="commentatorPanel container">
    <div class="field">
      <label class="label">
        <font-awesome-icon icon="fa-solid fa-user" class="icon"/>
        <span>Commentator 1: </span>
        <span class="commNameLabel">{{ commentators!.data!.names[0] }}</span>
      </label>
      <div class="control">
        <input class="input" type="text" v-model="commentators!.data!.names[0]" placeholder="Commentator Name">
      </div>
    </div>

    <div class="field">
      <label class="label">
        <font-awesome-icon icon="fa-solid fa-user" class="icon"/>
        <span>Commentator 2: </span>
        <span class="commNameLabel">{{ commentators!.data!.names[1] }}</span>
      </label>
      <div class="control">
        <input class="input" type="text" v-model="commentators!.data!.names[1]" placeholder="Commentator Name">
      </div>
    </div>

    <div id="buttonArray">
      <input type="button" class="button is-success" value="Submit" :disabled="!commentators!.changed" @click="commentators!.save()" />
      <input type="button" class="button is-danger" value="Reset" @click="commentators!.loadDefault(); commentators!.save()" />
    </div>
  </div>
</template>

<style lang="scss">
@use "../../sass/style";

html {
  background: unset;
}

.commentatorPanel {
  display: flex;
  flex-direction: column;
  #buttonArray {
    display: flex;
    flex-direction: row;
    input {
      margin-inline-end: .5em;
    }
  }

}

.commNameLabel {
  color: orange;
}

.field .label {
  color: white;
  .icon {
    height: 1rem;
  }
}

</style>
