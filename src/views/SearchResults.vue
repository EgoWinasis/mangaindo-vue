<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

</script>

<template>
    <div>
        <Navbar />
      <SearchContent :searchQuery="searchQuery" />
      <Footer />
    </div>
  </template>


 <script>
 import SearchContent from '../components/SearchContent.vue';
 
 export default {
   name: 'SearchResults',
   components: {
     SearchContent
   },
   computed: {
     searchQuery() {
       // Retrieve the search query from the URL parameters
       return this.$route.params.query || '';
     }
   }
 };
 </script>