<template lang="">
    <!-- Section-->
    <section class="py-5">
      <h1 class="text-center" v-if="selectedCategory===null">All Products</h1>
      <h1 class="text-center" v-else>Kategori : {{ categoryName }}</h1>
        <div class="container px-4 px-lg-5 mt-5">
    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        <div v-for="product in productStore.products" :key="product.id" class="col mb-5">
            <div class="card h-100">
                <!-- Product image-->
                <img class="card-img-top" v-bind:src="product.image" alt="..." />
                <!-- Product details-->
                <div class="card-body p-4">
                    <div class="text-center">
                        <!-- Product name-->
                        <h5 class="fw-bolder">{{ product.name }}</h5>
                        <!-- Product price-->
                        {{ product.price }}
                    </div>
                </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Tambah ke Keranjang</a></div>
                </div>
            </div>
        </div>
    </div>
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
</div>

        </section>
</template>
<script setup>
import { onMounted, watch, ref } from 'vue';
import { useProducts } from "@/store/products";
import { useCategory } from '@/store/categories';

const selectedCategory = ref(null)
const categoryName = ref()
const categoryStore = useCategory();
const productStore = useProducts();


onMounted(() => {
  productStore.fetchDataProducts();
});

watch(() => categoryStore.selectedCategory, () => {
  selectedCategory.value = categoryStore.selectedCategory;

  if (selectedCategory.value !== null && categoryStore.categories[selectedCategory.value-1]) {
    categoryName.value = categoryStore.categories[selectedCategory.value-1]["name"];
    console.log('Selected Name Category:', categoryStore.categories[selectedCategory.value-1]["name"]);
  } else {
    categoryName.value = null; // Atau set ke nilai default yang sesuai
  }

  console.log('Selected Category:', categoryStore.selectedCategory);

});


</script>
<style></style>