<template lang="">
<div class="row">
 <div class="col-md-6">
 <!-- img slide -->
 <div class="product" id="product">
    <div class="zoom"
       style="background-image: url(../assets/images/products/product-single-img-1.jpg)">
       <!-- img -->
       <img src="../assets/images/products/product-single-img-1.jpg" alt="">
    </div>
 </div>
 <!-- product tools -->
 <div class="product-tools">
 </div>
 </div>
 <div class="col-md-6">
 <div class="ps-lg-10 mt-6 mt-md-0">
    <!-- content -->
    <Small>Nama Kategori</Small>
    <!-- heading -->
    <h1 class="mb-1">Nama Produk </h1>
    <div class="fs-4">
       <!-- price --><span class="fw-bold text-dark">Rp 40.000</span> 
    </div>
    <!-- hr -->
    <hr class="my-6">
    <div>
       <!-- input -->
       <div class="input-group input-spinner  ">
          <input type="button" value="-" class="button-minus  btn  btn-sm " data-field="quantity">
          <input type="number" step="1" max="10" value="1" name="quantity" class="quantity-field form-control-sm form-input   ">
          <input type="button" value="+" class="button-plus btn btn-sm " data-field="quantity">
       </div>
    </div>
    <div class="mt-3 row justify-content-center g-2 align-items-center">
       <div class="col-7 d-grid">
          <!-- button -->
          <!-- btn --> <button type="button" class="btn btn-primary"><i class="feather-icon icon-shopping-bag me-2"></i>Tambah ke Keranjang</button>
       </div>
    </div>
    <!-- hr -->
    <hr class="my-6">
    <div>
       <!-- table -->
       <table class="table table-borderless">
          <tbody>
             <tr>
                <td>Kode Produk:</td>
                <td>FBB00255</td>
             </tr>
             <tr>
                <td>Kategori:</td>
                <td>Makanan</td>
             </tr>
          </tbody>
       </table>
    </div>
 </div>
</div>
</div>
</template>
<script>
export default {
    
}

</script>
<style lang="">
    
</style>