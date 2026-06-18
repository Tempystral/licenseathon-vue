import { create } from "@licenseathon-vue/browser-shared/template.js";
import ThreeWay from "./pages/ThreeWay.vue";

const app = create(ThreeWay, { numPlayers: 3, ratio: [4, 3] });
