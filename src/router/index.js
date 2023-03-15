import { createWebHistory, createRouter } from 'vue-router'

// 公共路由
export const constantRoutes = [
    {
        path: '/login',
        component: () => import('@/views/login')
    },
    {
        path: '/',
        component: () => import('@/views/home')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: constantRoutes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    },
});

export default router