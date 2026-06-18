import { create } from "@licenseathon-vue/browser-shared/template";
import BlankPage from "./pages/BlankPage.vue";
import LayoutPage from "./pages/LayoutPage.vue";
import { ASPECT_16_9, ASPECT_4_3 } from "./util/constants.js";

const app = create(LayoutPage, { numPlayers: 1, ratio: ASPECT_4_3 });
