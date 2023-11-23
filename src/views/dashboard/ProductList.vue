<template lang="">

        PRODUCT LIST

</template>

<script setup>

    //import ref and onMounted
    import { ref, onMounted } from 'vue';

    //import api
    import api from '../../api';

    //define state
    const products = ref([]);

    //method fetchDataproducts
    const fetchDataProducts = async () => {

        //fetch data 
        await api.get('/api/products')

        .then(response => {

            //set response data to state "products"
            products.value = response.data.data.data

        });
    }

    //run hook "onMounted"
    onMounted(() => {

        //call method "fetchDataproducts"
        fetchDataProducts();
    });

</script>

<style lang="">
    
</style>