import { createHead } from '@vueuse/head';
import { createApp } from 'vue';
import ActiveRunPage from './pages/ActiveRunPage.vue';

const app = createApp(ActiveRunPage, { players: 1, ratio: '4-3' });
const head = createHead();
app.use(head);
app.mount('#app');
