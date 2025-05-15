<script setup>
import { useProductStore } from '@/stores/productStore';

const productStore = useProductStore()

const selectedCategory = ref('all')
const currentPage = ref(1)
const itemsPerPage = 8

const filteredProducts = computed(() => {
  if (selectedCategory.value === 'all') {
    return productStore.products
  }
  return productStore.products.filter(product => product.category === selectedCategory.value)
})

const categories = ref([
  { label: 'Visos knygos', value: 'all' },
  { label: 'Istoriniai meiles romanai', value: 'istoriniai-meiles-romanai' },
  { label: 'Asmenybes tobulinimas', value: 'asmenybes-tobulinimas' },
  { label: 'Fantasy', value: 'fantasy' },
  { label: 'Komiksai', value: 'komiksai' },
  { label: 'Romantiniai detektyvai', value: 'romantiniai-detektyvai' },
  { label: 'Klasikine poezija', value: 'klasikine-poezija' }
])

const sortOrder = ref('default')

const sortedProducts = computed(() => {
//   let products = filteredProducts.value.slice()

  if (sortOrder.value === 'priceAsc') {
    filteredProducts.value.sort((a, b) => a.price - b.price)
  } else if (sortOrder.value === 'priceDesc') {
    filteredProducts.value.sort((a, b) => b.price - a.price)
  }

  return filteredProducts.value
})

const searchQuery = ref('')

const searchedProducts = computed(() => {
  return sortedProducts.value.filter(product => 
    product.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return searchedProducts.value.slice(start, end)
})

const totalPages = computed(() => {
    return Math.ceil(searchedProducts.value.length / itemsPerPage)
})

function changePage(page) {
    currentPage.value = page
}
</script>

<template>
    <div class="pt-24 pb-24">
        <div class="container mx-auto">
            <div class="mb-5">
                <Categories 
                :categories="categories"
                :selectedCategory="selectedCategory"
                @update:category="(value) => selectedCategory = value"
            />
            </div>
            <div class="flex items-center justify-between mb-5">
                <ProductSearch 
                    :searchQuery="searchQuery"
                    @update:searchQuery="(value) => searchQuery = value"
                />
                <ProductSorting 
                     :sortOrder="sortOrder"
                     @update:sortOrder="(value) => sortOrder = value"
                />
            </div>
            <div class="grid grid-cols-4 gap-6">
                <Product v-for="product in paginatedProducts" :key="product.id" :product="product" />
            </div>
            <Pagination 
                :totalPages="totalPages"
                :currentPage="currentPage"
                @update:page="changePage"
            />
        </div>
    </div>
</template>