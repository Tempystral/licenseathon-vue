import { createHead } from '@vueuse/head';
import { createApp } from 'vue';
import RunnerInfoPanel from './components/RunnerInfoPanel.vue';

const app = createApp(RunnerInfoPanel);
const head = createHead();
app.use(head);
app.mount('#app');
