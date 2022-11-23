import { createRouter, createWebHistory } from 'vue-router';
import CoachRegistation from '../src/components/CoachRegistation.vue'
import Home from './views/home.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/register', component: CoachRegistation },
    { path: '/', component: Home },
  ]
});

export default router;
