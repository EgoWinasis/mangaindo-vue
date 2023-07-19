<script setup>
    import SearchInput from './SearchInput.vue';
</script>

<template>
  <nav class="bg-white  border-b border-gray-200 ">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <router-link to="/" class="flex items-center">
        <img src="/public/apple-icon-60x60.png" class="w-10 mx-1">
        <span class="self-center text-2xl font-semibold whitespace-nowrap ">MANGAINDO</span>
      </router-link>
      <div class="flex md:order-2">
        <!-- Mobile Search Button -->
        <button type="button" @click="toggleMobileSearch" class="md:hidden text-gray-500  hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200  rounded-lg text-sm p-2.5 mr-1">
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
          <span class="sr-only">Search</span>
        </button>
        <!-- Desktop Search Input -->
        <div class="relative hidden md:block">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span class="sr-only">Search icon</span>
          </div>
          <SearchInput />
        </div>
        <!-- Mobile Menu Button -->
        <button type="button" @click="toggleMobileMenu" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  " aria-controls="navbar-search" :aria-expanded="isMobileMenuOpen">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
      <div :class="{ 'block': isMobileMenuOpen || isMobileSearchOpen, 'hidden md:flex': !(isMobileMenuOpen || isMobileSearchOpen) }" class="md:hidden mt-4 w-full" id="navbar-search">
        <SearchInput />
        <ul class="font-medium border-t border-gray-100 rounded-lg bg-gray-50 md:flex md:border-0 md:bg-white  ">
          <li>
            <router-link to="/" class="block py-2 pl-3 pr-4 rounded md:p-0"
              :class="{ 'text-blue-700': $route.path === '/' }" aria-current="page">Home</router-link>
          </li>

          <li>
            <router-link to="/genre"
              class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0"
              :class="{ 'text-blue-700': $route.path === '/genre' }">Genre</router-link>
          </li>
          <li>
            <router-link to="/about"
              class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0"
              :class="{ 'text-blue-700': $route.path === '/about' }">About</router-link>
          </li>
          <li>
            <router-link to="/contact"
              class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0"
              :class="{ 'text-blue-700': $route.path === '/contact' }">Contact</router-link>
          </li>
        </ul>
      </div>
      <ul
        class="hidden md:flex flex-col md:flex-row md:items-center md:space-x-8 p-4 md:p-0 mt-4 font-medium border-t border-gray-100 rounded-lg bg-gray-50 md:border-0 md:bg-white   ">
        <li>
          <router-link to="/" class="block py-2 pl-3 pr-4 rounded md:p-0"
            :class="{ 'text-blue-700': $route.path === '/' }" aria-current="page">Home</router-link>
        </li>

        <li>
          <router-link to="/genre" class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0"
            :class="{ 'text-blue-700': $route.path === '/genre' }">Genre</router-link>
        </li>
        <li>
          <router-link to="/about" class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0"
            :class="{ 'text-blue-700': $route.path === '/about' }">About</router-link>
        </li>
        <li>
          <router-link to="/contact"
            class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0"
            :class="{ 'text-blue-700': $route.path === '/contact' }">Contact</router-link>
        </li>
      </ul>

    </div>
  </nav>
</template>



<script >
export default {
  data() {
    return {
      isMobileMenuOpen: false,
      isMobileSearchOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      if (this.isMobileMenuOpen) {
        this.isMobileSearchOpen = false;
      }
    },
    toggleMobileSearch() {
      this.isMobileSearchOpen = !this.isMobileSearchOpen;
      if (this.isMobileSearchOpen) {
        this.isMobileMenuOpen = false;
      }
    },
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    isDesktop() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
  },
};
</script>