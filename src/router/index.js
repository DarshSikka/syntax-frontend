import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import('../views/SignupView.vue')
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue")
  },
  {
    path: "/products",
    name: "products",
    component: ()=>import("../views/ProductsView.vue")
  },
  {
    path: "/checkout",
    name: "checkout",
    component: ()=>import("../views/PaymentView.vue")
  },
  {
    path: "/product/:id",
    name: "product",
    component: ()=>import("../views/ProductView.vue")
  },
  {
    path: "/cart",
    name: "cart",
    component: ()=>import("../views/CartView.vue")
  },
  {
    path: "/orders",
    name: "orders",
    component: ()=>import("../views/OrdersView.vue")
  },
  {
    path: "/profile",
    name: "profile",
    component: ()=>import("../views/ProfileView.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
