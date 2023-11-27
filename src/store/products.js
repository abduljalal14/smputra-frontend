import { defineStore } from 'pinia';
import api from '../api';

export const useProducts = defineStore({
  id: 'products',
  state: () => ({ 
    products: [],
    currentPage: 1,
    lastPage: 1,
    query: '',
    error: null
  }),
  actions: {
    async fetchDataProducts(page = 1, query = '', category = null) {
      try {
        console.log('Fetching Products:', page, query, category);
        const response = await api.get('/api/products', { params: { page, query, category } });
        this.products = response.data.data.data;
        this.currentPage = response.data.data.current_page;
        this.lastPage = response.data.data.last_page;
        this.error = null;
      } catch (err) {
        this.error = 'Error fetching category data.';
      }
    },
  },
});
