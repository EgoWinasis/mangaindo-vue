<script setup>
    import Navbar from "../components/Navbar.vue";
    import Footer from "../components/Footer.vue";
</script>

<template>
    <div>
        <Navbar />

        <div class="container mx-auto px-5 py-20 min-h-screen">
            <div class="flex justify-between ">
                <div></div>
                <div
                    class="  max-w-2xl bg-white border border-gray-200 rounded-lg shadow ">

                    <img class="rounded-t-lg" src="/public/contact-bg.jpg"/>

                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 ">
                                MANGAINDO</h5>
                        </a>
                        <p class="mb-3 font-normal text-justify text-gray-700 ">Website ini merupakan
                            platform yang menyediakan akses mudah dan praktis untuk membaca komik online. Dengan ribuan
                            judul komik yang tersedia, pengguna dapat menikmati beragam genre dan cerita menarik dengan
                            hanya beberapa klik. Pengalaman membaca komik yang nyaman disajikan melalui tata letak yang
                            intuitif dan responsif, memungkinkan pengguna untuk merasakan keseruan komik secara penuh
                            tanpa
                            hambatan. Selain itu, website ini juga menawarkan fitur-fitur seperti penanda halaman,
                            daftar
                            komik favorit, serta opsi untuk berbagi dan memberi ulasan tentang komik kepada pengguna
                            lainnya. Dengan koleksi komik yang terus diperbarui dan kemudahan akses yang ditawarkan,
                            website
                            ini menjadi tempat ideal bagi para pecinta komik untuk mengeksplorasi dan menikmati berbagai
                            cerita menarik dalam bentuk visual yang menakjubkan.</p>

                    </div>
                </div>
                <div></div>
            </div>


        </div>



        <Footer />
    </div>
</template>

<script>
    export default {
        name: "About",
    };
</script>