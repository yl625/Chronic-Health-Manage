import {createRouter,createWebHistory} from  'vue-router';

const routes = [
    {
        path: '/',
        name: '首页',
        component: () => import ('../pages/Home/index.vue'),
    },
    {
        path: '/home',
        name: 'home',
        title: '首页',
        component: () => import('../pages/Home/index.vue')
    },
    {
        path: '/health-input',
        name: 'health-input',
        title: '健康指标录入',
        component: () => import('../pages/HealthInput/index.vue')
    },
    {
        path: '/medication-service',
        name: 'medication-service',
        title: '用药服务',
        component: () => import('../pages/MedicationService/index.vue')
    },
    {
        path: '/todo-list',
        name: 'todo-list',
        title: '待办事项',
        component: () => import('../pages/TodoList/index.vue')
    },
    {
        path: '/health-trend',
        name: 'health-trend',
        title: '健康趋势分析',
        component: () => import('../pages/HealthTrend/index.vue')
    },
    {
        path: '/personal-center',
        name: 'personal-center',
        title: '个人中心',
        component: () => import('../pages/PersonalCenter/index.vue')
    },
    {
        path: '/help-center',
        name: 'help-center',
        title: '帮助中心',
        component: () => import('../pages/HelpCenter/index.vue')
    },
    {
        path: '/login',
        name: 'login',
        title: '登录/注册',
        component: () => import('../pages/Login/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;