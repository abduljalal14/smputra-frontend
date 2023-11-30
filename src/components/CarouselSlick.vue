<template>
    <swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :loop="true"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
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
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
  
    // import required modules
    import { Pagination, Navigation } from 'swiper/modules';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [Pagination, Navigation],
        };
      },
    };
  </script>
  <style>
.swiper {
  width: 85%;
  height: auto;
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
    border-radius: 20px;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
}

</style>