import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/clienteView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio
    },
    {
      path: '/agregar-cliente',
      name: 'agregar-cliente',
      component: ()=>import('../views/agregar-clientes-item.vue')
    },
    {
      path: '/editar-cliente/:id',
      name: 'editar-cliente',
      component: ()=>import('../views/editarClienteView.vue')
    },
  ]
})

export default router
