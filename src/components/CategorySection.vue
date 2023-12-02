<template lang="">
            <div class="container mt-5">
               <div class="row mb-3">
                  <div class="col-12">
                     <h3 class="mb-0">Featured Categories</h3>
                  </div>
               </div>
    <swiper 
      :slidesPerView="SlidesView"
      :loop="true"
      :navigation="true"
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
      :modules="modules"
      class="categorySwiper"
    >
    <swiper-slide v-for="(n, index) in 10" :key="index">
        <div class="card card-product" style="width: 15rem;">
        <img class="card-img-top" src="../assets/images/category/category-tea-coffee-drinks.jpg" alt="Card image cap">
        <div class="card-body">
            <p class="card-text">Kategori {{ n }}</p>
        </div>
        </div>
    </swiper-slide>
    </swiper>
            </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const modules = [Autoplay, Pagination, Navigation];

const SlidesView = ref(5);

const updateSlidesView = () => {
  if (window.innerWidth < 768) {
    SlidesView.value = 3;
  } else if (window.innerWidth < 992) {
    SlidesView.value = 4;
  } else {
    SlidesView.value = 5;
  }
};

onMounted(() => {
  updateSlidesView();
  window.addEventListener('resize', updateSlidesView);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateSlidesView);
});
</script>
<style>
.categorySwiper {
    width: 100%;
}
.swiper-slide {
    text-align: center;
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    padding: 5px;
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
}
</style>
  