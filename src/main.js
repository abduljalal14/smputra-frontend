import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
//import router
import router from './router/index'
// import axios
import axios from 'axios'
//import bootstrap css & js
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'
axios.defaults.withCredentials = true


const app = createApp(App);
app.use(createPinia())
app.use(router)
app.config.productionTip = false;
app.mount('#app');

