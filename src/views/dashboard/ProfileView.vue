<template lang="">
   DASHBOARD
   <hr>
   Selamat Datang <strong>{{ userStore.user.name }}</strong>
</template>
<script setup>
  import { onMounted } from 'vue';
  import { useAuth } from "@/store/auth";
  
  const userStore = useAuth();

  onMounted(() => {
    if (userStore.user) {
      console.log('Data User yang login ', userStore.user);
    }
});

</script>
<style lang="">
    
</style>