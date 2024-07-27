<script setup lang="ts">
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
    <Header active="home"></Header>

    <section class="min-h-screen flex">
        <div class="flex-1">
            Text
        </div>
        <div class="flex-1">
            Image
        </div>
    </section>
    
    <Footer></Footer>
</template>