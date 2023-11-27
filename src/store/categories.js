import { defineStore } from 'pinia';
import api from '../api';

export const useCategory = defineStore({
  id: 'categories',
  state: () => ({ 
    selectedCategory: null,
    categories: [],
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
  },
});