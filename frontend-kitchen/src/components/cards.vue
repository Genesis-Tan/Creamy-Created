<template>
  <div class="max-w-sm rounded shadow-lg m-4">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">Table {{ tableNumber }}</div>
      <p class="text-gray-700 text-base">Timestamp: {{ timestamp }}</p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <div v-for="order in orders" :key="order.itemName" class="mb-4">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          {{ order.itemName }}
        </span>
        <ul class="list-disc list-inside ml-4">
          <li>Size: {{ order.size }}</li>
          <li>Quantity: {{ order.quantity }}</li>
          <li v-if="order.addons.length > 0">
            Addons:
            <ul class="list-disc list-inside ml-4">
              <li v-for="addon in order.addons" :key="addon">{{ addon }}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    tableNumber: Number,
    timestamp: String,
    orders: Array,
  },
}
</script>

<style scoped>
/* Add any specific styles for your card component here */
</style>
