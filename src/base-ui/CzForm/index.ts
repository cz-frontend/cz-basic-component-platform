import type { App } from "vue";
import CzForm from "./src/index.vue";

export default {
  install(app: App) {
    app.component("cz-form", CzForm);
  },
};
