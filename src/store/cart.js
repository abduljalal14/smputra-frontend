import { defineStore } from 'pinia';

export const useCart = defineStore({
  id: 'cart',
  state: () => ({ 
    cartItems: [], // key: product_id, qty
  }),
  getters: {
    calculateTotalSubtotal() {
      return this.cartItems.reduce((total, item) => total + item.subtotal, 0);
    }
  },
  actions: {
    addToCart(product) {
      const existingItem = this.cartItems.find(item => item.product === product);
      if (existingItem) {
        existingItem.qty++;
        existingItem.subtotal += product.price;
        if (existingItem.qty === 0) {
            this.deleteCartItem(existingItem.product);
        }
      } else {
        this.cartItems.push({ product, qty: 1, subtotal: product.price }); 
      }
      console.log("isi cart: ",this.cartItems )
      
    },

    deleteCartItem(product) {
      const isConfirmed =  window.confirm('Apakah Anda yakin ingin menghapus item?') 
      if (isConfirmed) {
        const index = this.cartItems.findIndex(item => item.product === product);
      if (index !== -1) {
        this.cartItems.splice(index, 1);
      }
      }
    },
    increaseQty(item) {
        item.qty++;
        item.subtotal += item.product.price;
      },
  
    decreaseQty(item) {
        if (item.qty > 1) {
          item.qty--;
          item.subtotal -= item.product.price;
        } else {
          this.deleteCartItem(item.product);
        }
      },
    reset() {
      this.cartItems = []
    }
  },
});
