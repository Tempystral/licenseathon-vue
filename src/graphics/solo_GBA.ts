import { create } from "@licenseathon-vue/browser-shared/template";
import ActiveRunPage from "./pages/ActiveRunPage.vue";
import { ASPECT_3_2, Layout } from "./util/constants.js";

const app = create(ActiveRunPage, {
  players: 1,
  ratio: ASPECT_3_2,
  width: 80,
  layout: Layout.LAYOUT_HD,
});
