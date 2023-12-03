import { defineStore } from 'pinia';

export const useOrder = defineStore({
  id: 'order',
  state: () => ({ 
    customerName: "",
    customerAddres: "",
    customerPhone: "",
    storeLocation: "Sari Mulya Pasarbatang",
    orderMethod: 'COD',
  }),
  actions: {
    valid() {
        if (this.customerName == "" && this.customerAddres == "" && this.customerPhone == "") {
            return true
        } else {
            return false
        }
    }
  },
});
