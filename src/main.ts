import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./styles/index.scss";
import "normalize.css";
import CzUI from "./base-ui/index";
import { globalRegister } from "./global";

const app = createApp(App);

app.use(createPinia());
globalRegister(app);
app.use(router);
app.use(CzUI);

app.mount("#app");
