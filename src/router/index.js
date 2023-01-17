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
      component: () => import("../views/Registration.vue"),
    },
    {
      path: "/current-available-places",
      name: "Aktuális szabad helyek",
      component: () => import("../views/CurrentAvailablePlaces.vue"),
    },
    {
      path: "/my-reservation",
      name: "OMV üllői  ",
      component: () => import("../views/MyReservation.vue"),
    },
    {
      path: "/my-reservations",
      name: "OMV üllői",
      component: () => import("../views/MyReservations.vue"),
    },
    {
      path: "/end-of-reservation",
      name: "Foglalás véglegesítése",
      component: () => import("../views/EndOfReservation.vue"),
    },
    {
      path: "/location-selector",
      name: "Helyszín választó",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/LocationSelector.vue"),
    },
  ],
});

export default router;
