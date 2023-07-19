<script setup>
    import Navbar from "../components/Navbar.vue";
    import PageUpButton from "../components/PageUpButton.vue";
    import Footer from "../components/Footer.vue";
</script>

<template>
    <div>
        <Navbar />

        <div class="container mx-auto px-5 py-10 flex justify-center">

            <div v-if="data == null || isJsonEmpty(data)" class="max-w-3/4  h-screen md:w-3/4 flex justify-center">

                <svg class="w-1/4 text-gray-200  animate-pulse" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path
                        d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>



            </div>

            <div v-else class="max-w-3/4 md:w-3/4">
                <div v-if="data.status == false" class="max-w-3/4  h-screen md:w-3/4 flex justify-center">

                    <svg class="w-1/4 text-gray-200  animate-pulse" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                        <path
                            d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    </svg>



                </div>

                <div v-if="data">

                    <div class="text-3xl font-bold  text-center bg-gray-100">
                        <div class="px-4 pt-4 bg-gray-400 w-20 h-20 rounded-br-full">
                            <a @click="$router.go(-1)" class="hover:cursor-pointer">
                                <svg class="w-8 h-8 text-white  transform scale-x-[-1]"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 19 17">
                                    <path
                                        d="M2.057 6.9a8.718 8.718 0 0 1 6.41-3.62v-1.2A2.064 2.064 0 0 1 9.626.2a1.979 1.979 0 0 1 2.1.23l5.481 4.308a2.107 2.107 0 0 1 0 3.3l-5.479 4.308a1.977 1.977 0 0 1-2.1.228 2.063 2.063 0 0 1-1.158-1.876v-.942c-5.32 1.284-6.2 5.25-6.238 5.44a1 1 0 0 1-.921.807h-.06a1 1 0 0 1-.953-.7A10.24 10.24 0 0 1 2.057 6.9Z" />
                                </svg>
                            </a>

                        </div>
                        <div class="p-3">
                            <span>{{ data.title }}</span>
                        </div>
                    </div>
                    <div v-for="item in data.chapter_image" :key="item.image_number"
                        class="flex justify-center g-white border-x-2 border-gray-200 shadow">

                        <img :src="item.chapter_image_link" class="w-full" />

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

    export default {
        name: "Chapter",
        data() {
            return {
                data: null,
                error: null,
            };
        },
        mounted() {
            const endpoint = this.$route.params.endpoint; // Get the dynamic segment from the URL
            axiosInstance
                .get(`/chapter/${endpoint}`, {
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
        }
    };
</script>