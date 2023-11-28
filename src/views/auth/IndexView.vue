<template>
    <div class="login">
      <div class="container" style="margin-top: 100px">
        <div class="row justify-content-center">
          <div class="col-md-5">
            <div v-if="userStore.loginFailed" class="alert alert-danger">
              Email atau Password Anda salah.
            </div>
            <div class="card">
              <div class="card-body">
                LOGIN
                <hr>
                <form @submit.prevent="loginUser">
                  <div class="form-group">
                    <label>EMAIL</label>
                    <input type="email" class="form-control" v-model="userStore.user.email" placeholder="Masukkan Email">
                    <div v-if="userStore.validation.email" class="mt-2 alert alert-danger">
                      Masukkan Email
                    </div>
                  </div>
                  <div class="form-group">
                    <label>PASSWORD</label>
                    <input type="password" class="form-control" v-model="userStore.user.password" placeholder="Masukkan Password">
                    <div v-if="userStore.validation.password" class="mt-2 alert alert-danger">
                      Masukkan Password
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary">LOGIN</button>
                </form>
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
  import { useRouter } from 'vue-router';
  const router = useRouter();
  
  const userStore = useAuth();
  
  // check user already logged in
  onMounted(() => {
    if (userStore.loggedIn) {
      // Redirect to dashboard using the router instance
      router.push({ name: 'dashboard' });
    }
  });
  
  // Handle the login action
const loginUser = async () => {
  await userStore.login(router);
};
  
  </script>
  