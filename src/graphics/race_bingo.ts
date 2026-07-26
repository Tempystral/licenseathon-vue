import { create } from "@licenseathon-vue/browser-shared/template.js";
import ThreeWay from "./pages/ThreeWay.vue";
import { ASPECT_4_3 } from "./util/constants.js";

const app = create(ThreeWay, {
  numPlayers: 3,
  ratio: ASPECT_4_3,
  options: { bingo: true },
});
