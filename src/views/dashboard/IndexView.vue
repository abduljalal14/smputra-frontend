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
                  <li @click="logoutUser" class="list-group-item text-dark text-decoration-none" style="cursor: pointer">LOGOUT</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card">
              <div class="card-body">
                <router-view :userData="userStore.user" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { useAuth } from "@/store/auth";
  import { useRouter } from "vue-router";
  
  const userStore = useAuth();
  const router = useRouter();
  
  // Fetch user data when the component is mounted
  onMounted(async () => {
    try {
        if (!userStore.loggedIn) {
        router.push({ name: 'login' });
      }
      await userStore.fetchDataUser();
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  });
  
  const logoutUser = async () => {
    try {
      // Use router directly from the import
      await userStore.logout();
      // After successful logout, redirect to login page
      router.push({ name: 'login' });
    } catch (error) {
      console.error('Error during logout:', error);
      // Handle error (optional)
    }
  };
  </script>