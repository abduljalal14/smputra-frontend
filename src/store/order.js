import { defineStore } from 'pinia';

export const useOrder = defineStore({
  id: 'order',
  state: () => ({ 
    customer:[],
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
