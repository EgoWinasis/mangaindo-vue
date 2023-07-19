<script setup>
    import Navbar from "../components/Navbar.vue";
    import PageUpButton from "../components/PageUpButton.vue"
    import Footer from "../components/Footer.vue";
</script>

<template>
    <div>
        <Navbar />

        <div class="container mx-auto px-6 py-10 min-h-screen">
            <div v-if="data == null || isJsonEmpty(data)">
                <div class="flex justify-center">
                    <div role="status"
                        class="w-full md:w-2/3 max-w-2/3 bg-white border border-gray-200 rounded-lg shadow">

                        <div class="text-justify p-5 font-bold tracking-tight text-gray-900 ">

                            <div class="h-2.5 bg-gray-200 rounded-full  w-48 mb-4 animate-pulse"></div>
                            <div class="h-2 bg-gray-200 rounded-full  mb-2.5 animate-pulse"></div>
                            <div class="h-2 bg-gray-200 rounded-full  mb-2.5 animate-pulse"></div>
                            <div class="h-2 bg-gray-200 rounded-full  mb-2.5 animate-pulse"></div>
                            <div class="h-2 bg-gray-200 rounded-full  animate-pulse"></div>

                        </div>
                        <div class="flex flex-col items-center px-5 md:flex-row">
                            <div
                                class="flex items-center justify-center h-40 md:h-60 w-48 md:w-56 mb-4 object-cover bg-gray-300 rounded ">
                                <svg class="w-8 h-8 md:w-10 md:h-10 text-gray-200 " aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                    <path
                                        d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                </svg>
                            </div>
                            <div class="p-4 w-full">
                                <div class="relative overflow-x-auto">

                                    <div class="h-6 bg-gray-200  mb-2.5 animate-pulse"></div>
                                    <div class="h-6 bg-gray-200  mb-2.5 animate-pulse"></div>
                                    <div class="h-6 bg-gray-200  mb-2.5 animate-pulse"></div>
                                    <div class="h-6 bg-gray-200  animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap justify-start p-5">
                            <div v-for="n in 4" :key="n" class="text-sm py-2 px-3 m-2 rounded-md font-semibold">
                                <div class="h-6 w-20 md:w-32 bg-gray-200 rounded  animate-pulse"></div>
                            </div>
                        </div>

                        <div class="flex justify-center font-extrabold text-lg m-2">
                            <div class="h-6 w-20 md:w-28 bg-gray-200  mb-2.5 animate-pulse"></div>
                        </div>

                        <div class="flex flex-wrap justify-around p-5">
                            <div v-for="n in 8" :key="n" class="text-sm py-2 px-3 m-2 rounded-md font-semibold">
                                <div class="h-6 w-20 md:w-32 bg-gray-200 rounded  animate-pulse"></div>
                            </div>
                        </div>
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>

            </div>

            <div v-else>

                <div v-if="data">
                    <div class="flex justify-center">
                        <div class="w-full max-w-2xl bg-white border border-gray-200 rounded-lg shadow">

                            <div class="px-4 pt-4 bg-gray-400 w-16 h-16 rounded-br-full">
                                <a @click="$router.go(-1)" class="hover:cursor-pointer">
                                    <svg class="w-6 h-6 text-white  transform scale-x-[-1]"
                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        viewBox="0 0 19 17">
                                        <path
                                            d="M2.057 6.9a8.718 8.718 0 0 1 6.41-3.62v-1.2A2.064 2.064 0 0 1 9.626.2a1.979 1.979 0 0 1 2.1.23l5.481 4.308a2.107 2.107 0 0 1 0 3.3l-5.479 4.308a1.977 1.977 0 0 1-2.1.228 2.063 2.063 0 0 1-1.158-1.876v-.942c-5.32 1.284-6.2 5.25-6.238 5.44a1 1 0 0 1-.921.807h-.06a1 1 0 0 1-.953-.7A10.24 10.24 0 0 1 2.057 6.9Z" />
                                    </svg>
                                </a>

                            </div>

                            <div class="mb-4 text-justify p-5 font-bold tracking-tight text-gray-900 ">
                                <h2 class="text-2xl my-3 text-blue-700">{{ data.title }}</h2>
                                <h2 class="text-xl pb-2">Sinopsis</h2>
                                <p class="mb-3 font-normal text-gray-700 ">
                                    {{ data.synopsis }}
                                </p>
                            </div>

                            <div class="flex flex-col items-center px-5 md:flex-row">
                                <img class="object-cover border-2 border-gray-200 w-full md:w-56 xs:h-60 md:h-72 rounded-md"
                                    :src="data.thumb" :alt="data.title" />
                                <div class="p-4 w-full">

                                    <div class="relative overflow-x-auto ">
                                        <table class="w-full text-sm text-left text-gray-500 ">

                                            <tbody>
                                                <tr class="bg-white ">
                                                    <th scope="row"
                                                        class="p-4 font-medium bg-gray-200 text-gray-900 whitespace-nowrap ">
                                                        Judul
                                                    </th>
                                                    <td class="p-4 border-2 border-gray-100">
                                                        {{ data.title }}
                                                    </td>

                                                </tr>
                                                <tr class="bg-white ">
                                                    <th scope="row"
                                                        class="p-4 font-medium bg-gray-200 text-gray-900 whitespace-nowrap ">
                                                        Tipe
                                                    </th>
                                                    <td class="p-4 border-2 border-gray-100">
                                                        {{ data.type }}
                                                    </td>

                                                </tr>
                                                <tr class="bg-white ">
                                                    <th scope="row"
                                                        class="p-4 font-medium bg-gray-200 text-gray-900 whitespace-nowrap ">
                                                        Author
                                                    </th>
                                                    <td class="p-4 border-2 border-gray-100">
                                                        {{ data.author }}
                                                    </td>

                                                </tr>
                                                <tr class="bg-white ">
                                                    <th scope="row"
                                                        class="p-4 font-medium bg-gray-200 text-gray-900 whitespace-nowrap ">
                                                        Status
                                                    </th>
                                                    <td class="p-4 border-2 border-gray-100">
                                                        {{ data.status }}
                                                    </td>

                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>

                            <div class="flex flex-wrap justify-start p-5">
                                <div v-for="genre in data.genre_list" :key="genre.genre_name">
                                    <div class=" text-sm bg-blue-200 py-2 px-3 m-2 rounded-md font-semibold">
                                        {{ genre.genre_name }}
                                    </div>
                                </div>
                            </div>

                            <div class="text-center font-extrabold text-lg m-2">
                                <span class="border-b-2 border-black p-2">DAFTAR CHAPTER</span>
                            </div>

                            <div class="flex flex-wrap justify-around p-5">
                                <div v-for="chapter in data.chapter" :key="chapter.chapter_endpoint">
                                    <div class="text-sm bg-gray-200 py-2 px-3 m-2 rounded-xl font-semibold">
                                        <router-link :to="`/chapter/${chapter.chapter_endpoint}`">
                                            {{ chapter.chapter_title }}
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="error">
                        <p>Error: {{ error }}</p>
                    </div>

                    <PageUpButton />
                </div>

            </div>


        </div>

        

        <Footer />
    </div>
</template>

<script>
    import axiosInstance from "../js/axiosInstance.js";
import PageUpButtonVue from '../components/PageUpButton.vue';

    export default {
        name: "MainContent",
        data() {
            return {
                data: null,
                error: null,
            };
        },
        mounted() {
            const endpoint = this.$route.params.endpoint; // Get the dynamic segment from the URL
            axiosInstance
                .get(`/manga/detail/${endpoint}`, {
                    responseType: 'json'
                })
                .then((response) => {
                    this.data = response.data;
                    
                })
                .catch((error) => {
                    this.error = error;

                });
        },
        methods: {
            isJsonEmpty(json) {
                 return Object.keys(json).length === 0;
            }
        },
    };
</script>