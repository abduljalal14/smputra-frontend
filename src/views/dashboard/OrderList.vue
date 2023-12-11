<template lang="">
    CATEGORY LIST
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
                                 <tr v-if="categoryStore.categories.length == 0">
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
                                         <button @click="showDetails(order.id)" class="btn btn-sm btn-primary rounded-sm shadow border-0 me-2">DETAIL</button>
                                     </td>
                                 </tr>
                             </tbody>
                         </table>
 </template>
 
<script setup>
import { useOrder } from "@/store/order"
import { onMounted } from 'vue';

const orderStore = useOrder()

const showDetails = (categoryId) => {
  if (window.confirm("Are you sure you want to show?")) {
    orderStore.deleteCategory(categoryId);
  }
};

onMounted(() => {
    orderStore.fetchDataOrders();
});

</script>
 
<style lang="">
 </style>