import { createRouter, createWebHistory } from 'vue-router';
import CoachRegistation from '../src/components/CoachRegistation.vue'
import Home from './views/home.vue'
import Blog from './views/blog.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/register', component: CoachRegistation },
    { path: '/', component: Home },
    { path: '/blog', component: Blog },
  ]
});

export default router;
