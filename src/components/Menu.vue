<template>
  <nav class="main-nav">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
        <RouterLink to="/">
          <img alt="OMV logo" class="logo" src="@/assets/img/omv-logo-header.svg" width="125" height="125" />
        </RouterLink>
        <button class="mobile-menu" type="button" @click="toggleNav()">
          <img src="@/assets/img/ham_icon.svg" v-bind:class="{'hidden': showMenu, 'flex': !showMenu}" width="30" height="30" />
          <img src="@/assets/img/close.svg" v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" width="30" height="30" />
        </button>
      </div>
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
        <ul class="main-navbar">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/registration">
              <span class="ml-2">Regisztráció</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/my-reservations">
              <span class="ml-2">Foglalásaim</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/current-available-places">
              <span class="ml-2">Szabad helyek</span>
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