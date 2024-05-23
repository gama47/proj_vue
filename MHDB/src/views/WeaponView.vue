<template>
    <HeaderC></HeaderC>
    <div class="container">
        <button @click="getInfo" type="button">info</button>
        <br/>
        <ul>
            <li v-for="i in info">
                id - {{ i.id }}<br/>
                name - {{ i.name }}<br/>
                type - {{ i.type }}<br/>
                rarity - {{ i.rarity }}<br/>
                attack - {{ i.attack }}<br/>
                attributes - {{ i.attributes }}<br/>
                durability - {{ i.durability }}<br/>
                elements - {{ i.elements }}<br/>
                craftting - {{ i.crafting }}<br/>
                assets - {{ i.assets }}<br/>
                <br/>
            </li>
        </ul>
    </div>
    <FooterC></FooterC>
</template>
<script setup>
import { ref, onMounted } from "vue";
import HeaderC from '../components/HeaderComponent.vue';
import FooterC from '../components/FooterComponent.vue';
const info = ref([]);
const getInfo=()=>{
    fetch("https://mhw-db.com/weapons")
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