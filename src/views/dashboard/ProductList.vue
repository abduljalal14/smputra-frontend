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
                                        <button  @click.prevent="productStore.deleteProduct(product.id)" class="btn btn-sm btn-danger rounded-sm shadow border-0">DELETE</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

</template>

<script setup>
    import { useProducts } from "@/store/products"
    import { onMounted } from 'vue';

    const productStore = useProducts()

    onMounted(() => {
        productStore.fetchDataProducts();
    });
</script>

<style lang="">
    
</style>