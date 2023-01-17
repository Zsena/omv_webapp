<template>
  <nav class="main-nav">
    <div class="container mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <RouterLink to="/">
          <img alt="OMV logo" class="logo" src="@/assets/img/svg/omv-logo-header.svg" width="125" height="125" />
        </RouterLink>
        <button class="mobile-menu" type="button" @click="toggleNav()">
          <img src="@/assets/img/svg/ham_icon.svg" v-bind:class="{'hidden': showMenu, 'flex': !showMenu}" width="30" height="30" />
          <img src="@/assets/img/svg/close.svg" v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" width="30" height="30" />
        </button>
      </div>
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
        <ul class="main-navbar">
          <!-- <li class="nav-item">
            <RouterLink class="nav-link" to="/registration">
              <span><img src="@/assets/img/svg/login.svg" alt="svg"></span> <span class="ml-2">Regisztráció</span>
            </RouterLink>
          </li> -->
          <li class="nav-item">
            <RouterLink class="nav-link" to="/location-selector">
              <span><img src="@/assets/img/svg/reservation.svg" alt="svg"></span><span class="ml-2">Helyszín választó</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/my-reservations">
              <span><img src="@/assets/img/svg/reservation.svg" alt="svg"></span><span class="ml-2">Foglalásaim</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">
              <span><img src="@/assets/img/svg/place.svg" alt="svg"></span><span class="ml-2">Bérelt helyeim</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script>
  export default {
    data() {
      return {
        showMenu: false
      }
    },
    methods: {
      toggleNav: function() {
        this.showMenu = !this.showMenu;
      }
    }
  }
</script>