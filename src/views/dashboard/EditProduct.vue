<script setup>
    //import ref
    import { ref, onMounted } from "vue";

    //import router
    import { useRouter, useRoute } from 'vue-router';

    //import api
    import api from "../../api";

    //init router
    const router = useRouter();

    //init route
    const route = useRoute();
    const productId = route.params.id;
    
    //define state
    const image = ref("");
    const name = ref("");
    const desc = ref("");
    const category_id = ref("");
    const price = ref("");
    const errors = ref([]);

    //onMounted
    onMounted( async () => {

        //fetch detail data post by ID
        await api.get(`/api/products/${productId}`)
        .then(response => {
            
            //set response data to state
            name.value = response.data.data.name
            desc.value = response.data.data.desc
            category_id.value = response.data.data.category_id
            price.value = response.data.data.price
        });
    })

    //method for handle file changes
    const handleFileChange = (e) => {
        //assign file to state
        image.value = e.target.files[0];
    };

    //method "updateProduct"
    const updateProduct = async () => {

        //init formData
        let formData = new FormData();

        //assign state value to formData
        formData.append("image", image.value);
        formData.append("name", name.value);
        formData.append("desc", desc.value);
        formData.append("price", price.value);
        formData.append("category_id", category_id.value);
        formData.append("_method", "PATCH");

        //store data with API
        await api.post(`/api/products/${productId}`, formData)
        .then(() => {
            //redirect
            router.push({ path: "/dashboard/products" });
        })
        .catch((error) => {
            //assign response error data to state "errors"
            errors.value = error.response.data;
        });
    };
</script>

<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <form @submit.prevent="updateProduct()">
                            <div class="mb-3">
                                <label class="form-label fw-bold">Image</label>
                                <input type="file" class="form-control" @change="handleFileChange($event)">
                                <div v-if="errors.image" class="alert alert-danger mt-2">
                                    <span>{{ errors.image[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Product Name</label>
                                <input type="text" class="form-control" v-model="name" placeholder="name Post">
                                <div v-if="errors.name" class="alert alert-danger mt-2">
                                    <span>{{ errors.name[0] }}</span>
                                </div>
                            </div>
                            <div class="form-group mb-3">
                                <label for="select-category">Select Category</label>
                                <select v-model="category_id" class="form-control" id="select-category">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Price</label>
                                <input type="number" class="form-control" v-model="price" placeholder="price product">
                                <div v-if="errors.price" class="alert alert-danger mt-2">
                                    <span>{{ errors.price[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">desc</label>
                                <textarea class="form-control" v-model="desc" rows="5" placeholder="desc Post"></textarea>
                                <div v-if="errors.desc" class="alert alert-danger mt-2">
                                    <span>{{ errors.desc[0] }}</span>
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