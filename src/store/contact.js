import { defineStore } from 'pinia';

export const useContact = defineStore({
  id: 'contact',
  state: () => ({ 
    phoneNumber1: '6282325339189',
    phoneNumber2: '6282325339189',
    message: 'INVOICE',
    whatsappLink: ``,
  }),
  actions: {
    // (orderStore.customerName,orderStore.customerPhone,orderStore.customerAddres,orderStore.storeLocation,orderStore.orderMethod,cartStore.cartItems,orderStore.total)
    openWhatsApp(name,phone,address,store,method,items,total,orderId,item){
        let noWA = ''
        let ongkir = ''
        if (store=='Sari Mulya Pasarbatang') {
            noWA = this.phoneNumber1
        } else {
            noWA = this.phoneNumber2
        }

        if (method=='COD') {
            ongkir = 'Biaya Ongkir : Rp. 3000'
        }
 
        let listItem = ``;
        listItem = item;
        // for (const item in items) { 
        //   listItem += `${item.qty} dan ${this.products[1].name}`
             //  listItem += `- ${this.products.find(product => product.id === item.product_id).name }  ${items[item].qty}x@${this.products.find(product => product.id === item.product_id).price} : Rp. ${item.qty*this.products.find(product => product.id === item.product_id).price}\n`;
        // }

        console.log('Isi dari Items', items);

this.message = `Hai Admin Toko *${store}*, saya ingin membeli produk berikut ini:

${listItem}
${ongkir}
_________________ _____________
*Total: Rp. ${total}*

Berikut adalah alamat saya:
Nama: *${name}*
No. HP: ${phone}
Alamat: ${address}

Metode pengirimian: *${method}*

ID Pemesanan: *${orderId}*
Lihat detail pesanan saya: http://localhost:8080/order-details`


        console.log('Isi dari message', this.message);
        this.whatsappLink = `https://wa.me/${noWA}?text=${encodeURIComponent(this.message)}`
        window.open(this.whatsappLink, '_blank');
    }
  },
});
