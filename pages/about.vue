<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos dolorem quasi in nulla maiores obcaecati optio
            nesciunt ratione odio possimus.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos dolorem quasi in nulla maiores obcaecati optio
            nesciunt ratione odio possimus.</p>
    </div>
    <div>
        {{ data }}
    </div>
</template>

<script setup>

useHead({
    title: 'Nuxt Dojo | About',
    meta: [{
        name: 'description',
        content: 'About page of Nuxt Dojo'
    }]
})
//  const {data} = await useFetch('https://jsonplaceholder.typicode.com/users')
 const {data} = await useFetch('/api/currency/GBP')
</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36;
}

p {
    margin: 20px 0;
}
</style>