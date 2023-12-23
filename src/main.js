import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css'
import yang from 'comps/twoyao/yang.vue';
import ying from 'comps/twoyao/ying.vue';
const pinia = createPinia()
const app = createApp(App)

app.component('ying',ying)
app.component('yang',yang)
app.use(pinia)
app.mount('#app')
