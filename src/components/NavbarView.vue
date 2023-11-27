<template lang="">
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <router-link :to="{name: 'home'}" class="navbar-brand">Sarimulya Putra</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><router-link :to="{name: 'home'}" class="nav-link active">Home</router-link></li>
                        <li class="nav-item"><router-link :to="{name: 'about'}" class="nav-link">About</router-link></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Kategori</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li @click="categoryStore.setSelectedCategory(null)"><a class="dropdown-item" href="#!">All Products</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li  v-for="(category) in categoryStore.categories" :key="category.id"><a class="dropdown-item" href="#!" @click="categoryStore.setSelectedCategory(category.id)">{{ category.name }}</a></li>
                            </ul>
                        </li>
                    </ul>
                  <div class="navbar-nav">
                    <input v-model="productStore.query" placeholder="Cari produk" />
                    <button @click="search">Cari</button>
                  </div>
                    
                    <form class="d-flex">
                        <button class="btn btn-outline-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>

<div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" >
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Keranjang</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>

</template>
<!-- ... -->
<script setup>
import { onMounted, watch } from 'vue';
import { useCategory } from "@/store/categories";
import { useProducts } from "@/store/products";

const productStore = useProducts();

const categoryStore = useCategory();
function search() {
  productStore.fetchDataProducts(productStore.currentPage, productStore.query, categoryStore.selectedCategory);
}

onMounted(() => {
  categoryStore.fetchDataCategory();
});

watch(() => categoryStore.selectedCategory, () => {
  console.log('Selected Category:', categoryStore.selectedCategory);
  search(); // Mencari produk setiap kali kategori berubah
});
</script>


<style></style>