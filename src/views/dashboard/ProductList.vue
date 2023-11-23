<template lang="">
   PRODUCT LIST
   <hr>
<table class="table table-bordered">
                            <thead class="bg-dark text-white">
                                <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col" style="width:15%">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-if="products.length == 0">
                                    <td colspan="4" class="text-center">
                                        <div class="alert alert-danger mb-0">
                                            Data Belum Tersedia!
                                        </div>
                                    </td>
                                </tr>
                                <tr v-else v-for="(product, index) in products" :key="index">
                                    <td class="text-center">
                                        <img :src="product.image" width="200" class="rounded-3"/>
                                    </td>
                                    <td>{{ product.name }}</td>
                                    <td>{{ product.price }}</td>
                                    <td class="text-center">
                                        <!-- <router-link :to="{ name: 'products.edit', params:{id: product.id} }" class="btn btn-sm btn-primary rounded-sm shadow border-0 me-2">EDIT</router-link> -->
                                        <button class="btn btn-sm btn-danger rounded-sm shadow border-0">DELETE</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

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