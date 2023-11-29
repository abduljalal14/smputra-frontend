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
    async updateCategory(categoryId, router) {
      let formData = new FormData();
      formData.append("name", this.category.name);
      formData.append("_method", "PATCH");
      //store data with API
      const response = await api.post(`/api/categories/${categoryId}`, formData)
      try{
          this.product = []
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
