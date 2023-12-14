<template>
  <div class="container">
    <swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :loop="true"
      :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
      :pagination="{
        clickable: true,
        dynamicBullets: true,
      }"
      :modules="modules"
      class="banner"
    >
    <swiper-slide v-for="(banner, index) in bannerStore.banners" :key="index"
      ><a v-bind:href="banner.link">
        <img v-bind:src="banner.image" />
      </a> 
    </swiper-slide>
    </swiper>
  </div>
    
  </template>
  <script setup>
  import { useBanner } from "@/store/banner" 
  import { ref, onMounted } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';
  
  // Declare a ref for modules
  const modules = ref([Autoplay, Pagination, Navigation]);

  const bannerStore = useBanner()
  
  // Hook to execute logic after the component is mounted
  onMounted(() => {
    bannerStore.fetchDataBanner();
  });
  </script>
  <style>
.banner {
  width: 90%;
  height: auto;
}

.banner .swiper-slide {
  text-align: center;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner .swiper-slide img {
  border-radius: 15px;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner {
  margin-left: auto;
  margin-right: auto;
}
@media (max-width: 992px) {
    .banner {
      width: 98%;
    }
}
</style>