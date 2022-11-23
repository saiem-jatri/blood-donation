import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js'
import BaseCard from './components/BaseCard.vue'
import NavBar from './components/NavBar.vue'
import BaseButton from './components/BaseButton.vue'

const app = createApp(App)

app.use(router);
app.component('base-card',BaseCard);
app.component('nav-bar',NavBar);
app.component('base-button',BaseButton);
app.mount('#app');
