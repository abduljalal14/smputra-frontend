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
    total: 0,
    formData: new FormData()
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
      this.formData = {
        "customer_name": this.customerName,
        "customer_phone": this.customerPhone,
        "customer_address": this.customerAddres,
        "store_location": this.storeLocation,
        "shipping_method": this.orderMethod,
        "details": orderItem
      }
      const response = await api.post('/api/orders', this.formData)
      try{
          this.formData = new FormData()
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
