<script setup>
import { RouterLink, RouterView } from "vue-router";
import Menu from "./components/Menu.vue";
</script>

<template>
  <header class="gradient-blue">
    <Menu />

  </header>

  <RouterView />
</template>