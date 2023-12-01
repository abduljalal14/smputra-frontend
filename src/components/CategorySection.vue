<template lang="">
            <div class="container mt-5">
               <div class="row mb-3">
                  <div class="col-12">
                     <h3 class="mb-0">Featured Categories</h3>
                  </div>
               </div>
    <swiper 
      :slidesPerView="6"
      :spaceBetween="30"
      :centeredSlides="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="categorySwiper"
    >
    <swiper-slide>
        <div class="card card-product" style="width: 18rem;">
        <img class="card-img-top" src="../assets/images/category/category-tea-coffee-drinks.jpg" alt="Card image cap">
        <div class="card-body">
            <p class="card-text">Kategori 1</p>
        </div>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="card card-product" style="width: 18rem;">
        <img class="card-img-top" src="../assets/images/category/category-tea-coffee-drinks.jpg" alt="Card image cap">
        <div class="card-body">
            <div class="text-truncate">Cleaning Essentials</div>
        </div>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="card card-product" style="width: 18rem;">
        <img class="card-img-top" src="../assets/images/category/category-tea-coffee-drinks.jpg" alt="Card image cap">
        <div class="card-body">
            <div class="text-truncate">Cleaning Essentials</div>
        </div>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="card card-product" style="width: 18rem;">
        <img class="card-img-top" src="../assets/images/category/category-tea-coffee-drinks.jpg" alt="Card image cap">
        <div class="card-body">
            <div class="text-truncate">Cleaning Essentials</div>
        </div>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="card card-product" style="width: 18rem;">
        <img class="card-img-top" src="../assets/images/category/category-tea-coffee-drinks.jpg" alt="Card image cap">
        <div class="card-body">
            <div class="text-truncate">Cleaning Essentials</div>
        </div>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="card card-product" style="width: 18rem;">
        <img class="card-img-top" src="../assets/images/category/category-tea-coffee-drinks.jpg" alt="Card image cap">
        <div class="card-body">
            <div class="text-truncate">Cleaning Essentials</div>
        </div>
        </div>
    </swiper-slide>
    </swiper>
            </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },
};
</script>
<style>
.categorySwiper {
    width: 100%;
}
.swiper-slide {
    text-align: center;
    font-size: 18px;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
  