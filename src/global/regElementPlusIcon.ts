import type { ComponentOptions } from "vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

/**
 * 注册Element Plus Icon
 * 无需在页面中手动引入
 */
export const regElementPlusIcon = (app: ComponentOptions) => {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
};
