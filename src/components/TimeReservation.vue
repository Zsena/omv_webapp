<template>
    <section class="bg-zinc-100 mt-10">
        <div class="container mx-auto py-16 px-6">
            <h3 class="h4-elem mb-4">
                Válogass kedvedre szabad helyeink között
            </h3>
            <div class="bg-white rounded-lg shadow-lg mb-20">
                <div class="flex items-center justify-between py-2 px-6">
                    <div>
                        <span v-text="year" class="ml-1 text-lg text-blue font-normal"></span>.
                        <span v-text="day_names[month]" class="text-lg font-bold text-blue"></span>.
                    </div>
                    <div class="border border-green rounded-lg px-1 pt-1">
                        <button type="button" class="leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-zinc-200 p-1 items-center focus:outline-none" :class="{ 'cursor-not-allowed opacity-25': month === 0 }" :disabled="month === 0" @click="month--">
                            <svg class="h-6 w-6 text-green inline-flex leading-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <div class="border-r border-green inline-flex h-6"></div>
                        <button type="button" class="leading-none rounded-lg transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-zinc-200 p-1 focus:outline-none" :class="{ 'cursor-not-allowed opacity-25': month === 12 }" :disabled="month === 13" @click="month++">
                            <svg class="h-6 w-6 text-green inline-flex leading-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="-mx-1 -mb-1">
                    <div class="flex flex-wrap border-t border-green">
                        <div class="px-4 pt-2 relative h-full w-full">
                            <div class="mt-1 h-full pb-5 flex flex-wrap justify-center lg:justify-start">
                                <template v-for="stump in time_stump_busy">
                                    <div class="flex items-center justify-start m-2 rounded-lg border p-4 border-red-500 text-red-500 bg-light">
                                        <div v-text="stump" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"></div>
                                    </div>
                                </template>
                                <template v-for="stump in time_stump">
                                    <div class="flex items-center justify-start m-2 rounded-lg border p-4 border-blue text-blue bg-light">
                                        <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                                        <label for="link-checkbox" v-text="stump" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                                    </div>
                                </template>
                                <template v-for="stump in time_stump_busy">
                                    <div class="flex items-center justify-start m-2 rounded-lg border p-4 border-red-500 text-red-500 bg-light">
                                        <div v-text="stump" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"></div>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="my-10 w-full">
                <RouterLink to="/end-of-reservation" class="regular-filled-btn max-w-[300px] mx-auto">Foglalás véglegesítése</RouterLink>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                day_names: [
                    "Január 1",
                    "Január 2",
                    "Január 3",
                    "Január 4",
                    "Január 5",
                    "Január 6",
                    "Január 7",
                    "Január 8",
                    "Január 9",
                    "Január 10",
                    "Január 11",
                    "Január 12",
                    "Január 12",
                    "Január 13",
                ],
                time_stump: [
                    "08:00 - szabad hely ( 5db )",
                    "08:10 - szabad hely ( 3db )",
                    "08:20 - szabad hely ( 2db )",
                    "08:30 - szabad hely ( 4db )",
                    "08:40 - szabad hely ( 5db )",
                    "08:50 - szabad hely ( 5db )",
                    "09:00 - szabad hely ( 5db )",
                    "09:10 - szabad hely ( 5db )",
                    "09:20 - szabad hely ( 5db )",
                    "09:30 - szabad hely ( 5db )",
                    "09:40 - szabad hely ( 5db )",
                    "09:50 - szabad hely ( 5db )",
                    "08:00 - szabad hely ( 5db )",
                    "08:10 - szabad hely ( 5db )",
                    "08:20 - szabad hely ( 5db )",
                    "08:30 - szabad hely ( 5db )",
                    "08:40 - szabad hely ( 5db )",
                    "08:50 - szabad hely ( 5db )",
                    "09:00 - szabad hely ( 5db )",
                    "09:10 - szabad hely ( 5db )",
                    "09:20 - szabad hely ( 5db )",
                    "09:30 - szabad hely ( 5db )",
                    "09:40 - szabad hely ( 5db )",
                    "09:50 - szabad hely ( 5db )",
                    "08:00 - szabad hely ( 5db )",
                    "08:10 - szabad hely ( 5db )",
                    "08:20 - szabad hely ( 5db )",
                    "08:30 - szabad hely ( 5db )",
                    "08:40 - szabad hely ( 5db )",
                    "08:50 - szabad hely ( 5db )",
                    "09:00 - szabad hely ( 5db )",
                    "09:10 - szabad hely ( 5db )",
                    "09:20 - szabad hely ( 5db )",
                    "09:30 - szabad hely ( 5db )",
                    "09:40 - szabad hely ( 5db )",
                    "09:50 - szabad hely ( 5db )",
                ],

                time_stump_busy: [
                    "10:00 - foglalva",
                    "10:10 - foglalva",
                    "10:20 - foglalva",
                    "10:30 - foglalva",
                    "10:40 - foglalva",
                    "10:50 - foglalva",
                    "11:00 - foglalva",
                    "11:10 - foglalva",
                    "11:20 - foglalva",
                    "11:30 - foglalva",
                ],
                month: "",
                year: "",
                day: "",
            };
        },
        methods: {
            initDate() {
                let today = new Date();
                this.month = today.getMonth();
                this.year = today.getFullYear();
                this.day = 31;
            },

            isToday(date) {
                const today = new Date();
                const d = new Date(this.year, this.month, date);
                return today.toDateString() === d.toDateString() ? true : false;
            },
        },
        mounted() {
            this.initDate();
        },
    };
</script>