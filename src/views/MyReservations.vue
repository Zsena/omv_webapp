<template>
    <section class="mx-auto container py-20">
        <h1 class="h1-elem mx-auto text-center drop-shadow-xl shadow-black pb-10">
            Foglalásaim
        </h1>
        <div v-for="n in 5" class="flex flex-wrap justify-center">
            <!-- card -->
            <aside class="bg-gradient-to-bl from-blue to-gray-800 text-blue h-54 w-96 p-6 rounded-xl shadow-md m-2">
                <div class="h-full flex flex-col justify-between">
                    <div class="flex items-start justify-between space-x-4">
                        <div class="text-xl font-semibold tracking-tigh">Foglalás</div>
                        <RouterLink to="/my-reservation" class="text-right border-b border-white pb-1">
                            <div class="font-semibold text-white">OMV</div>
                            <div class="font-semibold text-white text-xs">
                                Budapest, Üllői út 137, 1091
                            </div>
                        </RouterLink>
                    </div>
                    <div class="flex items-center">
                        <div class="w-12 h-8 flex justify-center items-center bg-gradient-to-tl from-yellow-200 to-yellow-100 rounded-md shadow-inner overflow-hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 27 24">
                                <path fill="#00ACC1" d="M24 24H0V0h18.4v2.4h-16v19.2h20v-8.8h2.4V24zM4.48 11.58l1.807-1.807l5.422 5.422l13.68-13.68L27.2 3.318L11.709 18.809z" />
                            </svg>
                        </div>
                        <div class="text-lg font-semibold tracking-tigh ml-2">Aktív</div>
                    </div>
                    <div class="flex justify-center mt-3">
                        <div class="flex space-x-2 items-start bg-white shadow-2xl w-72 px-2 py-3 rounded-lg">
                            <div class="flex-1 inline-flex items-start justify-between">
                                <div class="flex flex-col">
                                    <div class="text-xs font-semibold tracking-tight">
                                        Aktív még:
                                    </div>
                                    <div>
                                        <span class="text-xs text-gray-400">17:15-től</span>
                                        <span class="text-xs text-gray-400 ml-2">17:45-ig</span>
                                    </div>
                                    <p class="text-xs text-gray-500 font-light">2023.01.27</p>
                                </div>
                                <p class="text-xs text-gray-500 font-light">
                                    Rendszám: LEGO-425
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            <!-- card -->
            <aside class="bg-gradient-to-bl from-blue to-slate-200 text-blue h-52 w-96 p-6 rounded-xl shadow-md m-2">
                <div class="h-full flex flex-col justify-between">
                    <div class="flex items-start justify-between space-x-4">
                        <div class="text-xl font-semibold tracking-tigh">Foglalás</div>

                        <div class="text-right">
                            <div class="font-semibold text-white">OMV</div>
                            <div class="font-semibold text-white text-xs">
                                Budapest, Üllői út 137, 1091
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <div class="w-12 h-8 flex justify-center items-center bg-gradient-to-tl from-yellow-200 to-yellow-100 rounded-md shadow-inner overflow-hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 27 24">
                                <path fill="#00ACC1" d="M24 24H0V0h18.4v2.4h-16v19.2h20v-8.8h2.4V24zM4.48 11.58l1.807-1.807l5.422 5.422l13.68-13.68L27.2 3.318L11.709 18.809z" />
                            </svg>
                        </div>
                        <div class="text-lg font-semibold tracking-tigh ml-2">Aktív</div>
                    </div>
                    <div class="flex justify-center mt-3">
                        <div class="flex space-x-2 items-start bg-white shadow-2xl w-72 px-2 py-3 rounded-lg">
                            <div class="flex-1 inline-flex items-start justify-between">
                                <div class="flex flex-col">
                                    <div class="text-xs font-semibold tracking-tight">
                                        Aktív még:
                                    </div>
                                    <div>
                                        <span class="text-xs text-gray-400">17:15-től</span>
                                        <span class="text-xs text-gray-400 ml-2">17:45-ig</span>
                                    </div>
                                    <p class="text-xs text-gray-500 font-light">2023.01.28</p>
                                </div>
                                <p class="text-xs text-gray-500 font-light">
                                    Rendszám: LEGO-425
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            <!-- card -->
            <aside class="bg-gradient-to-bl from-blue to-slate-200 text-blue h-52 w-96 p-6 rounded-xl shadow-md m-2">
                <div class="h-full flex flex-col justify-between">
                    <div class="flex items-start justify-between space-x-4">
                        <div class="text-xl font-semibold tracking-tigh">Foglalás</div>

                        <div class="text-right">
                            <div class="font-semibold text-white">OMV</div>
                            <div class="font-semibold text-white text-xs">
                                Budapest, Üllői út 137, 1091
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <div class="w-12 h-8 flex justify-center items-center bg-gradient-to-tl from-yellow-200 to-yellow-100 rounded-md shadow-inner overflow-hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" width="1em" height="1em" viewBox="0 0 48 48">
                                <circle cx="17" cy="17" r="14" fill="#00ACC1" />
                                <circle cx="17" cy="17" r="11" fill="#eee" />
                                <path d="M16 8h2v9h-2z" />
                                <path d="m22.655 20.954l-1.697 1.697l-4.808-4.807l1.697-1.697z" />
                                <circle cx="17" cy="17" r="2" />
                                <circle cx="17" cy="17" r="1" fill="#00ACC1" />
                                <path fill="#FFC107" d="m11.9 42l14.4-24.1c.8-1.3 2.7-1.3 3.4 0L44.1 42c.8 1.3-.2 3-1.7 3H13.6c-1.5 0-2.5-1.7-1.7-3z" />
                                <path fill="#263238" d="M26.4 39.9c0-.2 0-.4.1-.6s.2-.3.3-.5s.3-.2.5-.3s.4-.1.6-.1s.5 0 .7.1s.4.2.5.3s.2.3.3.5s.1.4.1.6s0 .4-.1.6s-.2.3-.3.5s-.3.2-.5.3s-.4.1-.7.1s-.5 0-.6-.1s-.4-.2-.5-.3s-.2-.3-.3-.5s-.1-.4-.1-.6zm2.8-3.1h-2.3l-.4-9.8h3l-.3 9.8z" />
                            </svg>
                        </div>
                        <div class="text-lg font-semibold tracking-tigh ml-2">Lejárt</div>
                    </div>
                    <div class="flex justify-center mt-3">
                        <div class="flex space-x-2 items-start bg-white shadow-2xl w-72 px-2 py-3 rounded-lg">
                            <div class="flex-1 inline-flex items-start justify-between">
                                <div class="flex flex-col">
                                    <div class="text-xs font-semibold tracking-tight">
                                        Lejárt ekkor:
                                    </div>
                                    <div>
                                        <span class="text-xs text-gray-400">17:15</span>
                                        <!-- <span class="text-xs text-gray-400 ml-2">17:45-ig</span> -->
                                    </div>
                                    <p class="text-xs text-gray-500 font-light">2023.01.04</p>
                                </div>
                                <p class="text-xs text-gray-500 font-light">
                                    Rendszám: LEGO-433
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    </section>
</template>