<template>
  <div class="w-full flex items-center justify-between base-border-bottom base-box-shadow">
    <RouterLink to="/"><img alt="OMV logo" class="logo" src="@/assets/img/omv-logo-header.svg" width="125" height="125" />
    </RouterLink>
    <nav class="main-nav">
      <ul class="main-navbar flex justify-between">
        <li class="nav-list">
          <RouterLink to="/" class="nav-link">Főoldal</RouterLink>
        </li>
        <li class="nav-list">
          <RouterLink to="/registration" class="nav-link">Regisztráció</RouterLink>
        </li>
        <li class="nav-list">
          <RouterLink to="/my-reservations" class="nav-link">Foglalásaim</RouterLink>
        </li>
        <li class="nav-list">
          <RouterLink to="/current-available-places" class="nav-link">Aktuális Szabad helyek</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>