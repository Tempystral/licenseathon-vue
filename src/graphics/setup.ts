import { createHead } from '@vueuse/head';
import { createApp } from 'vue';
import SetupPage from './pages/SetupPage.vue';

const app = createApp(SetupPage);
const head = createHead();
app.use(head);
app.mount('#app');
