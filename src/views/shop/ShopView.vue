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
                                 <li v-for="(item, index) in 10" :key="index"  class="nav-item border-bottom w-100">
                                    <a href="#" class="nav-link collapsed">
                                       Kategori {{ item }}
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
                           <h2 class="mb-0 fs-1">Kategori Saat Ini</h2>
                        </div>
                     </div>
                     <!-- list icon -->
                     <div class="d-lg-flex justify-content-between align-items-center">
                        <div class="mb-3 mb-lg-0">
                           <p class="mb-0">
                              <span class="text-dark">24</span>
                              Products found
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
                     
                     <div v-if="productStore.products.length === 0" class="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">
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
                           <!-- nav -->
                           <nav>
                              <ul class="pagination">
                                 <li class="page-item disabled">
                                    <a class="page-link mx-1" href="#" aria-label="Previous">
                                       <i class="feather-icon icon-chevron-left"></i>
                                    </a>
                                 </li>
                                 <li class="page-item"><a class="page-link mx-1 active" href="#">1</a></li>
                                 <li class="page-item"><a class="page-link mx-1" href="#">2</a></li>

                                 <li class="page-item"><a class="page-link mx-1" href="#">...</a></li>
                                 <li class="page-item"><a class="page-link mx-1" href="#">12</a></li>
                                 <li class="page-item">
                                    <a class="page-link mx-1" href="#" aria-label="Next">
                                       <i class="feather-icon icon-chevron-right"></i>
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
import { onMounted } from 'vue';
import { useProducts } from "@/store/products";

const productStore = useProducts();


onMounted(() => {
  productStore.fetchDataProducts();
});
</script>
<style lang="">
    
</style>