<template>
    <HeaderC></HeaderC>
    <div class="container">
        <button @click="getInfo" type="button">info</button>
        <br/>
        <ul>
            <li v-for="i in info">
                id - {{ i.id }}<br/>
                type - {{i.type}}<br/>
                species - {{i.species}}<br/>
                name - {{i.name}}<br/>
                description - {{i.description}}<br/>
                location
                <div v-for="loc in i.locations">
                    <span> - {{loc.name}}, {{loc.zoneCount}}</span><br/>
                </div>
                resistance
                <div v-for="res in i.resistances">
                    <span> - {{res.element}}, when {{res.condition}}</span><br/>
                </div>
                weakness
                <div v-for="weak in i.weaknesses">
                    <span> - {{weak.element}}, when {{weak.condition}}</span><br/>
                </div>
                rewards
                <div v-for="rew in i.rewards">
                    <span> - {{rew.item.name}}, {{rew.item.description}} When {{rew.conditions}}</span><br/>
                </div>
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
    fetch("https://mhw-db.com/monsters")
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