import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "book",
      component: () => import("../views/BookView.vue"),
    },
    {
      path: "/category",
      name: "category",
      component: () => import("../views/CategoryView.vue"),
    },
    {
      path: "/publisher",
      name: "publisher",
      component: () => import("../views/PublisherView.vue"),
    },
    {
      path: "/author",
      name: "author",
      component: () => import("../views/AuthorView.vue"),
    },
    {
      path: "/cadBook",
      name: "cadBook",
      component: () => import("../components/book/CadBook.vue"),
      props: true,
    },
    {
      path: "/cadPublisher",
      name: "cadPublisher",
      component: () => import("../components/publisher/CadPublisher.vue"),
      props: true,
    },
  ],
});

export default router;
