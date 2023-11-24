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
                                <li><a class="dropdown-item" href="#!">All Products</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li v-for="(category) in categories" :key="category.id" @click="selectCategory(category.id)"><a class="dropdown-item" href="#!">{{ category.name }}</a></li>
                            </ul>
                        </li>
                    </ul>
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
<script setup>
import { ref, onMounted } from 'vue';
import { eventBus } from '../event-bus/index';



// import API
import api from '../api';

eventBus.$emit('selectedCategory', selectedCategory);
// variables
const categories = ref([]);
const loading = ref(false);
const error = ref(null);
const selectedCategory = ref();

// method to fetch categories
const fetchCategories = async () => {
  loading.value = true;
  try {
    const response = await api.get('/api/categories');
    categories.value = response.data.data.data;
    error.value = null;
  } catch (err) {
    error.value = 'Error fetching category data.';
  } finally {
    loading.value = false;
  }
};

const selectCategory = (categoryId) => {
    selectedCategory.value = categoryId;
    console.log(selectedCategory)
};

// lifecycle hook
onMounted(() => {
  fetchCategories();
});
</script>

<style></style>