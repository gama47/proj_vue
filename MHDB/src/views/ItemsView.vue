<template>
    <HeaderC></HeaderC>
    <main class="container">
        <button @click="getInfo" type="button">info</button>
        <br/>
        <ul>
            <li v-for="i in info">
                id - {{i.id}}<br/>
                name - {{i.name}}<br/>
                description - {{i.description}}<br/>
                value - {{i.value}}<br/>
                carryLimit - {{i.carryLimit}}<br/>
                <br/>
            </li>
        </ul>
    </main>
    <FooterC></FooterC>
</template>
<script setup>
import { ref, onMounted } from "vue";
import HeaderC from '../components/HeaderComponent.vue';
import FooterC from '../components/FooterComponent.vue';
const info = ref([]);
const getInfo=()=>{
    fetch("https://mhw-db.com/items")
        .then((res) =>
            res.json()
        )
        .then((dados)=>
            info.value = dados
        );
};
onMounted(()=>{
    getInfo();
});
</script>