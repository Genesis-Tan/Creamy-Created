<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentDate = ref('')
const currentTime = ref('')
let timer: number | undefined

const updateDateTime = () => {
  const now = new Date()

  const optionsDate: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }
  currentDate.value = now.toLocaleDateString('en-US', optionsDate).toUpperCase().replace(/,/, '')

  const hours = now.getHours()
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()
  const ampm = hours >= 12 ? 'PM' : 'AM'
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12

  currentTime.value =
    `${formattedHours.toString().padStart(2, '0')}:` +
    `${minutes.toString().padStart(2, '0')}:` +
    `${seconds.toString().padStart(2, '0')} ${ampm}`
}

onMounted(() => {
  updateDateTime()
  timer = setInterval(updateDateTime, 1000)
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>

<template>
  <nav class="bg-blue-600 text-white p-4 flex items-center justify-between w-full box-border">
    <div class="flex gap-2.5">
      <div class="flex flex-col items-center gap-1.5">
        <div
          class="w-15 h-10 flex justify-center items-center rounded-md font-bold text-xl"
          style="background-color: #d43b3b; color: black"
        >
          1
        </div>
        <div class="text-sm font-bold text-center">New</div>
      </div>
      <div class="flex flex-col items-center gap-1.5">
        <div
          class="w-15 h-10 flex justify-center items-center rounded-md font-bold text-xl"
          style="background-color: #f3d633; color: black"
        >
          2
        </div>
        <div class="text-sm font-bold text-center">In Progress</div>
      </div>
      <div class="flex flex-col items-center gap-1.5">
        <div
          class="w-15 h-10 flex justify-center items-center rounded-md font-bold text-xl"
          style="background-color: #66ed7f; color: black"
        >
          3
        </div>
        <div class="text-sm font-bold text-center">Ready</div>
      </div>
      <div class="flex flex-col items-center gap-1.5">
        <div
          class="w-15 h-10 flex justify-center items-center rounded-md font-bold text-xl"
          style="background-color: #253338; color: white"
        >
          4
        </div>
        <div class="text-sm font-bold text-center">Served</div>
      </div>
    </div>

    <div class="flex items-center">
      <a href="/" class="text-white no-underline text-2xl font-bold">Creamy Creations</a>
    </div>

    <div class="flex flex-col items-end text-sm">
      <div class="font-bold">{{ currentDate }}</div>
      <div class="text-xl">{{ currentTime }}</div>
    </div>
  </nav>
</template>

<style scoped></style>
