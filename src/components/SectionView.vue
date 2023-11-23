<template lang="">
    <!-- Section-->
    <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        <div v-for="product in products" :key="product.id" class="col mb-5">
            <div class="card h-100">
                <!-- Product image-->
                <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                <!-- Product details-->
                <div class="card-body p-4">
                    <div class="text-center">
                        <!-- Product name-->
                        <h5 class="fw-bolder">{{ product.name }}</h5>
                        <!-- Product price-->
                        {{ product.price }}
                    </div>
                </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Tambah ke Keranjang</a></div>
                </div>
            </div>
        </div>
    </div>
</div>

        </section>
</template>
<script setup>
import { ref, onMounted } from 'vue';

//import api
import api from '../api';

//variable produk
const products = ref([]);

//method fetchDataproducts
const fetchDataProducts = async () => {
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
<style></style>