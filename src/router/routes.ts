/**
 * 本地路由
 */
import AppLayout from "@/components/AppLayout/index.vue";

export const routes = [
  {
    path: "/",
    name: "AppLayout",
    component: AppLayout,
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "Index",
        meta: { title: "首页", keepalive: false },
        component: () => import("@/pages/index/index.vue"),
      },
      {
        path: "/table",
        name: "Table",
        meta: { title: "自定义表哥", keepalive: false },
        component: () => import("@/pages/example/table/index.vue"),
      },
    ],
  },
];
