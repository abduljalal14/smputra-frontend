<template lang="">
   <!-- <li>Nama : {{ orderStore.order.name }}</li>
                                    <li>No. HP : {{ orderStore.order.phone }}</li>
                                    <li>Alamat : {{ orderStore.order.address }}</li>
                                    <li>Toko : {{ orderStore.order.store }}</li>
                                    <li>Metode : {{ orderStore.order.method }}</li>
                                    <li>Tanggal : {{ orderStore.order.date }}</li> -->
    <br>
    <br>
    <br>
    <section class="mb-lg-14 mb-8 mt-5">
   <div class="container">
      <!-- row -->
      <div class="row">
         <!-- col -->
         <div class="col-12">
            <div>
               <div class="mb-8">
                  <!-- text -->
                  <h1 class="fw-bold mb-0">Rincian Pesanan</h1>
               </div>
            </div>
         </div>
      </div>
      <div>
         <!-- row -->
         <div class="row">
            <div class="col-lg-6 col-md-12">
               <div class="px-6 py-4 card shadow-sm mb-2">
                  
                  <h5 class=" bg-transparent mt-2 text-primary">Lacak Pesanan</h5>
                  <!-- Nama -->
                  <div class="mb-3">
                        <input v-model="orderId" type="text" id="name-input" class="form-control" placeholder="ID Pesanan">
                        <button @click="searchOrderByIdandOrderId()" type="submit" class="btn btn-primary">Cari</button>
                  </div>
                  
               </div>

               <div v-if="orderStore.errorMessage == 'ID Order tidak ditemukan'" class="alert alert-danger" role="alert">
                  Pesanan tidak ditemukan, silakan masukan ID pemesanan yang benar
               </div>

               <div v-if="!orderStore.error" class="px-6 py-4 card shadow-sm">
                  
                  <h5 class=" bg-transparent mt-2 text-primary">Informasi Pengiriman</h5>
                  <h6 class=" bg-transparent">{{ orderStore.order.method }} - ID Pemesanan: {{ orderStore.order.orderId }}</h6>
                  
                  <h5 class=" bg-transparent mt-2 text-primary">Alamat Pengiriman</h5>
                  <h6 class=" bg-transparent">{{ orderStore.order.name }}</h6>
                  <h6 class=" bg-transparent">{{ orderStore.order.phone }}</h6>
                  <h6 class=" bg-transparent">{{ orderStore.order.address }}</h6>
                  
               </div>
            </div>
            <div v-if="!orderStore.error" class="col-12 col-md-12  col-lg-6">
               <div class="mt-4 mt-lg-0">
                  <div class="card shadow-sm">
                     <h5 class="px-6 py-4 bg-transparent mb-0 text-primary" >Rincian Item</h5>
                     <ul class="list-group list-group-flush">
                        <!-- list group item -->
                        <li v-for="(item, index) in orderStore.order.items" :key="index" class="list-group-item px-4 py-3">
                           <div class="row align-items-center"> 
                              <div class="col-2 col-md-2">
                                 <img v-bind:src="item.product.image" alt="Ecommerce" class="img-fluid">
                              </div>
                              <div class="col-5 col-md-5">
                                 <h6 class="mb-0">{{ item.product.name }}</h6>
                                 <!-- <span><small class="text-muted">{{ item.product.category.name }}</small></span> -->
                              </div>
                              <div class="col-2 col-md-2 text-center text-muted">
                                 <span>{{  item.qty }}</span>
                              </div>
                              <div class="col-3 text-lg-end text-start text-md-end col-md-3">
                                 <span class="fw-bold">{{ formatPrice(item.product.price * item.qty) }}</span>
                              </div>
                           </div>
                        </li>
                     </ul>
                     <h5 class="px-6 py-4 bg-transparent mb-0 text-primary">Keterangan</h5>
                     <div class="card mb-2">
                        <!-- list group -->
                        <ul class="list-group list-group-flush">
                           <!-- list group item -->
                           <li class="list-group-item d-flex justify-content-between align-items-start">
                              <div class="me-auto">
                                 <div>Item Subtotal</div>
                              </div>
                              <span>{{ formatPrice(subTotal) }}</span>
                           </li>
                           <!-- list group item -->
                           <li v-if="orderStore.order.method == 'COD'" class="list-group-item d-flex justify-content-between align-items-start">
                              <div class="me-auto">
                                 <div>Biaya Ongkir</div>
                              </div>
                              <span>{{ formatPrice(orderStore.ongkir) }}</span>
                           </li>
                           <!-- list group item -->
                           <li class="list-group-item d-flex justify-content-between align-items-start">
                              <div class="me-auto">
                                 <div class="fw-bold">Total</div>
                              </div>
                              
                              <span v-if="orderStore.order.method == 'COD'" class="fw-bold">{{ formatPrice(subTotal+orderStore.ongkir) }}</span>
                              <span v-else class="fw-bold">{{ formatPrice(subTotal) }}</span>
                           </li>
                        </ul>
                     </div>
                     <div class="d-grid mb-1 mt-4">
                        
                        <button @click="generatePdf" class="btn btn-primary btn-lg text-center align-items-center" type="submit">
                           Unduh Struk
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
</template>
<script setup>
import { formatPrice } from "@/utils/currency";
import { useOrder } from '@/store/order'
import { useProducts } from '@/store/products';
import {  ref,watchEffect } from 'vue'
import jsPDF from 'jspdf';
import '@/assets/js/consolas-normal';

