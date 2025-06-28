<template>
  <div
    class="flex justify-between border-b cursor-pointer hover:bg-gray-100 rounded"
    @click="$emit('click', item)"
  >
    <!-- Left: Image + Content -->
    <div class="flex flex-1 space-x-3 pr-4">
      <img
        src="@/assets/placeholder.png"
        alt="Item Image"
        class="w-30 h-full self-stretch object-cover rounded"
      />

      <div class="flex flex-col justify-between flex-1 pl-2">
        <div>
          <h3 class="font-medium text-sm">{{ item.name }}</h3>
          <p class="text-xs text-gray-600">{{ item.description }}</p>
          <span class="text-sm font-bold block mt-1">₱{{ item.price }}</span>
        </div>

        <!-- Bottom-right: Quantity control -->
        <div class="flex justify-end pb-1">
          <div v-if="item.quantity > 0" class="flex items-center space-x-1">
            <button
              @click.stop="changeQuantity(-1)"
              class="px-2 py-1 rounded-full bg-gray-200 text-sm"
            >−</button>
            <span class="text-sm font-semibold">{{ item.quantity }}</span>
            <button
              @click.stop="changeQuantity(1)"
              class="px-2 py-1 rounded-full bg-gray-200 text-sm"
            >+</button>
          </div>
          <div v-else>
            <button
              @click.stop="changeQuantity(1)"
              class="px-3 py-1 rounded-full bg-orange-500 text-white text-sm"
            >+</button>
          </div>
        </div>
      </div>
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
    