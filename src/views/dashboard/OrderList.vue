<template lang="">
    ORDER LIST
    <hr>
 <table class="table table-bordered">
                             <thead class="bg-dark text-white">
                                 <tr>
                                     <th scope="col">Order ID</th> 
                                     <th scope="col">Name</th> 
                                     <th scope="col">Tanggal Order</th>
                                     <th scope="col" style="width:30%">Actions</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 <tr v-if="orderStore.orders.length == 0">
                                     <td colspan="4" class="text-center">
                                         <div class="alert alert-danger mb-0">
                                             Data Belum Tersedia!
                                         </div>
                                     </td>
                                 </tr>
                                 <tr v-else v-for="(order, index) in orderStore.orders" :key="index">
                                     <td>{{ order.order_id }}</td>
                                     <td>{{ order.customer_name }}</td>
                                     <td>{{ order.created_at }}</td>
                                     <td class="text-center">
                                         <button @click="deleteOrder(order.id)" class="btn btn-sm btn-danger rounded-sm shadow border-0 me-2">DELETE</button>
                                         <button @click="detailOrder(order)" data-bs-toggle="modal" data-bs-target="#detailOrderModal" class="btn btn-sm btn-primary rounded-sm shadow border-0 me-2">DETAIL</button>
                                     </td>
                                 </tr>
                             </tbody>
                         </table>

<!-- Modal Show -->
<div class="modal fade" id="detailOrderModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Detail Order</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="px-6 py-4 card shadow-sm">
                  
                  <h5 class=" bg-transparent mt-2 text-primary">Informasi Pengiriman</h5>
                  <h6 class=" bg-transparent">{{ orderStore.order.shipping_method }} - ID Pemesanan: {{ orderStore.order.order_id }}</h6>
                  
                  <h5 class=" bg-transparent mt-2 text-primary">Alamat Pengiriman</h5>
                  <h6 class=" bg-transparent">{{ orderStore.order.customer_name }}</h6>
                  <h6 class=" bg-transparent">{{ orderStore.order.customer_phone }}</h6>
                  <h6 class=" bg-transparent">{{ orderStore.order.customer_address }}</h6>

                  <h5 class="px-6 py-4 bg-transparent mb-0 text-primary" >Rincian Item</h5>
                     <ul class="list-group list-group-flush">
                        <!-- list group item -->
                         <!-- list group item -->
                         <li v-for="(item, index) in orderStore.order.order_details" :key="index" class="list-group-item px-4 py-3">
                           <div class="row align-items-center"> 
                              <div class="col-2 col-md-2">
                                 <img v-bind:src="item.product.image" alt="Ecommerce" class="img-fluid">
                              </div>
                              <div class="col-5 col-md-5">
                                 <h6 class="mb-0">{{ item.product.name }}</h6>
                                 <!-- <span><small class="text-muted">{{ item.product.category.name }}</small></span> -->
                              </div>
                              <div class="col-2 col-md-2 text-center text-muted">
                                 <span>{{  item.qty }}</span>
                              </div>
                              <div class="col-3 text-lg-end text-start text-md-end col-md-3">
                                 <span class="fw-bold">{{ formatPrice(item.product.price * item.qty) }}</span>
                              </div>
                           </div>
                        </li>
                     </ul>
                     <h5 class="px-6 py-4 bg-transparent mb-0 text-primary">Keterangan</h5>
                     <div class="card mb-2">
                        <!-- list group -->
                        <ul class="list-group list-group-flush">
                           <!-- list group item -->
                           <li class="list-group-item d-flex justify-content-between align-items-start">
                              <div class="me-auto">
                                 <div>Item Subtotal</div>
                              </div>
                              <span>{{ formatPrice(subTotal) }}</span>
                           </li>
                           <!-- list group item -->
                           <li v-if="orderStore.order.shipping_method == 'COD'" class="list-group-item d-flex justify-content-between align-items-start">
                              <div class="me-auto">
                                 <div>Biaya Ongkir</div>
                              </div>
                              <span>{{ formatPrice(orderStore.ongkir) }}</span>
                           </li>
                           <!-- list group item -->
                           <li class="list-group-item d-flex justify-content-between align-items-start">
                              <div class="me-auto">
                                 <div class="fw-bold">Total</div>
                              </div>
                              <span v-if="orderStore.order.shipping_method != 'COD'" class="fw-bold">{{ formatPrice(subTotal) }}</span>
                              <span v-else class="fw-bold">{{ formatPrice(subTotal+orderStore.ongkir) }}</span>
                           </li>
                        </ul>
                     </div>
        </div>



      </div>
      <div class="modal-footer">
        <button @click="deleteOrder(order.id)" type="submit" class="btn btn-danger"  data-bs-dismiss="modal">Delete</button> 
      </div>
    </div>
  </div>
</div>

 </template>
 
<script setup>
import { useOrder } from "@/store/order"
import { formatPrice } from "@/utils/currency";
import { useProducts } from '@/store/products';
import { onMounted, ref, watchEffect } from 'vue';

const orderStore = useOrder()
const productStore = useProducts()

const subTotal = ref(0);

const deleteOrder = (categoryId) => {
  if (window.confirm("Kamu yakin ingin menghapus order ini?")) {
    orderStore.deleteCategory(categoryId);
  }
};
const detailOrder = (order) => {
    orderStore.order = order
};


watchEffect(() => {
   try {
      subTotal.value = 0;

      if (orderStore.order && orderStore.order.order_details && productStore.products) {
         orderStore.order.order_details.forEach(item => {
            const product = item.product;
            if (product) {
               subTotal.value += product.price * item.qty;
            }
         });
      }
   } catch (error) {
      console.error('Error in watchEffect:', error);
   }
});

onMounted(() => {
    orderStore.fetchDataOrders();
});

</script>
 
<style lang="">
 </style>