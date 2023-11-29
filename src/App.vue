<template>
  <div id="app">
    <NavbarView />
    <router-view></router-view>
    <FooterView />
  </div>
</template>

<script>
import NavbarView from './components/NavbarBaru.vue'
import FooterView from '@/components/FooterView.vue'
  export default {
    components: {
      NavbarView,
      FooterView

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