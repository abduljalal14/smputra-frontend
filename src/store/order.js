import { defineStore } from 'pinia';
import api from '../api';

export const useOrder = defineStore({
  id: 'order',
  state: () => ({ 
    orders:[],
    order:{},
    orderId: '',
    customerName: '',
    customerAddres: '',
    customerPhone: '',
    storeLocation: "Sari Mulya Pasarbatang",
    ongkir: 3000,
    orderMethod: 'COD',
    subtotal: 0,
    formData: new FormData(),
    error: true,
    errorMessage: ""
  }),
  actions: {
    async fetchDataOrders() {
      try {
        const response = await api.get('/api/orders');
        this.orders = response.data.data.data; 
        this.error = false;
      } catch (err) {
        this.error = true;
      }
    },
    async fetchDataOrder(order_id) {
      try {
      const response = await api.get(`/api/orders/${order_id}`);
      this.order.orderId = response.data.data.order_id
      this.order.name = response.data.data.customer_name
      this.order.phone = response.data.data.customer_phone
      this.order.address = response.data.data.customer_address
      this.order.store = response.data.data.store_location
      this.order.method = response.data.data.shipping_method
      this.order.date = response.data.data.created_at
      this.order.items = response.data.data.order_details
      this.error = false;
    } catch (err) {
      this.error = true;
      console.log(err)
    }
    },
    async fetchDataOrderById(order_id) {
      try {
        console.log('test 1 fetch oreder passed');
        const response = await api.get(`/api/order/id/${order_id}`);
        console.log('test 2 fetch oreder passed');
      
        const orderData = response.data.order;
      
        // Pastikan orderData tidak null atau undefined sebelum mengakses propertinya
        if (orderData) {
          this.order.name = orderData.customer_name || '';
          this.order.phone = orderData.customer_phone || '';
          this.order.orderId = orderData.order_id || '';
          this.order.address = orderData.customer_address || '';
          this.order.store = orderData.store_location || '';
          this.order.method = orderData.shipping_method || '';
          this.order.date = orderData.created_at || '';
          this.order.items = orderData.order_details || [];
          console.log('test 5 passed');
          console.log('isi dari order name: ', this.order.name);
          console.log('isi dari order item product: ', this.order.items[1]);
          this.error = false;
          this.errorMessage = ""
        } 
      } catch (err) {
        this.error = true;
        // Cek apakah ada pesan kesalahan dalam response.data.error
        if (err.response && err.response.data && err.response.data.error) {
          this.errorMessage = err.response.data.error;
        } else {
          this.errorMessage = 'Terjadi kesalahan saat mengambil data order.';
        }
        console.error(this.errorMessage);
        console.error(err);
      }
    },
    
    async storeOrder (router, orderItem){
      // mebuat order_id
      const details = orderItem.map(item => ({
        product_id: item.product.id,
        qty: item.qty
      }));

      console.log("TEST 1 PASSED")
      console.log("Order Item : ", orderItem)
      console.log("detail Item : ", details)
      const currentDate = new Date();
      const day = currentDate.getDate().toString().padStart(2, '0');
      const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
      const year = currentDate.getFullYear().toString().substr(-2);
      const dateString = day + month + year;
      const randomDigits = Math.floor(1000 + Math.random() * 9000);
      this.orderId = dateString + randomDigits;
      // membuat formdata
      this.formData = {
        "customer_name": this.customerName,
        "order_id": this.orderId,
        "customer_phone": this.customerPhone,
        "customer_address": this.customerAddres,
        "store_location": this.storeLocation,
        "shipping_method": this.orderMethod,
        "details": details
      }
      console.log("TESTTT")
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
    async deleteCategory(id) {
      try {
        // Tambahkan logika penghapusan sesuai kebutuhan
        await api.delete(`/api/orders/${id}`);
        // Setelah penghapusan berhasil, perbarui data order
        this.fetchDataOrders();
      } catch (err) {
        this.error = 'Error deleting order.';
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
    formatted() {
      const date = new Date(this.order.date)
      const options = { day: 'numeric', month: 'long', year: 'numeric' }
      console.log(date)
      console.log(date.toLocaleDateString('id-ID', options))
      return date.toLocaleDateString('id-ID', options)
  },
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
