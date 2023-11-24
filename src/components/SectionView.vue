<template lang="">
    <!-- Section-->
    <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        <div v-for="product in products" :key="product.id" class="col mb-5">
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
          <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
            <a class="page-link" @click="fetchDataProducts(currentPage - 1)" :disabled="currentPage === 1" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item" v-for="page in lastPage" :key="page" :class="{ 'active': currentPage === page }">
            <a class="page-link" @click="fetchDataProducts(page)">{{ page }}</a>
          </li>
          <li class="page-item" :class="{ 'disabled': currentPage === lastPage }">
            <a class="page-link" @click="fetchDataProducts(currentPage + 1)" :disabled="currentPage === lastPage" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
</div>

        </section>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { eventBus } from '../event-bus/index';

//import api
import api from '../api';

eventBus.$on('selectedCategory', (data) => {
  selectedCategory.value = data
});
//variable produk
const products = ref([]);
const selectedCategory = ref(null);
const currentPage = ref(1);
const lastPage = ref(1);
const loading = ref(false);
const error = ref(null);

// method fetchDataproducts
const fetchDataProducts = async (page = 1) => {
  await api.get('/api/products', { params: { page } })
    .then(response => {
      // set response data to state "products"
      products.value = response.data.data.data;
      currentPage.value = response.data.data.current_page;
      lastPage.value = response.data.data.last_page;
    });
}

const fetchData = async (page = 1) => {
  loading.value = true;
  try {
    const params = { page, category_id: selectedCategory.value };
    const response = await api.get('/api/products', { params });
    products.value = response.data.data.data;
    currentPage.value = response.data.data.current_page;
    lastPage.value = response.data.data.last_page;
    error.value = null;
  } catch (err) {
    error.value = 'Error fetching data.';
  } finally {
    loading.value = false;
  }
};

//run hook "onMounted"
onMounted(() => {
    //call method "fetchDataproducts"
    fetchData();
});
</script>
<style></style>