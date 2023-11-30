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

import Navbar from "./components/NavbarBaru.vue";
import Footer from "./components/FooterView.vue";
import Carousel from "./components/CarouselView.vue";
import Slick from "./components/CarouselSlick.vue";
import Section from "./components/SectionView.vue";
import Frontend from "./views/IndexView.vue";



axios.defaults.withCredentials = true


const app = createApp(App);

app.component("nav-bar", Navbar);
app.component("footer-component", Footer);
app.component("carousel-component", Carousel);
app.component("slick-component", Slick);
app.component("section-component", Section);
app.component("front-component", Frontend);

app.use(createPinia())
app.use(router)
app.config.productionTip = false;
app.mount('#app');

