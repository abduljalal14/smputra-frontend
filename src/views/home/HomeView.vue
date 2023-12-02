<template>
        <div class="home">
                <div class="background"></div>
                <carousel-component></carousel-component>
                <shoping-component></shoping-component>
                <category-component></category-component>
        </div>
</template>

<script>
</script>
<style>
.background {
         /* Background menggunakan gambar */
  background-image: url('/src/assets/backgorund.png');

/* Properti tambahan untuk styling */
background-size: 100% auto; /* Lebar 100%, tinggi otomatis */
  background-position: top center; /* Posisi di tengah atas */
  background-position-y: -80px;
  background-repeat: no-repeat; /* Tidak mengulang gambar */

  position: absolute; /* atau position: absolute; sesuai kebutuhan */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Nilai negatif untuk memastikan berada di belakang elemen lain */
  /* Sesuaikan properti lain sesuai kebutuhan */
}
</style>