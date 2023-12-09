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
      :spaceBetween="10"
      :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
      :modules="modules"
      class="categorySwiper"
    >
    <swiper-slide v-for="(category, index) in categoryStore.categories" :key="index">
      <a href="#"
          class="text-decoration-none text-inherit">
          <div class="card card-product" style="max-width: 390px;">
            <div class="card-body text-center py-8">
              <img v-bind:src="category.image"
                alt="Grocery Ecommerce Template" class="mb-3" />
                
              <div class="text-truncate">{{ category.name }}
              </div>
            </div>
          </div>
          </a>
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
import { useCategory } from "@/store/categories";


const categoryStore = useCategory();

const modules = [Autoplay, Pagination, Navigation];

const SlidesView = ref(4);

const updateSlidesView = () => {
  if (window.innerWidth < 768) {
    SlidesView.value = 2;
  } else if (window.innerWidth < 992) {
    SlidesView.value = 3;
  } else {
    SlidesView.value = 4;
  }
};

onMounted(() => {
  categoryStore.fetchDataCategory();
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
</style>
  