import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  // 前台路由
  {
    path: '/',
    name: '前台',
    component: () => import('../views/frontend/FrontView.vue'),
    children: [
      {
        path: '',
        name: '首頁',
        component: () => import('../views/frontend/HomeView.vue'),
      },
      {
        path: 'products',
        name: '模型課程',
        component: () => import('../views/frontend/CourseView.vue'),
      },
      {
        path: 'record',
        name: '訂單記錄',
        component: () => import('../views/frontend/OrderRecord.vue'),
      },
      {
        path: 'information',
        name: '展覽資訊',
        component: () => import('../views/frontend/EInForm.vue'),
      },
      {
        path: 'favorite',
        name: '我的最愛',
        component: () => import('../views/frontend/FavoriteView.vue'),
      },
      {
        path: 'mall', // 購物車
        name: '購物袋',
        component: () => import('../views/frontend/MallView.vue'),
      },
    ],
  },
  // login
  {
    path: '/login',
    component: () => import('../views/admin/LoginView.vue'),
  },
  // 後台路由
  {
    path: '/admin',
    component: () => import('../views/admin/DashboardView.vue'),
    children: [
      {
        path: 'course',
        component: () => import('../views/admin/AdminCourse.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/admin/AdminOrders.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
