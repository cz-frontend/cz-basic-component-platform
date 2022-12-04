/**
 * 本地路由
 */
export const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    name: "Index",
    meta: { title: "首页", keepalive: false },
    component: () => import("@/pages/index/index.vue"),
  },
];
