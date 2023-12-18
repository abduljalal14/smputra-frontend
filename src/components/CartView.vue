<template lang="">
<div v-if="cartStore.cartItems.length === 0">
 <!-- alert -->
 <div class="alert alert-danger p-2" role="alert">
   Keranjangmu masih kosong, tambah produk untuk isi keranjangmu
</div >
<div class="mt-3 mt-lg-0">
         <div class="d-flex justify-content-between mt-4">
                  <button data-bs-dismiss="offcanvas" class="btn btn-primary">
                     <router-link :to="{ name: 'shop' }" class="btn btn-primary">Belanja Sekarang</router-link>
                  </button>
         </div>
		</div>
</div >
<div v-else>
               <ul class="list-group list-group-flush">
                  <!-- list group -->
                  <li v-for="(cartItem, index) in cartStore.cartItems" :key="index" class="list-group-item py-3 ps-0 border-top">
                     <!-- row -->
                     <div class="row align-items-center">
                        <div class="col-5 col-md-5 col-lg-6">
                           <div class="d-flex">
                              <img v-bind:src="productStore.products.find(product => product.id === cartItem.product_id).image" alt="Ecommerce" class="icon-shape icon-xxl">
                              <div class="ms-3">
                                 <!-- title -->
                                 <a href="./pages/shop-single.html" class="text-inherit">
                                    <h6 class="mb-0">{{ productStore.products.find(product => product.id === cartItem.product_id).name }}</h6>
                                 </a>
                                 <span><small class="text-muted">Rp {{ productStore.products.find(product => product.id === cartItem.product_id).price }}</small></span>
                                 <!-- text -->
                                 <div class="mt-2 small lh-1">
                                    <a href="#!" class="text-decoration-none text-inherit text-danger"  @click="cartStore.deleteCartItem(cartItem.product_id)">
                                       <span class="me-1 align-text-bottom">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2 text-success">
                                             <polyline points="3 6 5 6 21 6"></polyline>
                                             <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                             <line x1="10" y1="11" x2="10" y2="17"></line>
                                             <line x1="14" y1="11" x2="14" y2="17"></line>
                                          </svg>
                                       </span>
                                       <span class="text-muted">Remove</span>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <!-- input group -->
                        <div class="col-4 col-md-3 col-lg-3">
                           <!-- input -->
                           <!-- input -->
                           <div class="input-group input-spinner">
                              <input type="button" value="-" class="button-minus btn btn-sm" data-field="quantity" @click="cartStore.decreaseQty(cartItem)">
                              <input type="number" step="1" max="10" v-model="cartItem.qty" name="quantity" class="quantity-field form-control-sm form-input">
                              <input type="button" value="+" class="button-plus btn btn-sm" data-field="quantity" @click="cartStore.increaseQty(cartItem)">
                           </div>
                        </div>
                        <!-- price -->
                        <div class="col-3 text-lg-end text-start text-md-end col-md-3">
                           <span class="fw-bold">Rp {{ productStore.products.find(product => product.id === cartItem.product_id).price * cartItem.qty }}</span>
                        </div>
                     </div>
                  </li>
               </ul>
               <!-- btn -->
               <div class="d-flex justify-content-between mt-4">
                  <button data-bs-dismiss="offcanvas" class="btn btn-primary">
                     <router-link :to="{ name: 'checkout' }" class="btn btn-primary">Lanjut ke Checkout</router-link>
                  </button>
               </div>
            </div>
</template>
<script setup>
import { useCart } from '@/store/cart'
import { useProducts } from '@/store/products'

const productStore = useProducts()
const cartStore = useCart()

</script>
<style lang="">
    
</style>