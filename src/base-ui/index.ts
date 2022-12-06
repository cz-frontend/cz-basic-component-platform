import type { App } from "vue";
import CzForm from "./CzForm";
import CzTable from "./CzTable";

const components = [CzForm, CzTable];

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item);
    });
  },
};
