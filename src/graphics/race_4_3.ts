import { create } from "@licenseathon-vue/browser-shared/template";
import ActiveRunPage from "./pages/ActiveRunPage.vue";

const app = create(ActiveRunPage, { players: 2, ratio: "4-3" });
