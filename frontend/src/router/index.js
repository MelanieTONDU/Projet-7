import { createRouter, createWebHistory } from 'vue-router'
import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'
import PostView from '../views/PostView.vue'

const routes = [
  {
    path: '/',
    name: 'Inscription',
    component: SignupView
  },
  {
    path: '/login',
    name: 'Connexion',
    component: LoginView
  },
  {
    path: '/article',
    name: 'post',
    component: PostView
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router