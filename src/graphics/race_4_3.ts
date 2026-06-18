import { create } from "@licenseathon-vue/browser-shared/template";
import RacePage from "./pages/RacePage.vue";

const app = create(RacePage, { numPlayers: 2, ratio: [4, 3] });
