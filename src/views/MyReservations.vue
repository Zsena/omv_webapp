<script>
import FixedNav from '../components/FixedNav.vue';
</script>

<template>
  <div class="flex items-center justify-center pt-20">
    <ul class="flex flex-col justify-center items-center">
      <li class="mb-10 w-full">
        <RouterLink to="/current-available-places" class="regular-filled-btn"
          >Aktuális szabad helyek</RouterLink
        >
      </li>
      <li class="mb-10 w-full">
        <RouterLink to="/" class="regular-filled-btn"
          >Előre foglalás</RouterLink
        >
      </li>
      <li class="mb-10 w-full">
        <RouterLink to="/" class="regular-filled-btn">Hely bérlés</RouterLink>
      </li>
    </ul>
  </div>
</template>
