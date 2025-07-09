<script setup lang="ts">
import { ref, computed } from 'vue'
import Navbar from './components/navbar.vue'
import Cards from './components/cards.vue'
import mockData from './assets/mock-data.json'
import type { Order } from './types'

// Add a default status to the mock data and a unique id
const orders = ref<Order[]>(
  mockData.map((order, index) => ({
    ...order,
    id: order.tableNumber + index, // simple unique id
    status: 'New', // default status
  })),
)

const groupedOrders = computed(() => {
  return orders.value.reduce(
    (acc, order) => {
      const status = order.status || 'New'
      if (!acc[status]) {
        acc[status] = []
      }
      acc[status].push(order)
      return acc
    },
    {} as Record<string, Order[]>,
  )
})

const newOrdersCount = computed(() => groupedOrders.value['New']?.length || 0)
const inProgressOrdersCount = computed(() => groupedOrders.value['In Progress']?.length || 0)
const readyOrdersCount = computed(() => groupedOrders.value['Ready']?.length || 0)
const servedOrdersCount = computed(() => groupedOrders.value['Served']?.length || 0)

const orderStatuses = ['New', 'In Progress', 'Ready', 'Served']

const handleStartOrder = (orderId: number) => {
  const order = orders.value.find((o) => o.id === orderId)
  if (order) {
    order.status = 'In Progress'
  }
}

const handleFinishOrder = (orderId: number) => {
  const order = orders.value.find((o) => o.id === orderId)
  if (order) {
    order.status = 'Ready'
    order.readyAt = new Date().toISOString()
  }
}

const handleUndoOrder = (orderId: number) => {
  const order = orders.value.find((o) => o.id === orderId)
  if (order) {
    order.status = 'New'
  }
}

const handleServeOrder = (orderId: number) => {
  const order = orders.value.find((o) => o.id === orderId)
  if (order) {
    order.status = 'Served'
    order.servedAt = new Date().toISOString()
  }
}
</script>

<template>
  <div class="flex flex-col h-screen">
    <Navbar
      :new-count="newOrdersCount"
      :in-progress-count="inProgressOrdersCount"
      :ready-count="readyOrdersCount"
      :served-count="servedOrdersCount"
    />
    <main class="flex-1 overflow-x-auto bg-[#D9D9D9]">
      <div class="flex h-full">
        <div
          v-for="status in orderStatuses"
          :key="status"
          class="w-1/4 min-w-[300px] h-full overflow-y-auto border-r border-gray-300"
        >
          <h2 class="text-center text-xl font-bold py-2 bg-gray-200 sticky top-0 z-10">
            {{ status }}
          </h2>
          <div class="p-2">
            <Cards
              v-for="order in groupedOrders[status]"
              :key="order.id"
              :order-id="order.id"
              :table-number="order.tableNumber"
              :timestamp="order.timestamp"
              :orders="order.orders"
              :status="order.status"
              :ready-at="order.readyAt"
              :served-at="order.servedAt"
              @start-order="handleStartOrder"
              @finish-order="handleFinishOrder"
              @undo-order="handleUndoOrder"
              @serve-order="handleServeOrder"
            />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style>
/* Simple scrollbar styling for webkit browsers */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
