import { createHead } from '@vueuse/head';
import { createApp } from 'vue';
import Credits from './pages/CreditsPage.vue';

const app = createApp(Credits);
const head = createHead();
app.use(head);
app.mount('#app');
