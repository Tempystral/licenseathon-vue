import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createHead } from '@vueuse/head';
import { createApp } from 'vue';
import ActiveRunPage from './pages/ActiveRunPage.vue';

library.add(faTwitch);
library.add(faGamepad);

const app = createApp(ActiveRunPage, { players: 3, ratio: '3-way' });
const head = createHead();
app.use(head);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
