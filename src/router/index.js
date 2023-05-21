import { createRouter, createWebHistory } from 'vue-router'
import EditMovie from '@/views/EditMovie.vue'
import AllMovies from '@/views/AllMovies.vue'
// import sourceData from '@/data.json'

const routes = [
    {
        path: '/',
        name: 'AllMovies',
        component: AllMovies
    },
    {
        path: '/movies/:id/edit',
        name: 'edit',
        component: EditMovie
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