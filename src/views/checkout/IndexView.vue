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
                              <h5 class=" bg-transparent mb-2">Isi Form Pemesan</h5>
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
                                          <span class="fw-bold">{{ formatPrice(cartItem.subtotal) }}</span>
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
           <span>{{ formatPrice(cartStore.calculateTotalSubtotal) }}</span>
        </li>
        <!-- list group item -->
   <li v-if="orderStore.orderMethod == 'COD'" class="list-group-item d-flex justify-content-between align-items-start">
      <div class="me-auto">
         <div>Biaya Ongkir</div>
      </div>
      <span>Rp. {{ orderStore.ongkir }}</span>
   </li>
   <!-- list group item -->
   <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="me-auto">
         <div class="fw-bold">Total</div>
      </div>
      <span v-if="orderStore.orderMethod != 'COD'" class="fw-bold">{{ formatPrice(cartStore.calculateTotalSubtotal) }}</span>
      <span v-else class="fw-bold">{{ formatPrice(cartStore.calculateTotalSubtotal+orderStore.ongkir) }}</span>
   </li>
    </ul>
 </div>
 <div class="d-grid mb-1 mt-4">
    <!-- btn -->
<div v-if="orderStore.invalid || cartStore.cartItems.length === 0" class="alert alert-danger" role="alert">Lengkapi Data untuk melakukan Checkout</div>
   <button v-else class="btn btn-primary btn-lg d-flex justify-content-between align-items-center" type="submit" data-bs-toggle="modal" data-bs-target="#detailOrderModal">
    Go to Checkout 
    <span v-if="orderStore.orderMethod == 'COD'" class="fw-bold">{{ formatPrice(cartStore.calculateTotalSubtotal+orderStore.ongkir) }}</span>
    <span v-else class="fw-bold">{{ formatPrice(cartStore.calculateTotalSubtotal) }}</span>
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
  <div class="modal-dialog modal-sm modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Data Pemesan</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <pre>
            <h3 class="text-center">INVOICE</h3>
            <ul class="list-group">
            <li class="list-group-item active">Detail Customer</li>
            <li class="list-group-item">Nama    : {{ orderStore.customerName }}</li>
            <li class="list-group-item">No. HP  : {{ orderStore.customerPhone }}</li>
            <li class="list-group-item">Alamat  : {{ orderStore.customerAddres }}</li>
            <li class="list-group-item active">Toko & Metode</li>
            <li class="list-group-item">Toko    : {{ orderStore.storeLocation }}</li>
            <li class="list-group-item">Metode  : {{ orderStore.orderMethod }}</li>
            <li class="list-group-item active">Daftar Belanjaan</li>
            <li v-for="(cartItem, index) in cartStore.cartItems" :key="index" class="list-group-item">{{ cartItem.product.name }} {{ cartItem.qty }}x@{{ cartItem.product.price }} : {{ cartItem.product.price* cartItem.qty }}</li>
            
            <li v-if="orderStore.orderMethod == 'COD'" class="list-group-item">Ongkos Kirim  : {{ orderStore.ongkir }}</li>
            <li v-if="orderStore.orderMethod == 'COD'" class="list-group-item active"><h4 class="ml-auto" >Total  : {{ formatPrice(cartStore.calculateTotalSubtotal+orderStore.ongkir) }}</h4></li>
            <li v-else class="list-group-item active"><h4 class="ml-auto" >Total  : {{ formatPrice(cartStore.calculateTotalSubtotal) }}</h4></li>
         </ul> 
        </pre>
      </div>
      <div class="modal-footer">
         <div data-bs-dismiss="modal" >
            <button @click="makeOrder()" type="submit" class="btn btn-success btn-lg d-flex justify-content-between align-items-center">Buat Pesanan</button>
         </div>
      </div>
    </div>
  </div>
</div>
</template>
<script setup>
import { useCart } from '@/store/cart'
import { formatPrice } from "@/utils/currency";
import { useOrder } from '@/store/order'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useContact } from '@/store/contact'

const cartStore = useCart()

const router = useRouter()
const orderStore = useOrder()

const contactStore = useContact()


const makeOrder = () => {
   const listItem = ref(``);
   const grandTotal = ref();

   if (orderStore.orderMethod == 'COD') {
      grandTotal.value = cartStore.calculateTotalSubtotal+orderStore.ongkir
   } else {
      grandTotal.value = cartStore.calculateTotalSubtotal
   }
   orderStore.storeOrder(router, cartStore.cartItems)
   orderStore.fetchDataOrderById(orderStore.orderId)
       cartStore.cartItems.forEach(cartItem => {
       listItem.value += `- ${cartItem.product.name} ${cartItem.qty}x@${cartItem.product.price} : Rp. ${cartItem.qty*cartItem.product.price}\n`;
       });   
  contactStore.openWhatsApp(orderStore.customerName,orderStore.customerPhone,orderStore.customerAddres,orderStore.storeLocation,orderStore.orderMethod,cartStore.cartItems,grandTotal.value,orderStore.orderId,listItem.value)
  cartStore.reset()
  orderStore.reset()
};
  





</script>


<style lang="css">
.whatsapp-ico{
    fill: white;
    width: 50px;
    height: 50px;
    padding: 3px;
    background-color: #4dc247;
    border-radius: 50%;
    box-shadow: 2px 2px 6px rgba(0,0,0,0.4);
    /* box-shadow: 2px 2px 11px rgba(0,0,0,0.7); */
    position: fixed;
    bottom: 20px;
    right : 20px;
    z-index: 10;
}

.whatsapp-ico:hover{
    box-shadow: 2px 2px 11px rgba(0,0,0,0.7);
}
</style>