<script setup lang="ts">
import { Commentators } from '@licenseathon-vue/types/schemas';
import { useHead } from '@vueuse/head';
import { useReplicant } from 'nodecg-vue-composable';
import { ref } from 'vue';

const text = ref('Example');

// Set the title of this page.
useHead({ title: 'example' });

// Helper composable to make accessing/modifying replicants easier.
// For more information see https://github.com/Dan-Shields/nodecg-vue-composable
const commentators = useReplicant<Commentators>(
  'commentators',
  'licenseathon-vue',
);


</script>

<template>
  <div>
    {{ text }}
    <br><br>
    <img src="./image.png" :style="{ width: '100%' }">
  </div>
</template>
