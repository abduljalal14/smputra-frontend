<template>
    <nav-bar></nav-bar>
    <router-view></router-view>
    <footer-component></footer-component>
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