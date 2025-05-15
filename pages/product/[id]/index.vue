<script setup>
import { useProductStore } from '@/stores/productStore'
import { useCartStore } from '@/stores/cartStore'

const productStore = useProductStore()
const cartStore = useCartStore()
const route = useRoute()

const product = productStore.getProductById(Number(route.params.id))

function handleAddToCart() {
  if (product) {
    cartStore.addToCart(product)
  }
}
</script>

<template>
    <div class="pt-24 pb-24">
        <div class="container mx-auto">
            <NuxtLink to="/" class="text-black hover:underline mb-4 inline-block">← Back to shop</NuxtLink>
            <div class="flex items-start mt-10 gap-6">
                <div class="w-1/2">
                    <img class="rounded-md" :src="product.image" :alt="product.title">
                </div>
                <div class="w-1/2">
                    <h2 class="text-black text-lg font-medium leading-normal">{{ product.title }}</h2>
                    <p class="text-black text-base mt-5 font-bold">{{ product.price }} €</p>
                    <button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-5" @click="handleAddToCart">Add to cart</button>
                </div>
            </div>
        </div>
    </div>
</template>