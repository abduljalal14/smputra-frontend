<template lang="">
   PRODUCT LIST
   <hr>
   <router-link :to="{ name: 'add-product' }" class="btn btn-md btn-success rounded shadow border-0 mb-3">ADD NEW PRODUCT</router-link>
<table class="table table-bordered">
                            <thead class="bg-dark text-white">
                                <tr>
                                    <th scope="col">Image</th> 
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col" style="width:15%">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-if="productStore.products.length == 0">
                                    <td colspan="4" class="text-center">
                                        <div class="alert alert-danger mb-0">
                                            Data Belum Tersedia!
                                        </div>
                                    </td>
                                </tr>
                                <tr v-else v-for="(product, index) in productStore.products" :key="index">
                                    <td class="text-center">
                                        <img :src="product.image" width="200" class="rounded-3"/>
                                    </td>
                                    <td>{{ product.name }}</td>
                                    <td>{{ product.price }}</td>
                                    <td class="text-center">
                                        <router-link :to="{ name: 'edit-product', params:{id: product.id} }" class="btn btn-sm btn-primary rounded-sm shadow border-0 me-2">EDIT</router-link>
                                        <button  @click.prevent="confirmDelete(product.id)" class="btn btn-sm btn-danger rounded-sm shadow border-0">DELETE</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <!-- Pagination -->
    <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item" :class="{ 'disabled': productStore.currentPage === 1 }">
            <a class="page-link" @click="productStore.fetchDataProducts(productStore.currentPage - 1)" :disabled="productStore.currentPage === 1" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item" v-for="page in productStore.lastPage" :key="page" :class="{ 'active': productStore.currentPage === page }">
            <a class="page-link" @click="productStore.fetchDataProducts(page)">{{ page }}</a>
          </li>
          <li class="page-item" :class="{ 'disabled': productStore.currentPage === productStore.lastPage }">
            <a class="page-link" @click="productStore.fetchDataProducts(productStore.currentPage + 1)" :disabled="productStore.currentPage === productStore.lastPage" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>

</template>

<script setup>
    import { useProducts } from "@/store/products"
    import { onMounted } from 'vue';

    const productStore = useProducts()

    const confirmDelete = (productId) => {
      if (window.confirm("Are you sure you want to delete this product?")) {
        productStore.deleteProduct(productId)
      }
    };

    onMounted(() => {
        productStore.fetchDataProducts();
    });
</script>

<style>
  .page-link:hover {
    cursor: pointer;
  }
</style>