<template>
    <footer class="p-4 bg-gradient-to-tl from-light to-slate-400 shadow-2xl drop-shadow-2xl dark:bg-slate-800">
        <div class="container mx-auto md:flex md:items-center md:justify-between">

            <span class="text-xs text-gray-500 sm:text-center dark:text-gray-400">
                <RouterLink to="/" class="hover:underline">
                    <span>
                        <img alt="OMV logo" class="logo" src="@/assets/img/svg/omv-logo-header.svg" width="80" height="80" />
                    </span>
                    <span>OMV™ © 2023</span>
                </RouterLink>. MINDEN JOG FENNTARTVA
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <RouterLink to="/location-selector" class="mr-4 hover:underline md:mr-6">Helyszín választás</RouterLink>
                </li>
                <li>
                    <RouterLink to="/my-reservations" class="mr-4 hover:underline md:mr-6">Foglalásaim</RouterLink>
                </li>
                <li>
                    <RouterLink to="/my-rented-places" class="mr-4 hover:underline md:mr-6">Bérelt helyeim</RouterLink>
                </li>
                <li>
                    <RouterLink to="" class="mr-4 hover:underline md:mr-6">Adatkezelési</RouterLink>
                </li>
                <li>
                    <RouterLink to="" class="hover:underline">Segítség</RouterLink>
                </li>
            </ul>
        </div>
    </footer>
</template>