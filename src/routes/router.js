import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/HomeView.vue'),
    },
    {
        path: '/servicos',
        name: 'Service',
        component: () => import('../views/ServiceView.vue'),
    },
    {
        path: '/sobre',
        name: 'About',
        component: () => import('../views/AboutView.vue'),
    },
    {
        path: '/contato',
        name: 'Contact',
        component: () => import('../views/ContactView.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
