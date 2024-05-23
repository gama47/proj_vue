<script setup>
import HeaderC from '../components/HeaderComponent.vue';
import FooterC from '../components/FooterComponent.vue';
</script>
<template>
    <HeaderC></HeaderC>
    <main class="container">
        <h2>404! NOT FOUND!</h2>
        <p>This page could not be accessed.</p>
        <RouterView/>
    </main>
    <FooterC></FooterC>
</template>