const subTotal = ref(0);
const orderId = ref();

const orderStore = useOrder()
const productStore = useProducts()


watchEffect(() => {
   try {
      subTotal.value = 0;

      if (orderStore.order && orderStore.order.items && productStore.products) {
         orderStore.order.items.forEach(item => {
            const product = item.product;
            if (product) {
               subTotal.value += product.price * item.qty;
            }
         });
      }
   } catch (error) {
      console.error('Error in watchEffect:', error);
   }
});



// const searchOrder = () => {
//    console.log('test 1 passed')
//    orderStore.fetchDataOrder(orderId.value);
// }

// const searchOrderById = () => {
//    console.log('test 1 passed')
//    orderStore.fetchDataOrderById(orderId.value);
// }

const searchOrderByIdandOrderId = () => {
   console.log('test 1 passed')
   const order_id = orderId.value.substring(0, 4);
   const id = orderId.value.substring(4);
   console.log('order_id :', order_id)
   console.log('id :', id)
   orderStore.fetchDataOrderByIdAndOrderId(order_id, id);
}

const generatePdf = () => {
       // Variabel
      const noTrans = '12345678';
      const imgData = require('@/assets/smputra-logo.png');

      const paperWidth = 80;
      const paperHeight = 90+(10*orderStore.order.items.length);
      const pdf = new jsPDF({
        unit: 'mm',
        format: [paperWidth, paperHeight], 
      });

      // header
      pdf.addImage(imgData,'PNG', 15, 9, 50, 10)
      //pdf.setFont('courier');
      pdf.setFont('consolas', 'normal');
      pdf.setFontSize(8);
      pdf.text('Jl. Raya Pantura No. 18, Kaligangsa', paperWidth/2 , 28, { align: 'center' });
      pdf.text('Wetan, Brebes', paperWidth/2 , 31, { align: 'center' });
      pdf.text('----------------------------------------', 6, 36);
      pdf.text(`Metode Pengiriman  : ${orderStore.order.method}`, 7, 39);
      pdf.text(`ID Pemesanan       : ${orderStore.order.orderId+orderStore.order.id}`, 7, 42);
      pdf.text(`Tanggal            : ${orderStore.formatted}`, 7, 45);
      pdf.text('----------------------------------------', 6, 49);

      // items
      let yOffset = 52; // start posisi y
      orderStore.order.items.forEach(item => {
        const product_name = item.product.name;
        const product_price = item.product.price;

        pdf.text(product_name, 7, yOffset);
        yOffset += 3; // jarak ke baris berikutnya
        pdf.text(`${item.qty}  x  ${formatPrice(product_price)}     =`, 45, yOffset, { align: 'right' });
        pdf.text(formatPrice(item.qty*product_price).toString(), 65, yOffset, { align: 'right' });
        yOffset += 3;
      });

      // rincian total
      pdf.text('----------------------------------------', 6, yOffset);
      yOffset += 3;
      pdf.text('SUBTOTAL   :', 39, yOffset, { align: 'right' });
      pdf.text(formatPrice(subTotal.value).toString(), 65, yOffset, { align: 'right' });
      yOffset += 3;
      pdf.text('ONGKOS KIRIM   :', 39, yOffset, { align: 'right' });
      pdf.text(formatPrice(orderStore.ongkir).toString(), 65, yOffset, { align: 'right' });
      yOffset += 4;
      pdf.setFontSize(12);
      pdf.text('TOTAL  :', 39.5, yOffset, { align: 'right' });
      pdf.text(formatPrice(subTotal.value+orderStore.ongkir).toString(), 65, yOffset, { align: 'right' });

      // footer
      pdf.setFontSize(8);
      yOffset += 7;
      pdf.text('Terima Kasih', paperWidth/2 , yOffset, { align: 'center' });
      yOffset += 3;
      pdf.text('selamat belanja kembali', paperWidth/2 , yOffset, { align: 'center' });
      yOffset += 3;
      pdf.text('barang yang sudah dibeli tidak dapat', paperWidth/2 , yOffset, { align: 'center' });
      yOffset += 3;
      pdf.text('dikembalikan / ditukar', paperWidth/2 , yOffset, { align: 'center' });
      yOffset += 3;
      pdf.text('kritik, saran & layanan pesan antar', paperWidth/2 , yOffset, { align: 'center' });
      yOffset += 4;
      pdf.text('www.sarimulya.com', paperWidth/2 , yOffset, { align: 'center' });
      
      
      // Men-download PDF 
      pdf.save(`SMPUTRA_NOTA_ID${noTrans}.pdf`);
};


// watch(() => [orderStore.order, productStore.products], () => {
//       getSubtotal();
//     });



</script>


<style lang="css"></style>