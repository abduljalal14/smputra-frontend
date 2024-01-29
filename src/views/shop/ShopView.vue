<template lang="">
   <br>
   <br>
   <br>
<main class="mt-5">

         <!-- section -->
         <div class="mt-8 mb-lg-14 mb-8">
            <!-- container -->
            <div class="container">
               <!-- row -->
               <div class="row gx-10">
                  <!-- col -->
                  <aside class="col-lg-3 col-md-4 mb-6 mb-md-0">
                     <div class="offcanvas offcanvas-start offcanvas-collapse w-md-50" tabindex="-1" id="offcanvasCategory" aria-labelledby="offcanvasCategoryLabel">
                        <div class="offcanvas-header d-lg-none">
                           <h5 class="offcanvas-title" id="offcanvasCategoryLabel">Filter</h5>
                           <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body ps-lg-2 pt-lg-0">
                           <div class="mb-8">
                              <!-- title -->
                              <h5 class="mb-3">Kategori</h5>
                              <!-- nav -->
                              <ul class="nav nav-category" id="categoryCollapseMenu">
                                 <li class="nav-item border-bottom w-100">
                                    <a href="#" class="nav-link collapsed" @click="categoryStore.selectedCategory=null">
                                       Semua Kategori
                                    </a>
                                 </li>
                                 <li v-for="(category, index) in categoryStore.categories" :key="index"  class="nav-item border-bottom w-100">
                                    <a href="#" class="nav-link collapsed" @click="categoryStore.setSelectedCategory(category)" data-bs-dismiss="offcanvas">
                                       {{ category.name }}
                                    </a>          
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </aside>


                  <section class="col-lg-9 col-md-12">
                     <!-- card -->
                     <div class="card mb-4 bg-light border-0">
                        <!-- card body -->
                        <div class="card-body p-9">
                           <h2 v-if="categoryStore.selectedCategory == null" class="mb-0 fs-1">Semua Kategori</h2>
                           <h2 v-if="categoryStore.selectedCategory" class="mb-0 fs-1">Kategori: {{ categoryStore.selectedCategory.name }}</h2>
                        </div>
                     </div>
                     <!-- list icon -->
                     <div class="d-lg-flex justify-content-between align-items-center">
                        <div class="mb-3 mb-lg-0">
                           <p class="mb-0">
                              <span v-if="productStore.query!=''" class="text-dark">Cari : {{ productStore.query }}. </span><span class="text-dark"> {{ productStore.products.length }}</span>
                              Produk ditemukan
                           </p>
                        </div>

                        <!-- icon -->
                        <div class="d-md-flex justify-content-between align-items-center">
                           <div class="d-flex align-items-center justify-content-between">
                              <div class="ms-2 d-lg-none">
                                 <a class="btn btn-outline-gray-400 text-muted" data-bs-toggle="offcanvas" href="#offcanvasCategory" role="button" aria-controls="offcanvasCategory">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-filter me-2">
                                       <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                                    </svg>
                                    Kategori
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>

                    <!-- Product List -->
                     <!-- row -->
                     
                     <div v-if="productStore.products === 0" class="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">
                        <!-- Jika tidak ada produk, tampilkan placeholder -->
                        <div v-for="(item, index) in 10" :key="index" class="col">
                        <product-placeholder></product-placeholder>
                        </div>
                     </div>

                     <div v-else class="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">
                        <!-- Jika ada produk, tampilkan produk sesuai data yang dimiliki -->
                        <div v-for="product in productStore.products" :key="product.id" class="col">
                        <product-card :product="product"></product-card>
                     </div>
                     </div>


                     <div class="row mt-8">
                        <div class="col">


                           <!-- Pagination -->
    <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item" :class="{ 'disabled': productStore.currentPage === 1 }">
            <a class="page-link mx-1" @click="productStore.fetchDataProducts(productStore.currentPage - 1)" :disabled="productStore.currentPage === 1" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item" v-for="page in productStore.lastPage" :key="page" :class="{ 'active': productStore.currentPage === page }">
            <a class="page-link mx-1" @click="productStore.fetchDataProducts(page)">{{ page }}</a>
          </li>
          <li class="page-item" :class="{ 'disabled': productStore.currentPage === productStore.lastPage }">
            <a class="page-link mx-1" @click="productStore.fetchDataProducts(productStore.currentPage + 1)" :disabled="productStore.currentPage === productStore.lastPage" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
               
                        </div>
                     </div>
                  </section>
               </div>
            </div>
         </div>
      </main>


</template>
<script setup>
import { onMounted, watch } from 'vue';
import { useProducts } from "@/store/products";
import { useCategory } from "@/store/categories";


const productStore = useProducts();
const categoryStore = useCategory();

function search() {
  productStore.fetchDataProducts(productStore.currentPage, productStore.query, categoryStore.selectedCategory);
}
function search2() {
   productStore.query = ''
  productStore.fetchDataProducts(productStore.currentPage, productStore.query, categoryStore.selectedCategory);
}

watch(() => categoryStore.selectedCategory, () => {
  search2(); // Mencari produk setiap kali kategori berubah
});


onMounted(() => {
   categoryStore.fetchDataCategory()
  search();
});
</script>
<style lang="">
    
</style>