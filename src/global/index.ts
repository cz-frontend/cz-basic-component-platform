import type { ComponentOptions } from "vue";
import { regElementPlusIcon } from "./regElementPlusIcon";

/**
 * 全局注册方法
 */
export const globalRegister = (app: ComponentOptions) => {
  regElementPlusIcon(app);
};
