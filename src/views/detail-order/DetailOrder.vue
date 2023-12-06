<template lang="">
    <br>
    <br>
    <br>
<section class="mb-lg-14 mb-8 mt-5">
            <div class="container">
               <!-- row -->
               <div class="row">
                  <!-- col -->
                  <div class="col-12">
                     <div>
                        <div class="mb-8">
                           <!-- text -->
                           <h1 class="fw-bold mb-0">Detail Pemesanan</h1>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

               <div>
                  <!-- row -->
                  <div class="row">
                     <div class="col-lg-6 col-md-12">
                           <div class="px-6 py-4 card shadow-sm">
                              <h5 class=" bg-transparent mb-2">Data Pemesan</h5>
                                <ul>
                                    <li>Nama : {{ orderStore.product.name }}</li>
                                    <li>No. HP : {{ orderStore.product.phone }}</li>
                                    <li>Alamat : {{ orderStore.product.address }}</li>
                                    <li>Toko : {{ orderStore.product.store }}</li>
                                    <li>Metode : {{ orderStore.product.method }}</li>
                                    <li>Tanggal : {{ orderStore.product.created_at }}</li>
                                </ul>
                                <ul>
                                    <li v-for="(item, index) in orderStore.product.items" :key="index">{{ productStore.products[item.product_id].name }} x {{ item.qty }}</li>
                                </ul>
                              <h5 class=" bg-transparent mb-2">Toko & Metode</h5>
                                <ul>
                                    <li>Toko</li>
                                    <li>Metode</li>
                                </ul>
                            </div>
                    </div>
                  </div>

                     <div class="col-12 col-md-12  col-lg-6">
                        <div class="mt-4 mt-lg-0">
                           <div class="card shadow-sm">
                              <h5 class="px-6 py-4 bg-transparent mb-0">Detail Pesanan</h5>
                              <ul class="list-group list-group-flush">
                                 <li>Produk 1</li>
                                 <li>Produk 1</li>
                                 <li>Produk 1</li>
                              </ul>
                           </div>
                        </div>
                     </div>
               </div>
                    </section>                   
</template>
<script setup>
import { useOrder } from '@/store/order'
import { useProducts } from '@/store/products';
import { onMounted } from 'vue'


const orderStore = useOrder()
const productStore = useProducts()


onMounted(() => {
    productStore.fetchDataProducts();
    orderStore.fetchDataOrder(1);
});
</script>


<style lang="css">
</style>