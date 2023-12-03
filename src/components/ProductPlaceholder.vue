<template>
    <div class="card card-product" style="max-width: 390px;cursor: wait;">
      <div class="card-body">
        <div class="text-center position-relative">
          <div class="position-absolute top-0 start-0">
            <!-- Placeholder untuk badge -->
            <span class="badge bg-secondary placeholder col-4">&nbsp;</span>
          </div>
          <!-- Placeholder untuk gambar produk -->
          <div class="mb-3 placeholder-img"></div>
        </div>
        <p class="card-text placeholder-glow">
      <span class="placeholder col-7"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-6"></span>
      <span class="placeholder col-8"></span>
        </p>
        <!-- Placeholder untuk nama produk -->
        <h2 class="fs-5 placeholder-text"></h2>
        <div class="d-flex justify-content-between align-items-center mt-3">
          <div>
            <!-- Placeholder untuk harga produk -->
            <span class="placeholder-text placeholder-price"></span>
          </div>
          <div>
            <!-- Placeholder untuk tombol tambah -->
            <button class="btn btn-primary btn-product btn-sm placeholder-btn" style="cursor: wait;">
              &nbsp;
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // Tidak perlu props pada placeholder
  };
  </script>
  
  <style scoped>
  /* Gaya CSS untuk placeholder, sesuaikan dengan desain Anda */
  .placeholder-img {
    width: 100%;
    height: 150px; /* Sesuaikan dengan tinggi gambar placeholder */
    background-color: #b5b2b6; /* Warna latar belakang placeholder */
  }
  
  .placeholder-text {
    width: 80%;
    height: 15px; /* Sesuaikan dengan tinggi teks placeholder */
    background-color: #ccc; /* Warna latar belakang placeholder */
    display: block;
    margin-bottom: 8px;
  }
  
  .placeholder-price {
    width: 40%;
    height: 15px; /* Sesuaikan dengan tinggi teks placeholder */
    background-color: #ccc; /* Warna latar belakang placeholder */
    display: block;
  }
  
  .placeholder-btn {
    width: 70px; /* Sesuaikan dengan lebar tombol placeholder */
    height: 30px; /* Sesuaikan dengan tinggi tombol placeholder */
    background-color: #8f008f; /* Warna latar belakang tombol placeholder */
    border: none;
    border-radius: 4px;
  }
  </style>
  