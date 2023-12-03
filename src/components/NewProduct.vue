<template lang="">
<section class="my-lg-14 my-8">
    <div class="container ">
        <div class="row">
            <div class="col-12 mb-6">
                <h3 class="mb-0">Produk Terbaru</h3>
            </div>
        </div>
        <div v-if="productStore.products.length === 0" class="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3">
      <!-- Jika tidak ada produk, tampilkan placeholder -->
      <div v-for="(item, index) in 10" :key="index" class="col">
        <product-placeholder></product-placeholder>
      </div>
    </div>

    <div v-else class="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3">
      <!-- Jika ada produk, tampilkan produk sesuai data yang dimiliki -->
      <div v-for="product in productStore.products" :key="product.id" class="col">
        <product-card :product="product"></product-card>
      </div>
    </div>
            
        
    </div>
</section>
</template>
<script setup>
import { onMounted } from 'vue';
import { useProducts } from "@/store/products";

const productStore = useProducts();


onMounted(() => {
  productStore.fetchDataProducts();
});
</script>
<style lang="">
    
</style>