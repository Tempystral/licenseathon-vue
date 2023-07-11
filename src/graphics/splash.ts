import { createHead } from '@vueuse/head';
import { createApp } from 'vue';
import SplashPage from './pages/SplashPage.vue';

const app = createApp(SplashPage);
const head = createHead();
app.use(head);
app.mount('#app');
