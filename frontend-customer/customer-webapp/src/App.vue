<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <!-- Navbar -->
    <nav class="bg-white shadow px-6 py-4 sticky top-0 z-50">
      <ul class="flex gap-6 font-semibold text-gray-700">
        <li><a href="#" class="hover:text-green-600">Home</a></li>
        <li><a href="#" class="hover:text-green-600">Burgers</a></li>
        <li><a href="#" class="hover:text-green-600">Drinks</a></li>
        <li><a href="#" class="hover:text-green-600">Sides</a></li>
      </ul>
    </nav>

    <!-- Main Body -->
    <main class="flex-grow p-6">
      <h1 class="text-2xl font-bold mb-4">🍔 Welcome to FastFood Kiosk</h1>
      <p class="text-gray-600">This is your body content area. Add categories, cart, etc. here.</p>
    </main>

    <!-- Footer -->
    <footer class="bg-ccbeige shadow px-6 py-4 text-center text-sm border-t border-gray-300">
      <div
        class="flex justify-between items-center text-gray-800 max-w-md mx-auto px-16 min-w-full"
      >
        <!-- Left: Menu -->
        <button
          @click="select('menu')"
          class="flex flex-col items-center focus:outline-none"
          :class="{ 'text-ccpink': selected === 'menu' }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            :stroke="selected === 'menu' ? '#FFB6C1' : 'currentColor'"
            stroke-width="1.5"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <span class="text-xs mt-1"> Menu </span>
        </button>

        <!-- Right: Cart -->
        <button
          @click="select('order')"
          class="flex flex-col items-center focus:outline-none"
          :class="{ 'text-ccpink': selected === 'order' }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            :stroke="selected === 'order' ? '#FFB6C1' : 'currentColor'"
            :class="['w-6 h-6']"
          >
            <path
              d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
            />
          </svg>
          <span class="text-xs mt-1"> Order </span>
        </button>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selected = ref(null)

function select(option) {
  selected.value = option
  console.log('Selected:', selected.value)
}
</script>
