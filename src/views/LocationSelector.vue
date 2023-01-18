<template>
    <section class="mx-auto container py-20">
        <h1 class="h1-elem mx-auto text-center drop-shadow-xl shadow-black pt-20 pb-10">
            Helyszín kiválasztása
        </h1>
        <aside class="flex flex-wrap justify-center">
            <div v-for="n in 9" class="max-w-sm rounded-sm overflow-hidden shadow-lg m-1">
                <div class="h-52 bg-cover">
                    <img class="max-w-[400px] w-full mx-auto object-cover rounded-xl shadow-2xl" alt="Parking image" src="@/assets/img/omv.jpg" />
                </div>
                <div class="mx-6 my-4 border-b border-gray-light">
                    <div class="font-medium text-base text-gray-darker mb-4">
                        OMV Budapest, Üllői út 137, 1091
                    </div>
                    <div class="font-normal text-gray-dark text-sm mb-2 flex items-center">
                        <span>Szabad helyek:</span>
                        <span class="font-bold text-lg ml-3">5db</span>
                    </div>
                </div>
                <div class="mx-6 my-4 flex items-center">
                    <div class="my-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48">
                            <g fill="none" stroke-linejoin="round" stroke-width="4">
                                <path fill="#1c99dc" stroke="#0c3a6f" d="M24 44C24 44 40 32 40 19C40 10.7157 32.8366 4 24 4C15.1634 4 8 10.7157 8 19C8 32 24 44 24 44Z" />
                                <path stroke="#fff" stroke-linecap="round" d="M21 14V30" />
                                <path fill="#1c99dc" stroke="#fff" d="M21 14H27C29.2091 14 31 15.7909 31 18C31 20.2091 29.2091 22 27 22H21V14Z" />
                            </g>
                        </svg>
                    </div>
                    <div class="font-normal text-gray-dark text-sm my-2">P1 parkoló</div>
                </div>
            </div>
            <RouterLink to="/my-reservation" class="stretched-link"></RouterLink>
        </aside>
    </section>
</template>