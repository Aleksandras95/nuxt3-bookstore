<script setup>
const props = defineProps({
    product: {
        type: Object,
        default: () => {}
    }
})
</script>

<template>
    <NuxtLink :to="`/product/${product.id}`" class="bg-white rounded-md w-full p-5">
        <img class="w-[100%] h-[350px] object-cover mx-auto rounded-md" :src="product.image" :alt="product.title">
        <h3 class="text-black text-lg font-medium leading-normal mt-5 min-h-[54px]">{{ product.title }}</h3>
        <span class="text-black text-base mt-5 font-bold">{{ product.price }} €</span>
    </NuxtLink>
</template>