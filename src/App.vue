<script setup>
import { RouterLink, RouterView } from "vue-router";
import FixedNav from "./components/FixedNav.vue";
import BaseMenu from "./components/Menu.vue";
import StickyFooter from "./components/StickyFooter.vue";
// import MyReservations from "./views/MyReservations.vue";
</script>

<template>
  <header class="gradient-blue">
    <BaseMenu />
  </header>
  <RouterView />
  <FixedNav />
  <StickyFooter />
</template>
