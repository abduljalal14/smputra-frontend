<script setup>
    import { useProducts } from "@/store/products"
    import { useCategory } from '@/store/categories';
    import { useRouter } from 'vue-router';
    import { onMounted } from 'vue';

    //init router
    const router = useRouter();

    const categoryStore = useCategory();
    const productStore = useProducts();

    //method for handle file changes
    const handleFileChange = (e) => {
        //assign file to state
        productStore.product.image = e.target.files[0];
    };
    onMounted(() => {
        categoryStore.fetchDataCategory();
    });
</script>

<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <form @submit.prevent="productStore.storeProduct(router)">
                            <div class="mb-3">
                                <label class="form-label fw-bold">Image</label>
                                <input type="file" class="form-control" @change="handleFileChange($event)">
                                <div v-if="productStore.errors.image" class="alert alert-danger mt-2">
                                    <span>{{ productStore.errors.image[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Name</label>
                                <input type="text" class="form-control" v-model="productStore.product.name" placeholder="name product">
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
                                <label class="form-label fw-bold">Description</label>
                                <textarea class="form-control" v-model="productStore.product.desc" rows="5" placeholder="desc product"></textarea>
                                <div v-if="productStore.errors.desc" class="alert alert-danger mt-2">
                                    <span>{{ productStore.perrors.desc[0] }}</span>
                                </div>
                            </div>

                            <button type="submit" class="btn btn-md btn-primary rounded-sm shadow border-0">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>