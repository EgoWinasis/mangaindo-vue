<script setup>
import Navbar from "../components/Navbar.vue";
import Carousel from "../components/Carousel.vue";
import MainContent from "../components/MainContent.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div>
    <Navbar />
    <Carousel />
    <MainContent />
    <Footer />
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
