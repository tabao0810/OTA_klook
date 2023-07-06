import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/home",
    alias: "/",
    meta: {
      layout: "default-layout",
    },
    component: () => import("@/views/HomePage/HomePage.vue"),
  },
  {
    path: "/city",
    meta: {
      layout: "default-layout",
    },
    component: () => import("@/views/CityPage/CityPage.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
export default router;
