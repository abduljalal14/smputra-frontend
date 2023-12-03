import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'front',
    component: () => import(/* webpackChunkName: "about" */ '../views/IndexView.vue'),
    children : [
      { path: '/', 
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../views/home/HomeView.vue') },
      { path: 'about', 
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/about/IndexView.vue') },
      { path: 'blog', 
        name: 'blog',
        component: () => import(/* webpackChunkName: "about" */ '../views/blog/BlogView.vue') },
      { path: 'membership', 
        name: 'membership',
        component: () => import(/* webpackChunkName: "about" */ '../views/membership/MemberShip.vue') },
      { path: 'shop', 
        name: 'shop',
        component: () => import(/* webpackChunkName: "about" */ '../views/shop/ShopView.vue') },
      { path: 'checkout', 
        name: 'checkout',
        component: () => import(/* webpackChunkName: "about" */ '../views/checkout/IndexView.vue') },
    ]
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
      { path: 'categories', 
        name: 'categories',
        component: () => import(/* webpackChunkName: "about" */ '../views/dashboard/ListCategory.vue') },
      { path: 'add-product', 
        name: 'add-product',
        component: () => import(/* webpackChunkName: "about" */ '../views/dashboard/CreateProduct.vue') },
      { path: 'edit-product/:id', 
        name: 'edit-product',
        component: () => import(/* webpackChunkName: "about" */ '../views/dashboard/EditProduct.vue') },
    ]
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
