import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toaster from "@meforma/vue-toaster";
// import VueRouter from 'vue-router'

// import GrayscaleReminder from './components/GrayscaleReminder'

// const router = new VueRouter({
//   routes: [{ path: '/grayscale-reminder', component: GrayscaleReminder }]
// })
createApp(App).use(Toaster).use(router).mount('#app')
