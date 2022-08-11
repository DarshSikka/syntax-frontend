import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies'
import './styles/app.css';
createApp(App).use(store).use(router).use(VueCookies, {
    expireTimes: "30d",
    path: "/",
    domain: "",
    secure: true,
    sameSite: "None",
  }).mount('#app')
