<template lang="">
    CATEGORY LIST
    <hr>
    <button type="button" class="btn btn-md btn-success rounded shadow border-0 mb-3" data-bs-toggle="modal" data-bs-target="#addCategoryModal">ADD NEW CATEGORY</button>
 <table class="table table-bordered">
                             <thead class="bg-dark text-white">
                                 <tr>
                                     <th scope="col">Id</th> 
                                     <th scope="col">Image</th> 
                                     <th scope="col">Category Name</th>
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
                                 <tr v-else v-for="(category, index) in categoryStore.categories" :key="index">
                                     <td>{{ category.id }}</td>
                                     <td class="text-center">
                                        <!-- <img src="../../assets/images/category/category-atta-rice-dal.jpg" width="200" class="rounded-3"/> --> 
                                        <img v-bind:src="category.image" width="200" class="rounded-3"/>
                                     </td>
                                     <td>{{ category.name }}</td>
                                     <td class="text-center">
                                         <button @click="editCategory(category)" data-bs-toggle="modal" data-bs-target="#editCategoryModal" class="btn btn-sm btn-primary rounded-sm shadow border-0 me-2">EDIT</button>
                                         <button @click="confirmDelete(category.id)" class="btn btn-sm btn-danger rounded-sm shadow border-0 me-2">DELETE</button>
                                     </td>
                                 </tr>
                             </tbody>
                         </table>

<!-- Modal Store -->
<div class="modal fade" id="addCategoryModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <form @submit.prevent="categoryStore.storeCategory(router)">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Category</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <div class="mb-3">
            <label for="name" class="form-label">Category Name</label>
            <input v-model="categoryStore.category.name" type="text" class="form-control" id="name"/>
          </div>
          <div class="mb-3">
            <label class="form-label fw-bold">Image</label>
              <input type="file" class="form-control" @change="handleFileChange($event)">
            <!-- <div v-if="categoryStore.errors.image" class="alert alert-danger mt-2">
              <span>{{ categoryStore.errors.image[0] }}</span>
            </div> -->
          </div>         
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary"  data-bs-dismiss="modal">Save changes</button> 
      </div>
    </div>
  </form>
  </div>
</div>

<!-- Modal Update -->
<div class="modal fade" id="editCategoryModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <form @submit.prevent="categoryStore.updateCategory(router)">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit Category</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <div class="mb-3">
            <label class="form-label fw-bold">Image</label>
             <input type="file" class="form-control" @change="handleFileChange($event)">
             <!-- <div v-if="categoryStore.errors.image" class="alert alert-danger mt-2">
                <span>{{ categoryStore.errors.image[0] }}</span>
             </div> -->
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">Category Name</label>
            <input v-model="categoryStore.category.name" type="text" class="form-control" id="name" />
          </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary"  data-bs-dismiss="modal">Save changes</button> 
      </div>
    </div>
  </form>
  </div>
</div>


 
 </template>
 
<script setup>
import { useCategory } from "@/store/categories"
import { onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
//init router
const router = useRouter();
const categoryStore = useCategory()


//method for handle file changes
const handleFileChange = (e) => {
        //assign file to state
        categoryStore.category.image = e.target.files[0];
    };

const editCategory = (category) => {
    categoryStore.category = category
    console.log("Isi categoryEdit: ",categoryStore.category )
    console.log("Isi CategoryName: ",categoryStore.category.name)
    console.log("Isi CategoryId: ", categoryStore.category.id)
};


const confirmDelete = (categoryId) => {
  if (window.confirm("Are you sure you want to delete this category?")) {
    categoryStore.deleteCategory(categoryId);
  }
};

onMounted(() => {
  categoryStore.fetchDataCategory();
});

watch(() => categoryStore.category, () => {
  categoryStore.fetchDataCategory();
});
</script>
 
<style lang="">
 </style>