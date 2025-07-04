<script setup lang="ts">
import Navbar from './components/navbar.vue'
import Cards from './components/cards.vue'
import orders from './assets/mock-data.json'
// You can also import a Footer if needed
</script>

<template>
  <div class="h-screen flex flex-col">
    <!-- Navbar at top -->
    <Navbar />

    <main class="flex-1 p-4 bg-gray-100 overflow-hidden">
      <div class="flex flex-row gap-10 h-full">
        <!-- Column 1 -->
        <div class="flex flex-col gap-5 overflow-y-auto no-scrollbar">
          <Cards
            v-for="order in orders"
            :key="order.tableNumber"
            :tableNumber="order.tableNumber"
            :timestamp="order.timestamp"
            :orders="order.orders"
          />
        </div>
      </div>
    </main>

    <!-- Optional Footer -->
    <footer class="bg-blue-600 text-white text-center p-2">&copy; vibecodersclub</footer>
  </div>
</template>
