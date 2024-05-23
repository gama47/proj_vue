<script setup>
import HeaderC from '../components/HeaderComponent.vue';
import FooterC from '../components/FooterComponent.vue';
</script>
<template>
    <HeaderC></HeaderC>
    <main class="container">
        <h2>Welcome to the Monster Hunter Wiki</h2>
        <p>This wiki is dedicated to all things Monster Hunter!</p>
        <p>Explore our database to learn more about monsters, weapons, armor, and items.</p>
        <RouterView/>
    </main>
    <FooterC></FooterC>
</template>