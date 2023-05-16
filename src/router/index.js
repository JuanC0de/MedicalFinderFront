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
      },
      {
        path: '/Soporte',
        name: 'Support',
        component: () => import('@/views/Support/Support.vue'),
      },
    ],
  },
  {
    path: '/registro/medico',
    name: 'Registro Medico',
    component: () => import('@/views/Register/Doctor/RegisterDoctor.vue'),
  },
  {
    path: '/registro/paciente',
    name: 'Registro Paciente',
    component: () => import('@/views/Register/Patient/RegisterPatient.vue'),
  },
  {
    path: '/buscar',
    name: 'Buscar Especialista',
    component: () => import('@/views/Register/Patient/RegisterPatient.vue'),
  },
  {
    path: '/medico/perfil',
    name: 'Perfil Médico',
    component: () => import('@/views/Admin/Medical/MedicalProfile/MedicalProfile.vue')
  }
  ,
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/Admin/AdminView/Base.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
