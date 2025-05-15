<script setup>
const props = defineProps({
  categories: Array,
  selectedCategory: String
})
const emit = defineEmits(['update:category'])
</script>

<template>
    <div class="grid grid-cols-7 gap-6">
        <button 
            v-for="cat in categories" 
            :key="cat.value"
            @click="$emit('update:category', cat.value)"
            :class="[
            'w-full py-10 px-6 rounded-md text-base',
            selectedCategory === cat.value ? 'bg-red-500 text-white' : 'bg-white text-black'
            ]"
        >
            {{ cat.label }}
        </button>
    </div>
</template>