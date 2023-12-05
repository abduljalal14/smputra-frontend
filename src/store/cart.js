import { defineStore } from 'pinia';

export const useCart = defineStore({
  id: 'cart',
  state: () => ({ 
    cartItems: [], // key: product_id, qty
  }),
  actions: {
    addToCart(product_id) {
      const existingItem = this.cartItems.find(item => item.product_id === product_id);
      if (existingItem) {
        existingItem.qty++;
        if (existingItem.qty === 0) {
            this.deleteCartItem(existingItem.product_id);
        }
      } else {
        this.cartItems.push({ product_id, qty: 1}); 
      }
    },

    deleteCartItem(product_id) {
      const isConfirm =  window.confirm('Apakah Anda yakin ingin menghapus item?') 
      if (isConfirm) {
        const index = this.cartItems.findIndex(item => item.product_id === product_id);

      if (index !== -1) {
        this.cartItems.splice(index, 1); // Menghapus item dari cartItems berdasarkan indeks
      }

      console.log("Deleting", product_id, " from ", this.cartItems);
      }
    },
    increaseQty(item) {
        item.qty++;
      },
  
    decreaseQty(item) {
        if (item.qty > 1) {
          item.qty--;
        } else {
          // Jika qty adalah 1, hapus cartItem dari keranjang
          this.deleteCartItem(item.product_id);
        }
      },
    // updateQty(item) {
    //     if (item.qty < 1) {
    //         item.total = item.qty * item.product.price;
    //       } else {
    //         // Jika qty adalah 1, hapus cartItem dari keranjang
    //         this.deleteCartItem(item.product);
    //       }
    // }
  },
});
