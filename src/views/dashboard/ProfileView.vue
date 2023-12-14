<template lang="">
  DASHBOARD
  <hr>
  Selamat Datang <strong>{{ userStore.user.name }}</strong>
</template>
<script setup>
 import { useAuth } from "@/store/auth";
 
 const userStore = useAuth();

</script>
<style lang="">
   
</style>