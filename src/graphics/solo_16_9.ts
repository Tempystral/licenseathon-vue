import { createHead } from '@vueuse/head';
import { createApp } from 'vue';
import ActiveRunPage from './pages/ActiveRunPage.vue';

const app = createApp(ActiveRunPage, { players: 1, ratio: '16-9' });
const head = createHead();
app.use(head);
app.mount('#app');
