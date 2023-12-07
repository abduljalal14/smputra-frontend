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
                        <button @click="searchOrder()" type="submit" class="btn btn-primary">Cari</button>
                  </div>
                  
               </div>

               <div v-if="!orderStore.error" class="px-6 py-4 card shadow-sm">
                  
                  <h5 class=" bg-transparent mt-2 text-primary">Informasi Pengiriman</h5>
                  <h6 class=" bg-transparent">{{ orderStore.order.method }} - ID12345678</h6>
                  
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
                                 <img v-bind:src="productStore.products.find(product => product.id === item.product_id).image" alt="Ecommerce" class="img-fluid">
                              </div>
                              <div class="col-5 col-md-5">
                                 <h6 class="mb-0">{{ productStore.products.find(product => product.id === item.product_id).name }}</h6>
                                 <span><small class="text-muted">{{ productStore.products.find(product => product.id === item.product_id).category.name }}</small></span>
                              </div>
                              <div class="col-2 col-md-2 text-center text-muted">
                                 <span>{{  item.qty }}</span>
                              </div>
                              <div class="col-3 text-lg-end text-start text-md-end col-md-3">
                                 <span class="fw-bold">Rp {{ productStore.products.find(product => product.id === item.product_id).price * item.qty }}</span>
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
                              <span>Rp {{ subTotal }}</span>
                           </li>
                           <!-- list group item -->
                           <li v-if="orderStore.orderMethod == 'COD'" class="list-group-item d-flex justify-content-between align-items-start">
                              <div class="me-auto">
                                 <div>Biaya Ongkir</div>
                              </div>
                              <span>Rp. {{ orderStore.ongkir }}</span>
                           </li>
                           <!-- list group item -->
                           <li class="list-group-item d-flex justify-content-between align-items-start">
                              <div class="me-auto">
                                 <div class="fw-bold">Total</div>
                              </div>
                              <span v-if="orderStore.order.method != 'COD'" class="fw-bold">Rp. {{ orderStore.subtotal }}</span>
                              <span v-else class="fw-bold">Rp. {{ subTotal+orderStore.ongkir }}</span>
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
import { useOrder } from '@/store/order'
import { useProducts } from '@/store/products';
import { onMounted, ref } from 'vue'
import jsPDF from 'jspdf';
import '@/assets/js/thermal-receipt-normal';

const subTotal = ref(0);
const orderId = ref();

const orderStore = useOrder()
const productStore = useProducts()

function getSubtotal() {
   subTotal.value = 0;
   for (var i = 0; i < orderStore.order.items.length; i++) {
      const product = productStore.products.find(product => product.id === orderStore.order.items[i].product_id);
        if (product) {
          subTotal.value += product.price * orderStore.order.items[i].qty;
        }
   }
}

const searchOrder = () => {
   orderStore.fetchDataOrder(orderId.value);
   if (!orderStore.error) {
      getSubtotal()
   }
}

const generatePdf = () => {
       // Variabel
       const productName = 'Widget';
      const quantity = 5;
      const unitPrice = 10;

      // Tentukan lebar kertas thermal kasir 80mm dalam satuan mm
      const paperWidth = 80;

      // Buat instance dari jsPDF dengan menentukan lebar dan panjang dokumen
      const pdf = new jsPDF({
        unit: 'mm',
        format: [paperWidth, 210], // 210 adalah panjang default, sesuaikan dengan kebutuhan
      });

      // Atur jenis font menjadi monospace
      pdf.setFont('courier');

      // Atur ukuran teks menjadi 9 pt
      pdf.setFontSize(9);

      // Menambahkan konten ke PDF
      pdf.text('Fake Invoice', 5, 5);
      pdf.text('--------------------------', 5, 10);
      pdf.text(`Product Name: ${productName}`, 5, 15);
      pdf.text(`Quantity: ${quantity}`, 5, 20);
      pdf.text(`Unit Price: $${unitPrice}`, 5, 25);
      pdf.text('--------------------------', 5, 30);
      pdf.text(`Total: $${quantity * unitPrice}`, 5, 35);

      // Men-download PDF
      pdf.save('SMPUTRA_NOTA_ID12345678.pdf');
};


// watch(() => [orderStore.order, productStore.products], () => {
//       getSubtotal();
//     });

onMounted(() => {
   productStore.fetchDataProducts();
});

</script>


<style lang="css"></style>