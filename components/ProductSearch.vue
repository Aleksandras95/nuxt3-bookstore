<script setup>
const props = defineProps({
  searchQuery: String
})
const emit = defineEmits(['update:searchQuery'])
</script>

<template>
    <div class="w-[30%] relative">
        <Icon name="mdi:magnify" style="color: black; font-size: 36px; position: absolute; top: 50%; right: 10px; transform: translateY(-50%);" />
        <input class="border border-solid border-[#ced4da] px-3 py-1.5 w-full outline-none rounded-3xl text-lg h-12" :value="searchQuery" @input="$emit('update:searchQuery', $event.target.value)"  type="text" placeholder="Search among 13,516,057 products">
    </div>
</template>