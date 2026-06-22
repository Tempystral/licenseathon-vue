import { create } from "@licenseathon-vue/browser-shared/template";
import ActiveRunPage from "./pages/ActiveRunPage.vue";
import { ASPECT_16_9 } from "./util/constants.js";

const app = create(ActiveRunPage, { players: 1, ratio: ASPECT_16_9 });
