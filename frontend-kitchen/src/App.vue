<script setup lang="ts">
import Navbar from './components/navbar.vue'
import Cards from './components/cards.vue'
// You can also import a Footer if needed
</script>

<template>
  <div class="h-screen flex flex-col">
    <!-- Navbar at top -->
    <Navbar />

    <main class="flex-1 p-4 bg-gray-100 overflow-hidden">
      <div class="flex flex-row gap-10 h-full">
        <!-- Column 1 -->
        <div class="flex flex-col w-60 gap-2 overflow-y-auto no-scrollbar">
          <div class="bg-red-500 p-2 text-white">Red</div>
          <div class="bg-blue-500 p-2 text-white">Blue</div>
          <div class="bg-green-500 p-2 text-white">Green</div>
          <div class="bg-yellow-500 p-2 text-black">Yellow</div>
          <div class="bg-red-500 p-2 text-white">Red</div>
          <div class="bg-blue-500 p-2 text-white">Blue</div>
          <div class="bg-green-500 p-2 text-white">Green</div>
          <div class="bg-yellow-500 p-2 text-black">Yellow</div>
          <div class="bg-red-500 p-2 text-white">Red</div>
          <div class="bg-blue-500 p-2 text-white">Blue</div>
          <div class="bg-green-500 p-2 text-white">Green</div>
          <div class="bg-yellow-500 p-2 text-black">Yellow</div>
          <div class="bg-red-500 p-2 text-white">Red</div>
          <div class="bg-blue-500 p-2 text-white">Blue</div>
          <div class="bg-green-500 p-2 text-white">Green</div>
          <div class="bg-yellow-500 p-2 text-black">Yellow</div>
          <div class="bg-red-500 p-2 text-white">Red</div>
          <div class="bg-blue-500 p-2 text-white">Blue</div>
          <div class="bg-green-500 p-2 text-white">Green</div>
          <div class="bg-yellow-500 p-2 text-black">Yellow</div>
          <div class="bg-red-500 p-2 text-white">Red</div>
          <div class="bg-blue-500 p-2 text-white">Blue</div>
          <div class="bg-green-500 p-2 text-white">Green</div>
          <div class="bg-yellow-500 p-2 text-black">Yellow</div>
          <div class="bg-red-500 p-2 text-white">Red</div>
          <div class="bg-blue-500 p-2 text-white">Blue</div>
          <div class="bg-green-500 p-2 text-white">Green</div>
          <div class="bg-yellow-500 p-2 text-black">Yellow</div>
          <div class="bg-red-500 p-2 text-white">Red</div>
          <div class="bg-blue-500 p-2 text-white">Blue</div>
          <div class="bg-green-500 p-2 text-white">Green</div>
          <div class="bg-yellow-500 p-2 text-black">Yellow</div>
          <div class="bg-red-500 p-2 text-white">Red</div>
          <div class="bg-blue-500 p-2 text-white">Blue</div>
          <div class="bg-green-500 p-2 text-white">Green</div>
          <div class="bg-yellow-500 p-2 text-black">Yellow</div>
          <div class="bg-red-500 p-2 text-white">Red</div>
          <div class="bg-blue-500 p-2 text-white">Blue</div>
          <div class="bg-green-500 p-2 text-white">Green</div>
          <div class="bg-yellow-500 p-2 text-black">Yellow</div>
          <div class="bg-red-500 p-2 text-white">Red</div>
          <div class="bg-blue-500 p-2 text-white">Blue</div>
          <div class="bg-green-500 p-2 text-white">Green</div>
          <div class="bg-yellow-500 p-2 text-black">Yellow</div>
          <div class="bg-red-500 p-2 text-white">Red</div>
          <div class="bg-blue-500 p-2 text-white">Blue</div>
          <div class="bg-green-500 p-2 text-white">Green</div>
          <div class="bg-yellow-500 p-2 text-black">Yellow</div>
        </div>

        <!-- Column 2 -->
        <div class="flex flex-col w-60 gap-2 overflow-y-auto no-scrollbar">
          <div class="bg-red-500 p-2 text-white">Red</div>
          <div class="bg-blue-500 p-2 text-white">Blue</div>
          <div class="bg-green-500 p-2 text-white">Green</div>
          <div class="bg-yellow-500 p-2 text-black">Yellow</div>
          <div class="bg-red-500 p-2 text-white">Red</div>
          <div class="bg-blue-500 p-2 text-white">Blue</div>
          <div class="bg-green-500 p-2 text-white">Green</div>
          <div class="bg-yellow-500 p-2 text-black">Yellow</div>
          <div class="bg-red-500 p-2 text-white">Red</div>
          <div class="bg-blue-500 p-2 text-white">Blue</div>
          <div class="bg-green-500 p-2 text-white">Green</div>
          <div class="bg-yellow-500 p-2 text-black">Yellow</div>
        </div>

        <!-- Column 3 -->
        <div class="flex flex-col gap-2 overflow-y-auto no-scrollbar">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </main>

    <!-- Optional Footer -->
    <footer class="bg-blue-600 text-white text-center p-2">&copy; 2025 Creamy Creations</footer>
  </div>
</template>
