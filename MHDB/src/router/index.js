import { createRouter, createWebHistory } from 'vue-router'
import MonsterView from '@/views/MonsterView.vue'
import HomeView from '@/views/HomeView.vue'
import WeaponView from '@/views/WeaponView.vue'
import ArmorView from '@/views/ArmorView.vue'
import ItemView from '@/views/ItemsView.vue'
import ErrorView from '@/views/ErrorView.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/monster',
            name: 'Monster',
            component: MonsterView
        },
        {
            path: '/weapon',
            name: 'Weapon',
            component: WeaponView
        },
        {
            path:'/armor',
            name:'Armor',
            component: ArmorView
        },
        {
            path:'/item',
            name:'Item',
            component: ItemView
        },
        {
            path:'/:catchAll(.*)',
            name:'Error',
            component: ErrorView
        }
    ]
})

export default router
