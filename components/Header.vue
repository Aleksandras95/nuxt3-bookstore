<script setup>
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()
</script>

<template>
    <div class="bg-white p-2.5 w-full flex items-center h-20 sticky top-0 left-0 right-0 shadow-sm">
        <div class="container mx-auto">
            <div class="flex items-center justify-between">
                <Logo />
                <div class="flex items-center gap-6">
                    <NuxtLink to="/account/wishlist">
                        <Icon name="mdi:cards-heart-outline" style="color: black; font-size: 38px;" />
                    </NuxtLink>
                    <NuxtLink to="/account">
                        <Icon name="mdi:account-circle-outline" style="color: black; font-size: 38px;" />
                    </NuxtLink>
                    <NuxtLink to="/cart" class="relative">
                        <Icon name="mdi:shopping-outline" style="color: black; font-size: 36px;" />
                        <div class="absolute -top-1 -right-2 w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-white text-xs">{{ cartStore.cartItems.length }}</div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>