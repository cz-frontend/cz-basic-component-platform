import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "normalize.css";
// 全局注册自定义组件
import CzUI from "./base-ui/index";
// 全局注册自定义方法
import { globalRegister } from "./global";

const app = createApp(App);

app.use(createPinia());
globalRegister(app);
app.use(router);
app.use(CzUI);

app.mount("#app");
