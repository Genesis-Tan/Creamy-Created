<template>
  <div class="max-w-sm rounded shadow-lg m-4 bg-white rounded-t-lg">
    <div class="px-6 py-4 bg-[#FF6B6B] rounded-t-lg text-white force-bold">
      <div class="text-xl mb-2 force-bold">Table {{ tableNumber }}</div>
      <p class="text-lg force-bold">Order Placed: {{ formattedTimestamp }}</p>
      <p class="text-lg force-bold">Elapsed Time: {{ elapsedTime }}</p>
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
    <div class="px-6 pt-4 pb-2 flex justify-between gap-4">
      <button class="bg-[#253338] text-white font-bold py-2 px-4 rounded flex-1">Start</button>
      <button class="bg-[#D9D9D9] text-black font-bold py-2 px-4 rounded flex-1">Finish</button>
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
  data() {
    return {
      elapsedTime: '00:00:00',
      intervalId: null,
    }
  },
  computed: {
    formattedTimestamp() {
      const date = new Date(this.timestamp)
      return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      })
    },
  },
  methods: {
    updateElapsedTime() {
      const startTime = new Date(this.timestamp)
      const now = new Date()
      const difference = Math.max(0, now.getTime() - startTime.getTime())

      const hours = Math.floor(difference / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      this.elapsedTime = `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`
    },
    pad(num) {
      return num.toString().padStart(2, '0')
    },
  },
  mounted() {
    this.intervalId = setInterval(this.updateElapsedTime, 1000)
  },
  beforeUnmount() {
    clearInterval(this.intervalId)
  },
}
</script>

<style scoped>
/* Add any specific styles for your card component here */
.force-bold {
  font-weight: 700 !important;
}
</style>
