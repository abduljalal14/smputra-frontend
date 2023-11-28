<template lang="">
    CATEGORY LIST
    <hr>
    <router-link :to="{ name: 'add-product' }" class="btn btn-md btn-success rounded shadow border-0 mb-3">ADD NEW CATEGORY</router-link>
 <table class="table table-bordered">
                             <thead class="bg-dark text-white">
                                 <tr>
                                     <th scope="col">Id</th>
                                     <th scope="col">Category Name</th>
                                     <th scope="col" style="width:15%">Actions</th>
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
                                 <tr v-else v-for="(category, index) in categoryStore.categories" :key="index">
                                     <td>{{ category.id }}</td>
                                     <td>{{ category.name }}</td>
                                     <td class="text-center">
                                         <button class="btn btn-sm btn-primary rounded-sm shadow border-0 me-2">EDIT</button>
                                        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
                                     </td>
                                 </tr>
                             </tbody>
                         </table>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
 
 </template>
 
 <script setup>
     import { useCategory } from "@/store/categories"
     import { onMounted } from 'vue';
 
     const categoryStore = useCategory()
 
     onMounted(() => {
         categoryStore.fetchDataCategory();
     });
 </script>
 
 <style lang="">
     
 </style>