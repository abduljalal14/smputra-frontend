import { defineStore } from 'pinia';

export const useCart = defineStore({
  id: 'cart',
  state: () => ({ 
    cartItems: [], // Menambahkan total sebagai kunci ketiga
  }),
  actions: {
    addToCart(product) {
      const existingItem = this.cartItems.find(item => item.product.id === product.id);

      if (existingItem) {
        existingItem.qty++;
        existingItem.total = existingItem.qty * existingItem.product.price; // Menghitung total
        if (existingItem.qty === 0) {
            this.deleteCartItem(existingItem.product);
        }
      } else {
        this.cartItems.push({ product, qty: 1, total: product.price }); // Menambahkan total pada penambahan baru
      }
    },

    deleteCartItem(product) {
      const isConfirm =  window.confirm('Apakah Anda yakin ingin menghapus item?') 
      if (isConfirm) {
        const index = this.cartItems.findIndex(item => item.product.id === product.id);

      if (index !== -1) {
        this.cartItems.splice(index, 1); // Menghapus item dari cartItems berdasarkan indeks
      }

      console.log("Deleting", product, " from ", this.cartItems);
      }
    },
    increaseQty(item) {
        item.qty++;
        item.total = item.qty * item.product.price;
      },
  
    decreaseQty(item) {
        if (item.qty > 1) {
          item.qty--;
          item.total = item.qty * item.product.price;
        } else {
          // Jika qty adalah 1, hapus cartItem dari keranjang
          this.deleteCartItem(item.product);
        }
      },
    updateQty(item) {
        if (item.qty > 1) {
            item.total = item.qty * item.product.price;
          } else {
            // Jika qty adalah 1, hapus cartItem dari keranjang
            this.deleteCartItem(item.product);
          }
    }
  },
});
