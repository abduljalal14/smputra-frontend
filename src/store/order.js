import { defineStore } from 'pinia';
import api from '../api';

export const useOrder = defineStore({
  id: 'order',
  state: () => ({ 
    orders:null,
    order:{},
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
    async fetchDataOrder(orderId) {
      const response = await api.get(`/api/orders/${orderId}`);
      this.order.name = response.data.data.customer_name
      this.order.phone = response.data.data.customer_phone
      this.order.address = response.data.data.customer_address
      this.order.store = response.data.data.store_location
      this.order.method = response.data.data.shipping_method
      this.order.date = response.data.data.created_at
      this.order.items = response.data.data.order_details
      console.log('isi dari order name: ', this.order.name)
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
    reset() {
      this.orders=null,
      this.order={},
      this.customerName= '',
      this.customerAddres= '',
      this.customerPhone= '',
      this.storeLocation= "Sari Mulya Pasarbatang",
      this.ongkir= 3000,
      this.orderMethod= 'COD',
      this.subtotal= 0,
      this.total= 0,
      this.formData= new FormData()
    }
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
