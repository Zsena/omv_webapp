import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Főoldal",
      component: HomeView,
    },
    {
      path: "/registration",
      name: "Regisztráció",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Registration.vue"),
    },
    {
      path: "/current-available-places",
      name: "Aktuális szabad helyek",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CurrentAvailablePlaces.vue"),
    },
    {
      path: "/my-reservations",
      name: "Foglalásaim",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/MyReservations.vue"),
    },
  ],
});

export default router;
