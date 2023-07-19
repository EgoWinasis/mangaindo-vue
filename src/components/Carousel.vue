<template>
    <div class="container mx-auto mt-3 py-10 border-b-2">

        <div v-if="data == null || isJsonEmpty(data)">
            <div class="flex flex-no-wrap justify-evenly">

                <div v-for="n in 4" :key="n">

                    <div class="carousel-container">
                        <!-- Skeleton Loading Animation -->
                        <div
                            class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 ">
                            <div
                                class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded ">
                                <svg class="w-10 h-10 text-gray-200 " aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                    <path
                                        d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                </svg>
                            </div>
                            <div class="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
                            <div class="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                            <div class="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                            <div class="h-2 bg-gray-200 rounded-full "></div>

                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-else>
            <div v-if="data.status == false  ">
                <div class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50  "
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
                <div class="flex flex-no-wrap justify-evenly">

                    <div v-for="n in 4" :key="n">

                        <div class="carousel-container">
                            <!-- Skeleton Loading Animation -->
                            <div
                                class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 ">
                                <div
                                    class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded ">
                                    <svg class="w-10 h-10 text-gray-200 " aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                        <path
                                            d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                        <path
                                            d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                    </svg>
                                </div>
                                <div class="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
                                <div class="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                                <div class="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                                <div class="h-2 bg-gray-200 rounded-full "></div>

                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="data.status == true">

                <div class="carousel-container">
                    <div class="carousel-wrapper" ref="carouselWrapper">
                        <div class="carousel-items"
                            :style="{ transform: `translateX(${-currentSlide * slideWidth}px)` }">
                            <div v-for="(item, index) in visibleItems" :key="index"
                                class="carousel-item hover:cursor-pointer">
                                <router-link :to="`/detail/${item.endpoint}`">
                                    <div
                                        class="max-w-md bg-white border border-gray-200 rounded-lg shadow  mx-1 my-2">
                                        <div class="relative w-full">
                                            <img class="rounded-lg" :src="item.thumb" :alt="item.title" />
                                            <div class="card-title">{{ item.title }}</div>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                        <div class="carousel-controls">
                            <button class="carousel-control-left" @click="previousSlide" :disabled="currentSlide === 0">
                                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M15 18l-6-6 6-6"></path>
                                </svg>
                            </button>
                            <button class="carousel-control-right" @click="nextSlide"
                                :disabled="currentSlide === (data.manga_list.length - 1) - visibleItemsCount + 1">
                                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M9 18l6-6-6-6"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div v-if="error">
                    <p>Error: {{ error }}</p>
                </div>
            </div>
        </div>



    </div>
</template>

<script>
    import axiosInstance from "../js/axiosInstance.js";

    export default {
        name: "Carousel",
        data() {
            return {
                data: null,
                error: null,
                currentSlide: 0,
                slideWidth: 0,
                visibleItemsCount: 4,
            };
        },
        mounted() {
            this.fetchData();
            this.$nextTick(() => {
                if (this.$refs.carouselWrapper) {
                    this.slideWidth = this.$refs.carouselWrapper.offsetWidth;
                }
            });
            window.addEventListener("resize", this.handleResize);
        },
        beforeUnmount() {
            window.removeEventListener("resize", this.handleResize);
        },
        methods: {
            fetchData() {
                axiosInstance
                    .get("/recommended/", {
                        responseType: "json",
                    })
                    .then((response) => {
                        this.data = response.data;
                       
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            },
            previousSlide() {
                if (this.currentSlide > 0) {
                    this.currentSlide--;
                }
            },
            nextSlide() {
                if (this.currentSlide < this.data.manga_list.length - 1) {
                    this.currentSlide++;
                }
            },
            handleResize() {
                if (this.$refs.carouselWrapper) {
                    this.slideWidth = this.$refs.carouselWrapper.offsetWidth;
                }
            },
            isJsonEmpty(json) {
                return Object.keys(json).length === 0;
            },
        },
        computed: {
            visibleItems() {
                return this.data && this.data.manga_list ?
                    this.data.manga_list.slice(
                        this.currentSlide,
                        this.currentSlide + this.visibleItemsCount
                    ) : [];
            },
        },
    };
</script>

<style>
    .container {
        max-width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .carousel-container {
        width: 100%;
        overflow: hidden;
        position: relative;
    }

    .carousel-wrapper {
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
    }

    .carousel-items {
        display: flex;
    }

    .carousel-item {
        flex: 0 0 auto;
        width: 25%;
        /* Adjust this value based on your needs */
        scroll-snap-align: start;
        position: relative;
    }

    .carousel-controls {
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        transform: translateY(-50%);
        z-index: 1;
    }

    .carousel-control-left,
    .carousel-control-right {
        padding: 0.5rem;
        background-color: #000000;
        color: #ffffff;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0.5;
        transition: opacity 0.3s ease-in-out;
    }

    .carousel-control-left:hover,
    .carousel-control-right:hover {
        opacity: 1;
    }

    .carousel-control-left[disabled],
    .carousel-control-right[disabled] {
        cursor: not-allowed;
        opacity: 0.3;
    }

    .carousel-control-left svg,
    .carousel-control-right svg {
        display: block;
    }

    .card-title {
        position: absolute;
        top: 0.5rem;
        left: 0.5rem;
        padding: 0.25rem;
        background-color: rgba(0, 0, 0, 0.6);
        color: #ffffff;
        font-size: 12px;
        font-weight: bold;
    }

    @media (max-width: 640px) {
        .carousel-container {
            width: 100%;
            overflow: hidden;
            position: relative;
        }

        .carousel-wrapper {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
        }

        .carousel-item {
            flex: 0 0 auto;
            width: 50%;
            /* Adjust this value based on your needs */
            scroll-snap-align: start;
        }
    }
</style>