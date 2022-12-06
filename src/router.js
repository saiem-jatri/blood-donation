import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/home.vue'
import Blog from './views/blog.vue'
import Register from './views/register.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/blog', component: Blog },
    { path: '/register', component: Register },
  ]
});

export default router;
