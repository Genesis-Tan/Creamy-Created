<template>
  <div class="flex justify-between items-start py-3 border-b">
    <div class="flex-1 pr-4">
      <h3 class="font-medium text-sm">{{ item.name }}</h3>
      <p class="text-xs text-gray-600">{{ item.description }}</p>
      <span class="text-sm font-bold block mt-1">₱{{ item.price }}</span>
    </div>
    <div v-if="item.quantity > 0" class="flex items-center space-x-1">
      <button @click="changeQuantity(-1)" class="px-2 py-1 rounded-full bg-gray-200 text-sm">−</button>
      <span class="text-sm font-semibold">{{ item.quantity }}</span>
      <button @click="changeQuantity(1)" class="px-2 py-1 rounded-full bg-gray-200 text-sm">+</button>
    </div>
    <div v-else>
      <button @click="changeQuantity(1)" class="px-3 py-1 rounded-full bg-orange-500 text-white text-sm">+</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['item'])
const emit = defineEmits(['update-quantity'])

function changeQuantity(amount) {
  emit('update-quantity', props.item.id, amount)
}
</script>
    