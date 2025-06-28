<script setup lang="ts">
import Navbar from './components/navbar.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main></main>
</template>

<style scoped>
header {
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}
</style>

<style>
body {
  background-color: #f5f5f5;
  color: black;
  margin: 0;
}
</style>
