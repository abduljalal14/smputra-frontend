<template lang="">
<div class="row">
 <div class="col-md-6">
 <!-- img slide -->
 <div class="product" id="product">
    <div class="zoom"
       style="background-image: url(../assets/images/products/product-single-img-1.jpg)">
       <!-- img -->
       <img v-bind:src="props.product.image" alt="">
    </div>
 </div>
 <!-- product tools -->
 <div class="product-tools">
 </div>
 </div>
 <div class="col-md-6">
 <div class="ps-lg-10 mt-6 mt-md-0">
    <!-- content -->
    <Small>{{ props.product.category.name }}</Small>
    <!-- heading -->
    <h1 class="mb-1">{{ props.product.name }}</h1>
    <div class="fs-4">
       <!-- price --><span class="fw-bold text-dark">Rp {{ props.product.price }}</span> 
    </div>
    <!-- hr -->
    <!-- hr -->
    <hr class="my-6">
    <div>
       <!-- table -->
       <table class="table table-borderless">
          <tbody>
             <tr>
                <td>Kategori:</td>
                <td>{{ props.product.category.name }}</td>
             </tr>
          </tbody>
       </table>
    </div>
 </div>
</div>
</div>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps(['product']);

</script>
<style lang="">
    
</style>