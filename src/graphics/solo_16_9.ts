import { create } from "@licenseathon-vue/browser-shared/template";
import ActiveRunPage from "./pages/ActiveRunPage.vue";

const app = create(ActiveRunPage, { players: 1, ratio: "16-9" });
