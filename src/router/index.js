// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home/Home.vue'),
      },
      {
        path: '/SegundoHome',
        name: 'Home2',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home/Home.vue'),
      },
      {
        path: '/IniciarSesion',
        name: 'Iniciar Sesion',
        component: () => import('@/views/Login/Login.vue'),
      },
      {
        path: '/AcercaDeNosotros',
        name: 'Acerca De Nosotros',
        component: () => import('@/views/AboutUs/AboutUs.vue'),
      }
    ],
  },
  {
    path: '/home2',
    component: () => import('@/views/Home/Home.vue')
  },
  {
    path: '/Support',
    name: 'Support',
    component: () => import('@/layouts/FormSupport/FormSupport.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
