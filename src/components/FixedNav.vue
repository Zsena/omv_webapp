<template>
    <!-- fixed nav -->
    <nav class="fixed-nav">
        <ul class="fixed-navbar">
            <li class="nav-item">
                <RouterLink to="/">
                    <svg class="w-6 h-6 mb-2 mx-auto" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10Zm-2 2V9l8-6l8 6v12h-7v-6h-2v6Zm8-8.75Z" />
                    </svg>
                    Főoldal
                </RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/my-reservations">
                    <svg class="w-6 h-6 mb-2 mx-auto" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24a.71.71 0 0 0-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72z" />
                    </svg>
                    Foglalásaim
                </RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/">
                    <svg class="w-6 h-6 mb-2 mx-auto" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path fill="currentColor" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z" />
                    </svg>
                    Helyeim
                </RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/">
                    <svg class="w-6 h-6 mb-2 mx-auto" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22 5.5H9c-1.1 0-2 .9-2 2v9a2 2 0 0 0 2 2h13c1.11 0 2-.89 2-2v-9a2 2 0 0 0-2-2m0 11H9V9.17l6.5 3.33L22 9.17v7.33m-6.5-5.69L9 7.5h13l-6.5 3.31M5 16.5c0 .17.03.33.05.5H1c-.552 0-1-.45-1-1s.448-1 1-1h4v1.5M3 7h2.05c-.02.17-.05.33-.05.5V9H3c-.55 0-1-.45-1-1s.45-1 1-1m-2 5c0-.55.45-1 1-1h3v2H2c-.55 0-1-.45-1-1Z" />
                    </svg>
                    Üzenetek
                </RouterLink>
            </li>
            <li class="cursor-pointer nav-item dropdown-wrapper" @click="toggleDropdown">
                <span class="relative w-6 h-6 inline-block rounded-full" ref="dropdownRef">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 20q-.825 0-1.412-.587Q10 18.825 10 18q0-.825.588-1.413Q11.175 16 12 16t1.413.587Q14 17.175 14 18q0 .825-.587 1.413Q12.825 20 12 20Zm0-6q-.825 0-1.412-.588Q10 12.825 10 12t.588-1.413Q11.175 10 12 10t1.413.587Q14 11.175 14 12q0 .825-.587 1.412Q12.825 14 12 14Zm0-6q-.825 0-1.412-.588Q10 6.825 10 6t.588-1.412Q11.175 4 12 4t1.413.588Q14 5.175 14 6t-.587 1.412Q12.825 8 12 8Z" />
                    </svg>
                    <span class="dropdown absolute block w-40" :class="{active: dropdownActive}">
                        <ul class="my-3">
                            <li class="text-xs dropdown-item">Bejelentkezve, mint</li>
                            <li class="dropdown-item">
                                <RouterLink to="/" class="text-blue">Zsena</RouterLink>
                            </li>
                            <li class="dropdown-item">
                                <RouterLink to="/" class="flex items-center justify-end">
                                    <svg class="w-3 h-3 mr-2" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 4H6L8 17H18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <circle cx="7.5" cy="19.5" r="1.5" stroke="currentColor" stroke-width="2"></circle>
                                        <circle cx="16.5" cy="19.5" r="1.5" stroke="currentColor" stroke-width="2"></circle>
                                        <path d="M7 7H21L19 14H7" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path>
                                    </svg>
                                    Kosár
                                </RouterLink>
                            </li>
                            <hr class="my-2 text-green">
                            <li class="dropdown-item">
                                <RouterLink to="/">Profilom</RouterLink>
                            </li>
                            <li class="dropdown-item">
                                <RouterLink to="/">Számláim</RouterLink>
                            </li>
                            <hr class="my-2 text-green">
                            <li class="dropdown-item">
                                <RouterLink to="/">Segítség</RouterLink>
                            </li>
                            <li class="dropdown-item">
                                <RouterLink to="/">
                                    <svg class="fill-current w-3 h-3 text-zinc-500 inline-block mr-1" data-v-2619adf9="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sign-out-alt" role="img" viewBox="0 0 512 512">
                                        <path data-v-2619adf9="" fill="currentColor" d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"></path>
                                    </svg>
                                    Kijelentkezés
                                </RouterLink>
                            </li>
                        </ul>
                        <span class="relative flex justify-end">
                            <span class="dropdown-bottom"></span>
                        </span>
                    </span>
                </span>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        data: function() {
            return {
                dropdownActive: false
            };
        },
        methods: {
            toggleDropdown: function() {
                this.dropdownActive = !this.dropdownActive;
            },
            handleClickAway: function(e) {
                const ref = this.$refs["dropdownRef"];
                if (ref.contains(e.target)) {
                    this.dropdownActive = true;
                    return
                }
                this.dropdownActive = false;
                document.removeEventListener("click", this.handleClickAway)
            }
        },
        watch: {
            dropdownActive: function() {
                if (this.dropdownActive) {
                    document.addEventListener("click", this.handleClickAway);
                    return
                }

            }
        }
    };
</script>