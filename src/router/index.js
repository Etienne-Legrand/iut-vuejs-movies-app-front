import { createRouter, createWebHistory } from 'vue-router'
import EditMovie from '@/views/EditMovie.vue'
import Home from '@/views/Home.vue'
import CreateMovie from '@/views/CreateMovie.vue'
import DetailMovie from '@/views/DetailMovie.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/movies/new',
        name: 'create',
        component: CreateMovie
    },
    {
        path: '/movies/:id/edit',
        name: 'edit',
        component: EditMovie
    },
    {
        path: '/movies/:id',
        name: 'detail',
        component: DetailMovie
    }
    // {
    //     path: '/invoices',
    //     name: 'invoices',
    //     components: {
    //         default: () => import('@/views/Invoices.vue'),
    //         LeftSidebar: () => import('@/components/LeftSidebar.vue'),
    //     },
    //     meta: {
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: "/example/:id(\\d+)?",
    //     component: () => import("@/views/Login.vue")
    // },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    // scrollBehavior(to, from, savedPosition) {
    //     return savedPosition || new Promise((resolve) => {
    //         setTimeout(() => resolve({ top: 0 }), 300)
    //     })
    // }
})
export default router