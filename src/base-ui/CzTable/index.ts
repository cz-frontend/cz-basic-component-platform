import type { App } from "vue";
import CzTable from "./src/index.vue";

export default {
  install(app: App) {
    app.component("cz-table", CzTable);
  },
};
