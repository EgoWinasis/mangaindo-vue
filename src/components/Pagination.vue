<template>
  <div class="flex justify-center m-3">
    <nav aria-label="Page navigation">
      <ul class="flex items-center -space-x-px h-8 text-sm">
        <li>
          <a
            href="#"
            :class="[
              'flex',
              'items-center',
              'justify-center',
              'px-3',
              'h-8',
              'leading-tight',
              'text-gray-500',
              'bg-white',
              'border',
              'border-gray-300',
              'rounded-l-lg',
              'hover:bg-gray-100',
              'hover:text-gray-700',
              
              currentPage === 1 ? 'cursor-not-allowed opacity-50' : '',
            ]"
            @click="goToPage(currentPage - 1)"
          >
            <span class="sr-only">Previous</span>
            <svg
              class="w-2.5 h-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </a>
        </li>
        <li v-for="page in totalPages" :key="page">
          <a
            href="#"
            :class="[
              'flex',
              'items-center',
              'justify-center',
              'px-3',
              'h-8',
              'leading-tight',
              'text-black',
              'bg-white',
              'border',
              'border-gray-300',
              'hover:bg-gray-100',
              'hover:text-gray-700',
              
              currentPage === page ? 'bg-blue-600' : '',
            ]"
            @click="goToPage(page)"
          >
            {{ page }}
          </a>
        </li>
        <li>
          <a
            href="#"
            :class="[
              'flex',
              'items-center',
              'justify-center',
              'px-3',
              'h-8',
              'leading-tight',
              'text-gray-500',
              'bg-white',
              'border',
              'border-gray-300',
              'rounded-r-lg',
              'hover:bg-gray-100',
              'hover:text-gray-700',
              
              currentPage === totalPages ? 'cursor-not-allowed opacity-50' : '',
            ]"
            @click="goToPage(currentPage + 1)"
          >
            <span class="sr-only">Next</span>
            <svg
              class="w-2.5 h-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  methods: {
    goToPage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.$emit("page-selected", page);
      }
    },
  },
};
</script>
