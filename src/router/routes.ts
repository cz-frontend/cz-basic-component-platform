/**
 * 本地路由
 */
import AppLayout from "@/components/AppLayout/index.vue";

export const routes = [
  {
    path: "/appLayout",
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
    ],
  },
];
