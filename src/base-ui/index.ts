import type { App } from "vue";
import CzTable from "./CzTable";

const components = [CzTable];

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item);
    });
  },
};
