import { defineStore } from 'pinia';
import api from '../api';

export const useCategory = defineStore({
  id: 'categories',
  state: () => ({ 
    selectedCategory: null,
    categories: [],
    category: [],
    error: null
  }),
  actions: {
    async fetchDataCategory() {
      try {
        const response = await api.get('/api/categories');
        this.categories = response.data.data.data;
        console.log(this.categories)
        this.error = null;
      } catch (err) {
        this.error = 'Error fetching category data.';
      }
    },
    setSelectedCategory(category){
      this.selectedCategory = category;
    },
    async storeCategory (router){
      let formData = new FormData();
      formData.append("name", this.category.name);
      formData.append("image", this.category.image);
      const response = await api.post('/api/categories', formData)
      try{
          this.category = []
          //redirect
          router.push({ path: "/dashboard/categories" });
      }
      catch(err){
          //assign response error data to state "errors"
          this.errors = response.data;
      }
    },
    async updateCategory(router) {
      let formData = new FormData();
      formData.append("name", this.category.name);
      formData.append("image", this.category.image);
      formData.append("_method", "PATCH");
      //store data with API
      const response = await api.post(`/api/categories/${this.category.id}`, formData)
      try{
          this.category = []
          router.push({ path: "/dashboard/categories" });
      }
      catch(err){
          this.errors = response.data;
      }
    },
    async deleteCategory(id) {
      try {
        // Tambahkan logika penghapusan sesuai kebutuhan
        await api.delete(`/api/categories/${id}`);
        // Setelah penghapusan berhasil, perbarui data kategori
        this.fetchDataCategory();
      } catch (err) {
        this.error = 'Error deleting category.';
      }
    },
}
});
