<template>
    <div class="dashboard" style="margin-top: 80px">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                MAIN MENU
                <hr />
                <ul class="list-group">
                  <router-link :to="{ name: 'profile' }" class="list-group-item text-dark text-decoration-none">PROFILE</router-link>
                  <router-link :to="{ name: 'products' }" class="list-group-item text-dark text-decoration-none">PRODUCT LIST</router-link>
                  <router-link :to="{ name: 'categories' }" class="list-group-item text-dark text-decoration-none">CATEGORY LIST</router-link>
                  <router-link :to="{ name: 'orders' }" class="list-group-item text-dark text-decoration-none">ORDER LIST</router-link>
                  <li @click="userStore.logout(router)" class="list-group-item text-dark text-decoration-none" style="cursor: pointer">LOGOUT</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card">
              <div class="card-body">
                <router-view />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, watch } from 'vue';
  import { useAuth } from "@/store/auth";
  import { useRouter } from "vue-router";
  
  const userStore = useAuth();
  const router = useRouter();
  
  // Fetch user data when the component is mounted
  onMounted(async () => {
      if (!userStore.loggedIn) {
      router.push({ name: 'login' });
      }
      await userStore.fetchDataUser();
      console.log("test 4 passed", userStore.user.name)
  });

  watch(() => userStore.loggedIn, () => {
    if (!userStore.loggedIn) {
        router.push({ name: 'login' });
  }});


  </script>