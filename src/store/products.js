import { defineStore } from 'pinia';
import api from '../api';


export const useProducts = defineStore({
  id: 'products',
  state: () => ({ 
    products: {},
    product: [],
    currentPage: 1,
    lastPage: 1,
    query: '',
    error: null,
    errors: [] // error field input product
  }),
  actions: {
    async fetchDataProducts(page = 1, query = '', category = null) {
      this.products = {}
      try {
        console.log('Fetching Products:', page, query, category);
        const response = await api.get('/api/products', { params: { page, query, category } });
        this.products = response.data.data.data;
        this.currentPage = response.data.data.current_page;
        this.lastPage = response.data.data.last_page;
        this.error = null;
      } catch (err) {
        this.error = 'Gagal Fetching Data Produk';
      }
    },
    async fetchDataProduct(productId) {
        const response = await api.get(`/api/products/${productId}`);
        this.product.name = response.data.data.name
        this.product.desc = response.data.data.desc
        this.product.category_id = response.data.data.category_id
        this.product.price = response.data.data.price
    },
    async storeProduct (router){

      //init formData
      let formData = new FormData();

      //assign state value to formData
      formData.append("image", this.product.image);
      formData.append("name", this.product.name);
      formData.append("desc", this.product.desc);
      formData.append("price", this.product.price);
      formData.append("category_id", this.product.category_id);

      //store data with API
      const response = await api.post('/api/products', formData)
      try{
          this.product = []
          //redirect
          router.push({ path: "/dashboard/products" });
      }
      catch(err){
          //assign response error data to state "errors"
          this.errors = response.data;
      }
  },
  async updateProduct(productId, router) {
    let formData = new FormData();

    formData.append("image", this.product.image);
    formData.append("name", this.product.name);
    formData.append("desc", this.product.desc);
    formData.append("price", this.product.price);
    formData.append("category_id", this.product.category_id);
    formData.append("_method", "PATCH");

    //store data with API
    const response = await api.post(`/api/products/${productId}`, formData)
    try{
        this.product = []
        router.push({ path: "/dashboard/products" });
    }
    catch(err){
        this.errors = response.data;
    }
  },
  async deleteProduct(id){
    //delete post with API
    await api.delete(`/api/products/${id}`)
    .then(() => {
        //call method "fetchDataPosts"
        this.fetchDataProducts();
    })
  },
  },
});
