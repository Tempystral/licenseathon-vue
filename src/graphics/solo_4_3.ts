import { create } from "@licenseathon-vue/browser-shared/template";
import ActiveRunPage from "./pages/ActiveRunPage.vue";
import { ASPECT_4_3 } from "./util/constants.js";

const app = create(ActiveRunPage, { players: 1, ratio: ASPECT_4_3 });
