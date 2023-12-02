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
    <swiper-slide
      ><img
        src="https://www.yogyagroup.com/storage/banner/6524ae4b7d84b_1696902731.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://www.yogyagroup.com/storage/banner/6552e2844723f_1699930756.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://www.yogyagroup.com/storage/banner/65405fe3f0c09_1698717667.jpg" /></swiper-slide
    ><swiper-slide
      ><img src="https://www.yogyagroup.com/storage/banner/5fbf1fe697265_1606361062.jpg"
    /></swiper-slide>
    </swiper>
  </div>
    
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
  
    // import required modules
    import {  Autoplay, Pagination, Navigation } from 'swiper/modules';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [Autoplay, Pagination, Navigation],
        };
      },
    };
  </script>
  <style>
.banner {
  width: 90%;
  height: auto;
}

.swiper-slide {
  text-align: center;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
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