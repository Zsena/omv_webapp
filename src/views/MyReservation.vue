<script>
  import FixedNav from "../components/FixedNav.vue";
</script>
<template>
  <h1 class="h1-elem mx-auto text-center drop-shadow-xl shadow-black pt-20 pb-10">
    OMV
  </h1>
  <h2 class="h4-elem text-center pb-5">Budapest, Üllői út 137, 1091</h2>
  <img class="max-w-[400px] w-full mx-auto object-cover rounded-lg shadow-2xl" alt="Parking image" src="@/assets/img/omv.jpg">
  <div class="flex flex-col items-center justify-center pt-10">
    <ul class="flex flex-col justify-center items-center">
      <li class="mb-10 w-full">
        <RouterLink to="/current-available-places" class="regular-filled-btn">Aktuális szabad helyek</RouterLink>
      </li>
      <li class="mb-10 w-full">
        <RouterLink to="/" class="regular-filled-btn">Előre foglalás</RouterLink>
      </li>
      <li class="mb-10 w-full">
        <RouterLink to="/" class="regular-filled-btn">Hely bérlés</RouterLink>
      </li>
    </ul>
    <figure>
      <img class="max-w-[800px] w-full" src="@/assets/img/reservation.webp" alt="Reservation design" />
      <figcaption class="sr-only"><a href="https://www.freepik.com/free-vector/self-parking-car-system-abstract-concept-illustration_11667631.htm#query=parking%20reservation%20OMV&position=5&from_view=search&track=ais">Image by vectorjuice</a> on Freepik</figcaption>
    </figure>
  </div>
</template>