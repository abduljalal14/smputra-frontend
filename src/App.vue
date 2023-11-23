<template>
  <div id="app">
    <NavbarView />
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarView from './components/NavbarView.vue'
  export default {
    components: {
      NavbarView
    },
    name: 'App',

    data() {
      return {
        loggedIn: null
      }
    },

    methods: {
      getLoggedIn() {
        this.loggedIn = localStorage.getItem("loggedIn")
      }
    },

    watch: {
      $route: {
        immediate: true,
        handler() {
          this.getLoggedIn()
        }
      }
    },

  }
</script>