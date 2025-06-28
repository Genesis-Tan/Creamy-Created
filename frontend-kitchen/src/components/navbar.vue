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
  <nav class="taskbar">
    <div class="square-container">
      <div class="square-item">
        <div class="square" style="background-color: #d43b3b; color: black">1</div>
        <div class="square-label">New</div>
      </div>
      <div class="square-item">
        <div class="square" style="background-color: #f3d633; color: black">2</div>
        <div class="square-label">In Progress</div>
      </div>
      <div class="square-item">
        <div class="square" style="background-color: #66ed7f; color: black">3</div>
        <div class="square-label">Ready</div>
      </div>
      <div class="square-item">
        <div class="square" style="background-color: #253338; color: white">4</div>
        <div class="square-label">Served</div>
      </div>
    </div>

    <div class="taskbar-brand">
      <a href="/" class="taskbar-logo">Something Creamy, Creamy Creations</a>
    </div>

    <div class="datetime-container">
      <div class="date-display">{{ currentDate }}</div>
      <div class="time-display">{{ currentTime }}</div>
    </div>
  </nav>
</template>

<style scoped>
.taskbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0557e3;
  padding: 1rem 2rem;
  color: white;
  width: 100%;
  box-sizing: border-box;
}

.taskbar-brand {
  display: flex;
  align-items: center;
}

.taskbar-logo {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
}

.square-container {
  display: flex;
  gap: 10px;
}

.square {
  width: 60px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-weight: bold;
  color: white;
  font-size: 20px;
}

.square-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.square-label {
  font-size: 0.9rem;
  color: white;
  text-align: center;
  font-weight: bold;
}

.datetime-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 0.9rem;
}

.date-display {
  font-weight: bold;
}

.time-display {
  font-size: 1.3rem;
}
</style>
