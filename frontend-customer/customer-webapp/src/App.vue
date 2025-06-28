<template>
  <div class="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 bg-white min-h-screen pb-24">

  <div class="p-2">
    <!-- Search Bar -->
    <div class="mb-4">
      <input
        type="text"
        placeholder="Search everything creamy"
        class="w-full px-4 py-2 border rounded-full shadow-sm focus:outline-none"
      />
    </div>

    <!-- Beverages -->
    <div>
      <h2 class="text-lg font-semibold mb-2">Beverages</h2>
      <MenuItem
        v-for="item in beverages"
        :key="item.id"
        :item="item"
        @update-quantity="updateQuantity"
        class = "pt-3"
      />
    </div>

    <!-- Meals -->
    <div class="pt-2">
      <h2 class="text-lg font-semibold mb-2">Meals</h2>
      <MenuItem
        v-for="item in meals"
        :key="item.id"
        :item="item"
        @update-quantity="updateQuantity"
        class = "pt-3"
      />
    </div>

    <!-- Bottom Navigation -->
    <div class="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3">
      <button class="text-blue-500 font-bold">Menu</button>
      <button class="text-gray-500">Order</button>
    </div>
  </div>
</div>
</template>

<script setup>
import { reactive } from 'vue'
import MenuItem from './MenuItem.vue'

const beverages = reactive([
  {
    id: 1,
    name: 'Spanish Latte - Dot Coffee Special',
    description: 'A creamy fusion of bold espresso and sweet milk, crafted for smooth coffee lovers.',
    price: 265,
    quantity: 0
  },
  {
    id: 2,
    name: 'Caramel Macchiato – Yardstick Edition',
    description: 'Rich espresso layered with milk and golden caramel for that perfect sweet kick.',
    price: 265,
    quantity: 0
  }
])

const meals = reactive([
  {
    id: 3,
    name: 'Toka Burger',
    description: 'A juicy, double-stacked classic with melted cheese and all the fixings—made to satisfy any craving.',
    price: 381,
    quantity: 0
  },
  {
    id: 4,
    name: 'Macy’s Burger',
    description: 'Sweet, savory, and oh-so-cheesy. A comforting burger that hits every flavor note.',
    price: 358,
    quantity: 0
  }
])

function updateQuantity(id, amount) {
  const allItems = [...beverages, ...meals]
  const item = allItems.find(i => i.id === id)
  if (item) {
    item.quantity = Math.max(0, item.quantity + amount)
  }
}
</script>
