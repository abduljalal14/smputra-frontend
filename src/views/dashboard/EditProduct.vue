<script setup>
    import { useProducts } from "@/store/products"
    import { onMounted } from "vue";
    import { useRouter, useRoute } from 'vue-router';
    import { useCategory } from '@/store/categories';

    const router = useRouter();
    const productStore = useProducts();
    const categoryStore = useCategory();
    const route = useRoute();
    const productId = route.params.id;
    
    onMounted( async () => {
        productStore.fetchDataProduct(productId)
    })

    const handleFileChange = (e) => {
        productStore.product.image = e.target.files[0];
    };

</script>

<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <form @submit.prevent="productStore.updateProduct(productId, router)">
                            <div class="mb-3">
                                <label class="form-label fw-bold">Image</label>
                                <input type="file" class="form-control" @change="handleFileChange($event)">
                                <div v-if="productStore.errors.image" class="alert alert-danger mt-2">
                                    <span>{{ productStore.errors.image[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Product Name</label>
                                <input type="text" class="form-control" v-model="productStore.product.name" placeholder="name Post">
                                <div v-if="productStore.errors.name" class="alert alert-danger mt-2">
                                    <span>{{ productStore.errors.name[0] }}</span>
                                </div>
                            </div>
                            <div class="form-group mb-3">
                                <label for="select-category">Select Category</label>
                                <select v-model="productStore.product.category_id" class="form-control" id="select-category">
                                <option  v-for="category in categoryStore.categories" :key="category.id" :value="category.id">{{ category.name }}</option>

                                </select>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Price</label>
                                <input type="number" class="form-control" v-model="productStore.product.price" placeholder="price product">
                                <div v-if="productStore.errors.price" class="alert alert-danger mt-2">
                                    <span>{{ productStore.errors.price[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">desc</label>
                                <textarea class="form-control" v-model="productStore.product.desc" rows="5" placeholder="desc Post"></textarea>
                                <div v-if="productStore.errors.desc" class="alert alert-danger mt-2">
                                    <span>{{ productStore.errors.desc[0] }}</span>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-md btn-primary rounded-sm shadow border-0">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>