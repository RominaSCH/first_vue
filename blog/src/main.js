import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import listRouter from "./router"


createApp(App).use(listRouter).mount('#app')
