import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/IndexView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/dashboard/IndexView.vue'),
    children : [
      { path: 'profile', 
        name: 'profile',
        component: () => import(/* webpackChunkName: "about" */ '../views/dashboard/ProfileView.vue'),
        props: { userData: 'user' } },
      { path: 'products', 
        name: 'products',
        component: () => import(/* webpackChunkName: "about" */ '../views/dashboard/ProductList.vue') },
      { path: 'add-product', 
        name: 'add-product',
        component: () => import(/* webpackChunkName: "about" */ '../views/dashboard/CreateProduct.vue') },
      { path: 'edit-product/:id', 
        name: 'edit-product',
        component: () => import(/* webpackChunkName: "about" */ '../views/dashboard/EditProduct.vue') },
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/about/IndexView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/IndexView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
