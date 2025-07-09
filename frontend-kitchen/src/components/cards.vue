<script>
export default {
  name: 'Card',
  props: {
    tableNumber: Number,
    timestamp: String,
    orders: Array,
    orderId: Number,
    status: String,
    readyAt: String,
    servedAt: String,
  },
  emits: ['start-order', 'finish-order', 'undo-order', 'serve-order'],
  data() {
    return {
      elapsedTime: '00:00:00',
      intervalId: null,
    }
  },
  computed: {
    headerColor() {
      switch (this.status) {
        case 'In Progress':
          return 'bg-[#eec76a]'
        case 'Ready':
          return 'bg-green-400'
        case 'Served':
          return 'bg-gray-800'
        default:
          return 'bg-[#FF6B6B]'
      }
    },
    formattedTimestamp() {
      return this.formatTime(this.timestamp)
    },
    formattedReadyAt() {
      return this.formatTime(this.readyAt)
    },
    formattedServedAt() {
      return this.formatTime(this.servedAt)
    },
  },
  methods: {
    formatTime(timestamp) {
      if (!timestamp) return ''
      const date = new Date(timestamp)
      return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      })
    },
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
    startOrder() {
      this.$emit('start-order', this.orderId)
    },
    finishOrder() {
      this.$emit('finish-order', this.orderId)
    },
    undoOrder() {
      this.$emit('undo-order', this.orderId)
    },
    serveOrder() {
      this.$emit('serve-order', this.orderId)
    },
    stopTimer() {
      if (this.intervalId) {
        clearInterval(this.intervalId)
        this.intervalId = null
      }
    },
  },
  mounted() {
    if (this.status !== 'Served') {
      this.intervalId = setInterval(this.updateElapsedTime, 1000)
    }
  },
  beforeUnmount() {
    this.stopTimer()
  },
  watch: {
    status(newStatus) {
      if (newStatus === 'Served') {
        this.stopTimer()
      }
    },
  },
}
</script>

<template>
  <div class="max-w-sm rounded shadow-lg m-4 bg-white rounded-t-lg">
    <div class="px-6 py-4 rounded-t-lg text-white force-bold" :class="headerColor">
      <div class="text-xl mb-2 force-bold">Table {{ tableNumber }}</div>
      <template v-if="status === 'Served'">
        <p class="text-lg force-bold">Order Ready: {{ formattedReadyAt }}</p>
        <p class="text-lg force-bold">Order Served: {{ formattedServedAt }}</p>
      </template>
      <template v-else>
        <p class="text-lg force-bold">Order Placed: {{ formattedTimestamp }}</p>
        <p class="text-lg force-bold">Elapsed Time: {{ elapsedTime }}</p>
      </template>
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
      <template v-if="status === 'New'">
        <button
          @click="startOrder"
          class="bg-[#253338] text-white font-bold py-2 px-4 rounded flex-1"
        >
          Start
        </button>
        <button
          @click="finishOrder"
          class="bg-[#D9D9D9] text-black font-bold py-2 px-4 rounded flex-1"
        >
          Finish
        </button>
      </template>
      <template v-else-if="status === 'In Progress'">
        <button
          @click="undoOrder"
          class="bg-[#D9D9D9] text-black font-bold py-2 px-4 rounded flex-1"
        >
          Undo
        </button>
        <button
          @click="finishOrder"
          class="bg-[#253338] text-white font-bold py-2 px-4 rounded flex-1"
        >
          Finish
        </button>
      </template>
      <template v-else-if="status === 'Ready'">
        <button
          @click="serveOrder"
          class="bg-[#253338] text-white font-bold py-2 px-4 rounded flex-1"
        >
          Serve
        </button>
      </template>
    </div>
  </div>
</template>

<style scoped>
/* Add any specific styles for your card component here */
.force-bold {
  font-weight: 700 !important;
}
</style>


