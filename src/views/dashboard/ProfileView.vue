<template lang="">
   DASHBOARD
   <hr>
   Selamat Datang <strong>{{ user.name }}</strong>
</template>
<script>
import axios from 'axios'
export default {
    name: 'ProfileVIew',
    data() {
        return {
            //state loggedIn with localStorage
            loggedIn: localStorage.getItem('loggedIn'),
            //state token
            token: localStorage.getItem('token'),
            //state user logged In
            user: []
        }
    },

    created() {
        axios.get('http://localhost:8000/api/user', {headers: {'Authorization': 'Bearer '+this.token}})
        .then(response => {
            console.log(response)
            this.user = response.data // assign response to state user
        })
    },
    //check user logged in or not
    mounted() {
        if(!this.loggedIn) {
            return this.$router.push({ name: 'login' })
        }
    }
}
</script>
<style lang="">
    
</style>