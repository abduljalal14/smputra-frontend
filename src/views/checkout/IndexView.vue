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
                           <h1 class="fw-bold mb-0">Checkout</h1>
                        </div>
                     </div>
                  </div>
               </div>
               <div>
                  <!-- row -->
                  <div class="row">
                     <div class="col-lg-6 col-md-12">
                           <div class="px-6 py-4 card shadow-sm">
                              <h5 class=" bg-transparent mb-2">Data Diri dan Metode</h5>
                        <!-- Nama -->
                        <div class="mb-3">
                        <label class="form-label" for="textInput">Nama</label>
                        <input v-model="orderStore.customerName" type="text" id="name-input" class="form-control" placeholder="Nama">
                        </div>
                        <!-- Phone Input -->
                        <div class="mb-3">
                        <label for="telinput" class="form-label">No. Handphone</label>
                        <input v-model="orderStore.customerPhone" class="form-control" type="tel" id="telinput">
                        </div>
                        <!-- Textarea -->
                        <div class="mb-3">
                        <label for="textarea-input" class="form-label">Alamat Lengkap</label>
                        <textarea v-model="orderStore.customerAddres" class="form-control" id="addres-input" rows="5"></textarea>
                        </div>

                        <!-- Pilih Toko -->
                        <div class="mb-3">
                        <label class="form-label" for="selectOne">Pilih Toko</label>
                        <select v-model="orderStore.storeLocation" class="form-select" aria-label="Default select example">
                            <option value="Sari Mulya Pasarbatang">Toko Sari Mulya Pasarbatang</option>
                            <option value="Sari Mulya Limbangan">Toko Sari Mulya Limbangan</option>
                        </select>
                        </div>
                        <!-- Pilih Metode -->
                        <div class="mb-3">
                        <label class="form-label" for="selectOne">Pilih Metode Pengiriman</label>
                        <select v-model="orderStore.orderMethod" class="form-select" aria-label="Default select example">
                            <option value="COD">COD</option>
                            <option value="Ambil ke Toko">Ambil ke Toko</option>
                        </select>
                        </div>
                     </div>
                        </div>

                     <div class="col-12 col-md-12  col-lg-6">
                        <div class="mt-4 mt-lg-0">
                           <div class="card shadow-sm">
                              <h5 class="px-6 py-4 bg-transparent mb-0">Detail Pesanan</h5>
                              <ul class="list-group list-group-flush">
                                 <!-- list group item -->
                                 <li v-for="(cartItem, index) in cartStore.cartItems" :key="index" class="list-group-item px-4 py-3">
                                    <div class="row align-items-center">
                                       <div class="col-2 col-md-2">
                                          <img v-bind:src="cartItem.product.image" alt="Ecommerce" class="img-fluid">
                                       </div>
                                       <div class="col-5 col-md-5">
                                          <h6 class="mb-0">{{ cartItem.product.name }}</h6>
                                          <span><small class="text-muted">{{ cartItem.product.category.name }}</small></span>
                                       </div>
                                       <div class="col-2 col-md-2 text-center text-muted">
                                          <span>{{  cartItem.qty }}</span>
                                       </div>
                                       <div class="col-3 text-lg-end text-start text-md-end col-md-3">
                                          <span class="fw-bold">Rp {{ cartItem.total }}</span>
                                       </div>
                                    </div>
                                 </li>
                              </ul>

                              <h5 class="px-6 py-4 bg-transparent mb-0">Keterangan</h5>
                              <div class="card mb-2">
     <!-- list group -->
     <ul class="list-group list-group-flush">
        <!-- list group item -->
        <li class="list-group-item d-flex justify-content-between align-items-start">
           <div class="me-auto">
              <div>Item Subtotal</div>
           </div>
           <span>Rp {{ cartStore.subtotal }}</span>
        </li>
        <!-- list group item -->
   <li v-if="orderStore.orderMethod == 'COD'" class="list-group-item d-flex justify-content-between align-items-start">
      <div class="me-auto">
         <div>Biaya Ongkir</div>
      </div>
      <span>Rp. 3.000</span>
   </li>
   <!-- list group item -->
   <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="me-auto">
         <div class="fw-bold">Total</div>
      </div>
      <span v-if="orderStore.orderMethod != 'COD'" class="fw-bold">Rp. {{ cartStore.subtotal }}</span>
      <span v-else class="fw-bold">Rp. {{ cartStore.subtotal+3000 }}</span>
   </li>
    </ul>
 </div>
 <div class="d-grid mb-1 mt-4">
    <!-- btn -->
    
   <div v-if="orderStore.customerName == '' && orderStore.customerAddres == '' && orderStore.customerPhone == ''" class="alert alert-danger" role="alert">Lengkapi Data untuk melakukan Checkout</div>
   <button v-else class="btn btn-primary btn-lg d-flex justify-content-between align-items-center" type="submit" data-bs-toggle="modal" data-bs-target="#detailOrderModal">
    Go to Checkout 
    <span class="fw-bold">Rp. {{ cartStore.subtotal }}</span>
   </button>
 </div>
                              
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

<!-- detail accept order  -->
<div class="modal fade" id="detailOrderModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Data Pemesan</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <pre>
            <h3 class="text-center">INVOICE</h3>
            <ul class="list-group">
            <li class="list-group-item">Nama    : {{ orderStore.customerName }}</li>
            <li class="list-group-item">No. HP  : {{ orderStore.customerPhone }}</li>
            <li class="list-group-item">Alamat  : {{ orderStore.customerAddres }}</li>
            <li class="list-group-item">Toko    : {{ orderStore.storeLocation }}</li>
            <li class="list-group-item">Metode  : {{ orderStore.orderMethod }}</li>
            </ul>
        </pre>
      </div>
    </div>
  </div>
</div>
</template>
<script setup>
import { useCart } from '@/store/cart'
import { useOrder } from '@/store/order'
import { watchEffect } from 'vue';

const cartStore = useCart()
const orderStore = useOrder()

watchEffect(() => {
  // Hitung subtotal setiap kali cartItems berubah
  cartStore.subtotal = cartStore.cartItems.reduce((total, item) => {
    return total + Math.floor(item.total);
  }, 0);
});


</script>
<style lang="">
    
</style>