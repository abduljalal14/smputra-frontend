import { defineStore } from 'pinia';
import api from '../api';

export const useAuth = defineStore({
  id: 'auth',
  state: () => ({
    loggedIn: localStorage.getItem('loggedIn'),
    token: localStorage.getItem('token'),
    user: {},
    validation: [],
    loginFailed: null,
    error: null
  }),
  actions: {
    async fetchDataUser() {
      try {
        const response = await api.get('/api/user', {headers: {'Authorization': 'Bearer '+this.token}})
        this.user = response.data
      } catch (err) {
        this.error = 'Error fetching user data.';
      }
    },
    // login(router) {
    //     if (this.user.email && this.user.password) {
    //         api.get('/sanctum/csrf-cookie')
    //             .then(response => {

    //                 //debug cookie
    //                 console.log(response)

    //                 api.post('/api/login', {
    //                     email: this.user.email,
    //                     password: this.user.password
    //                 }).then(res => {

    //                     //debug user login
    //                     console.log(res)

    //                     if (res.data.success) {

    //                         //set localStorage
    //                         localStorage.setItem("loggedIn", "true")

    //                         //set localStorage Token
    //                         localStorage.setItem("token", res.data.token)

    //                         //change state
    //                         this.loggedIn = true

    //                         //redirect dashboard
    //                         return router.push({ name: 'dashboard' });

    //                     } else {

    //                         //set state login failed
    //                         this.loginFailed = true

    //                     }

    //                 }).catch(error => {
    //                     console.log(error)
    //                 })

    //             })
    //     }

    //     this.validation = []

    //     if (!this.user.email) {
    //         this.validation.email = true
    //     }

    //     if (!this.user.password) {
    //         this.validation.password = true
    //     }

    // },
    login(router) {
      api.post('/api/login', {
        email: this.user.email,
        password: this.user.password
      })
      .then(response => {
        // Simpan token ke localStorage atau di Vuex state jika diperlukan
        localStorage.setItem("loggedIn", "true")
        localStorage.setItem("token", response.data.token)

        this.loggedIn = true
        
        // Redirect ke halaman dashboard atau halaman setelah login
        router.push({ name: 'dashboard' });
      })
      .catch(error => {
        console.error('Login error:', error);
      });
    },

    logout(router) {
        api.get('/api/logout')
          .then(() => {
            localStorage.removeItem('loggedIn');
            this.loggedIn = false
            router.push({ path: "/login" });
          })
          .catch((error) => {
            console.error('Error during logout:', error);
          });
    },
    },
  },
);
