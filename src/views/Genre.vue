<template>
    <div>
        <Navbar />
        <GenreList/>
    </div>
</template>

<script>
    import Navbar from "../components/Navbar.vue";
    import GenreList from '../components/GenreList.vue';
    import Footer from "../components/Footer.vue";
    export default {
        name: "Genre",
        components: {
            Navbar,
            GenreList,
            Footer,
        },
       

    };
</script>