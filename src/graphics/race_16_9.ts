import { create } from "@licenseathon-vue/browser-shared/template";
import RacePage from "./pages/RacePage.vue";
import { ASPECT_4_3 } from "./util/constants.js";

const app = create(RacePage, { numPlayers: 2, ratio: ASPECT_4_3 });
