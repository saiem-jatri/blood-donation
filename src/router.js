import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/home.vue'
import Blog from './views/blog.vue'
import Register from './views/register.vue'
import Donar from './views/donar.vue'
import History from './views/history.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/blog', component: Blog },
    { path: '/register', component: Register },
    { path: '/donar', component: Donar },
    {
      path: '/donar/:id',
      component: History,
      props:true,
    },
  ]
});

export default router;
