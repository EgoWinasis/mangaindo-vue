<script setup>
    import Pagination from "../components/Pagination.vue";
</script>

<template>
    <div class="container mx-auto px-2 py-10 min-h-screen">
        <div v-if="data == null || isJsonEmpty(data)">
            <div class="flex flex-wrap justify-center md:justify-between">
                <div v-for="n in 8" :key="n" class="w-full md:w-1/4 mb-4 md:mb-2">

                    <div role="status"
                        class="md:max-w-xs mx-2 p-4 md:p-6 border border-gray-200 rounded shadow animate-pulse ">
                        <div
                            class="flex items-center justify-center h-24 md:h-48 mb-2 bg-gray-300 rounded ">
                            <svg class="w-6 h-6 md:w-10 md:h-10 text-gray-200 " aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                <path
                                    d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                            </svg>
                        </div>
                        <div class="h-2 bg-gray-200 rounded-full  w-16 md:w-48 mb-2"></div>
                        <div class="h-2 bg-gray-200 rounded-full  mb-1.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full  mb-1.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full "></div>

                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </div>

        <div v-else>
            <div v-if="data.status == false">
                <div class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 "
                    role="alert">
                    <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span class="sr-only">Info</span>
                    <div>
                        <span class="font-medium">ERROR!</span> Can't get data from server, refresh the page!
                    </div>
                </div>
                <div class="flex flex-wrap justify-center md:justify-between">
                <div v-for="n in 8" :key="n" class="w-full md:w-1/4 mb-4 md:mb-2">

                    <div role="status"
                        class="md:max-w-xs mx-2 p-4 md:p-6 border border-gray-200 rounded shadow animate-pulse ">
                        <div
                            class="flex items-center justify-center h-24 md:h-48 mb-2 bg-gray-300 rounded ">
                            <svg class="w-6 h-6 md:w-10 md:h-10 text-gray-200 " aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                <path
                                    d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                            </svg>
                        </div>
                        <div class="h-2 bg-gray-200 rounded-full  w-16 md:w-48 mb-2"></div>
                        <div class="h-2 bg-gray-200 rounded-full  mb-1.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full  mb-1.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full "></div>

                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
            </div>
            <div v-if="data.status == true">

                <h3 class="text-2xl font-bold tracking-tight text-gray-900  text-center my-2">Popular
                    Manga
                </h3>
                <div class="flex flex-wrap justify-evenly">
                    <div v-for="item in data.manga_list" :key="item.title">
                        <div
                            class="md:max-w-xs  bg-white border border-gray-200 rounded-lg shadow   mx-1 my-2">
                            <div class="relative">
                                <img class="rounded-t-lg" :src="item.thumb" :alt="item.title" />
                                <span
                                    class="absolute top-2 right-2 bg-red-700 text-white text-xs px-2 py-1 rounded-md">{{ item.type }}</span>
                            </div>
                            <div class="p-5">

                                <h5
                                    class="mb-2 text-xl font-bold tracking-tight text-gray-900  text-ellipsis overflow-hidden">
                                    {{ item.title }}
                                </h5>

                                <div class="flex justify-between items-center">
                                    <router-link :to="`/detail/${item.endpoint}`"
                                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  ">
                                        Read more
                                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </router-link>
                                    <p class="text-gray-500 text-sm ">{{ item.upload_on }}</p>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

                <Pagination :currentPage="currentPage" :totalPages="totalPages" @page-selected="handlePageSelected" />
            </div>
        </div>

        <div v-if="error">
            <p>Error: {{ error }}</p>
        </div>
    </div>
</template>

<script>
    import axiosInstance from "../js/axiosInstance.js";

    export default {
        name: "MainContent",
        data() {
            return {
                data: null,
                error: null,
                currentPage: 1,
                totalPages: 4, // Update the total number of pages
            };
        },
        methods: {
            fetchData(page) {
                this.data = null;
                axiosInstance
                    .get(`/manga/popular/${page}`, {
                        responseType: "json",
                    })
                    .then((response) => {
                        this.data = response.data;

                    })
                    .catch((error) => {
                        this.error = error.message;

                    });

            },
            handlePageSelected(page) {
                this.currentPage = page;
                this.fetchData(page);
            },
            isJsonEmpty(json) {
                return Object.keys(json).length === 0;
            },
        },
        mounted() {
            this.fetchData(this.currentPage);
        },
    };
</script>