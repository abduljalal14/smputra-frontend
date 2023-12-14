import { defineStore } from 'pinia';
import api from '../api';

export const useBanner = defineStore({
  id: 'banners',
  state: () => ({ 
    banners: [],
    banner: [],
    error: null
  }),
  actions: {
    async fetchDataBanner() {
      try {
        const response = await api.get('/api/banners');
        this.banners = response.data.data.data;
        console.log(this.banners)
        this.error = null;
      } catch (err) {
        this.error = 'Error fetching category data.';
      }
    },
    async storeBanner (router){
      let formData = new FormData();
      formData.append("link", this.banner.link);
      formData.append("image", this.banner.image);
      const response = await api.post('/api/banners', formData)
      try{
          this.banner = []
          //redirect
          router.push({ path: "/dashboard/banners" });
      }
      catch(err){
          //assign response error data to state "errors"
          this.errors = response.data;
      }
    },
    async updateBanner(router) {
      let formData = new FormData();
      formData.append("name", this.banner.name);
      formData.append("image", this.banner.image);
      formData.append("_method", "PATCH");
      //store data with API
      const response = await api.post(`/api/banners/${this.banner.id}`, formData)
      try{
          this.banner = []
          router.push({ path: "/dashboard/banners" });
      }
      catch(err){
          this.errors = response.data;
      }
    },
    async deleteBanner(id) {
      try {
        // Tambahkan logika penghapusan sesuai kebutuhan
        await api.delete(`/api/banners/${id}`);
        // Setelah penghapusan berhasil, perbarui data kategori
        this.fetchDataBanner();
      } catch (err) {
        this.error = 'Error deleting banner.';
      }
    },
}
});
