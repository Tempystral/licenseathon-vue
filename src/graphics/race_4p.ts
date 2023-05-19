import { createHead } from '@vueuse/head';
import { createApp } from 'vue';
import ActiveRunPage from './pages/ActiveRunPage.vue';

const app = createApp(ActiveRunPage);
const head = createHead();
app.use(head);
app.mount('#app');
