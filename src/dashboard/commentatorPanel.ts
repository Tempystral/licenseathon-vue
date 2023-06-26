import { library } from '@fortawesome/fontawesome-svg-core';
import { createHead } from '@vueuse/head';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue';
import Commentators from './example/CommentatorComponent.vue';

library.add(faUser);

const app = createApp(Commentators);
app.use(createHead());
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
