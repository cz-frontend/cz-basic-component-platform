import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "normalize.css";
import { globalRegister } from "./global";

const app = createApp(App);

app.use(createPinia());
globalRegister(app);
app.use(router);

app.mount("#app");
