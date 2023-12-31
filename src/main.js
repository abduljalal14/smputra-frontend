import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
//import router
import router from './router/index'
// import axios
import axios from 'axios'
//import bootstrap css & js
//import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'

import Navbar from "./components/NavbarBaru.vue";
import Footer from "./components/FooterView.vue";
import Header from "./components/HeaderView.vue";
import Slick from "./components/CarouselSlick.vue";
import Section from "./components/SectionView.vue";
import Frontend from "./views/IndexView.vue";
import Cart from "./components/CartView.vue";
import Category from "./components/CategorySection.vue";
import HeroSlider from "./components/HeroSlider.vue";
import Features from "./components/FeatureView.vue";
import Welcome from "./components/WelcomeView.vue";
import NewProduct from "./components/NewProduct.vue";
import ProductCard from "./components/ProductCard.vue";
import ProductDetails from "./components/ProductDetail.vue";
import ProducPlacholder from "./components/ProductPlaceholder.vue";
import DetailOrder from "./views/detail-order/DetailOrder.vue";


axios.defaults.withCredentials = true


const app = createApp(App);

app.component("nav-bar", Navbar);
app.component("footer-component", Footer);
app.component("carousel-component", Header);
app.component("slick-component", Slick);
app.component("section-component", Section);
app.component("front-component", Frontend);
app.component("cart-component", Cart);
app.component("category-component", Category);
app.component("hero-slider", HeroSlider);
app.component("features-component", Features);
app.component("welcome-component", Welcome);
app.component("new-product", NewProduct);
app.component("product-card", ProductCard);
app.component("product-placeholder", ProducPlacholder);
app.component("product-detail", ProductDetails);
app.component("order-detail", DetailOrder);


app.use(createPinia())
app.use(router)
app.config.productionTip = false;
app.mount('#app');

