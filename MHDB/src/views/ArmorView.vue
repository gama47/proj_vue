<template>
    <HeaderC></HeaderC>
    <main class="container">
        <button @click="getInfo" type="button">info</button>
        <br/>
        <ul>
            <li v-for="i in info">
                id - {{i.id}}<br/>
                name - {{i.name}}<br/>
                rank - {{i.rank}}<br/>
                <!--pieces - {{i.pieces}}<br/>-->
                <div v-for="piece in i.pieces">
                    id - {{piece.id}}<br/>
                    name - {{piece.name}}<br/>
                    type - {{piece.type}}<br/>
                    rank - {{piece.rank}}<br/>
                    rarity - {{piece.rarity}}<br/>
                    resistances - {{piece.resistances}}<br/>
                    {{piece.assets}}<br/>
                    <br/>
                </div>
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
    fetch("https://mhw-db.com/armor/sets")
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