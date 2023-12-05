import { defineStore } from 'pinia';
import api from '../api';

export const useOrder = defineStore({
  id: 'order',
  state: () => ({ 
    orders:null,
    customerName: '',
    customerAddres: '',
    customerPhone: '',
    storeLocation: "Sari Mulya Pasarbatang",
    ongkir: 3000,
    orderMethod: 'COD',
    subtotal: 0,
    total: 0
  }),
  actions: {
    async fetchDataOrders() {
      try {
        const response = await api.get('/api/orders');
        this.orders = response.data.data.data;
        this.error = null;
      } catch (err) {
        this.error = 'Error fetching orders data.';
      }
    },
    async storeOrder (router, orderItem){
      let formData = new FormData();
      formData.append("customer_name", this.customerName);
      formData.append("customer_phone", this.customerPhone);
      formData.append("customer_address", this.customerAddres);
      formData.append("store_location", this.storeLocation);
      formData.append("shipping_method", this.orderMethod);
      formData.append("details", orderItem);
      console.log('Isi dari orderItem: ', orderItem)
      console.log('Isi dari formData: ', formData)
      const response = await api.post('/api/orders', formData)
      try{
          this.orders = []
          //redirect
          router.push({ path: "/" });
      }
      catch(err){
          //assign response error data to state "errors"
          this.errors = response.data;
      }
    },
  },

  getters: {
    invalid() {
      return this.customerName === '' || this.customerAddres === '' || this.customerPhone === '';
  },
    getTotal(){
      if (this.orderMethod == 'COD') {
        this.total = this.subtotal+this.ongkir
      } else {
        this.total = this.subtotal
      }
      return this.total
  }
  }
});
