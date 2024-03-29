<template>
    <div>
        <div class="grid grid-cols-4 gap-4">
            <div v-for="p in products" :key="p.id">
                <ProductCard :product="p" />
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'products',
});
useHead({
  title: 'Nuxt Dojo | Products Merch',
  meta:[
        {
            name: 'description',
            content: 'Nuxt Dojo Merch'
        }
    ]
});

const { data: products } = await useFetch('https://fakestoreapi.com/products');
</script>

<style scoped></style>