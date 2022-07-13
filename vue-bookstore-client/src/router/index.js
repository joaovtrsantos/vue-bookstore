import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/book",
      name: "book",
      component: () => import("../views/BookView.vue"),
    },
  ],
});

export default router;
