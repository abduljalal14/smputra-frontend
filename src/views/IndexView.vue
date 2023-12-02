<template>
  <div>
    <nav-bar></nav-bar>
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const loggedIn = ref(null);

const getLoggedIn = () => {
  loggedIn.value = localStorage.getItem('loggedIn');
};

watch(
  () => route,
  {
    immediate: true,
    handler() {
      getLoggedIn();
    },
  }
);
</script>
<style scoped>

@font-face {
  font-family: 'Montserrat Summernote';
  font-style: normal;
  font-weight: 400;
  src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
.font-montserrat {
  font-family: Montserrat, sans-serif;
}
</style>