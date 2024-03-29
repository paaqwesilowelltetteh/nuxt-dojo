<template>
    <div class="mt-7 mb-4 max-w-sm mx-auto text-center card">
        <div v-if="error.statusCode === 404">
            <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
            <p>Ooops.</p>
        </div>
        <h1 v-else>An error occurred</h1>
        <p class="mb-4">{{ error.message }}</p>
        <button class="btn my-7" v-on:click="handdleClearError">Go to home</button>
    </div>
</template>

<script setup>
defineProps({
    error: Object
})

const handdleClearError = () => clearError({redirect: '/'});
</script>