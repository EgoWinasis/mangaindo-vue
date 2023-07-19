<template>
    <button class="page-up-button" :class="{ 'show-button': showButton }" @click="pageUp">
      <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
      </svg>
    </button>
  </template>
  
  <style>
  .page-up-button {
    position: fixed;
    bottom: 80px;
    right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #ffffff;
    border: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .show-button {
    opacity: 1;
  }
  
  .page-up-button:hover {
    background-color: #f2f2f2;
  }
  </style>
  
  <script>
  export default {
    name: 'PageUpButton',
    data() {
      return {
        showButton: false,
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPosition = window.pageYOffset;
  
        // Show the button when the user reaches the bottom 20% of the page
        this.showButton = scrollPosition > 0.8 * (documentHeight - windowHeight);
      },
      pageUp() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      },
    },
  };
  </script>
  