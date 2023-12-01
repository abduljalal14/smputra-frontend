<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-custom fixed-top">
      <div class="container">
        <router-link :to="{ name: 'home' }" class="navbar-brand">
          <img id="logo" src="../assets/smputra-logo.png" style="max-height: 45px" alt="logo">
        </router-link>
        <!-- layar kecil tidak collapse, di layar besar display:none -->
        <div class="navbar-nav ml-auto">
          <div class="d-block d-md-none d-lg-none">
            <a data-bs-toggle="modal" data-bs-target="#search" title="search" class="nav-link mt-1"
              style="cursor: pointer">
              <i class="h3 bi bi-search"></i>
            </a>
          </div>
        </div>

        <div class="navbar-nav ml-auto">
          <div class="d-block d-md-none d-lg-none">
            <a class="text-muted  position-relative" role="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
              <i class="h3 bi bi-handbag"></i>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                1
              </span>
            </a>
          </div>
        </div>





        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarContent"
          aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div id="navbarContent" class="navbar-collapse collapse">
          <ul class="navbar-nav me-auto">
            <li class="nav-item megamenu">
              <router-link :to="{ name: 'home' }" class="nav-link font-weight-bold text-uppercase">HOME</router-link>
            </li>
            <li class="nav-item megamenu dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                PRODUK
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">SEMUA PRODUK</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">FASHION</a></li>
                <li><a class="dropdown-item" href="#">FOOD</a></li>
                <li><a class="dropdown-item" href="#">ELEKTRONIK</a></li>
              </ul>
            </li>
            <li class="nav-item megamenu">
              <a href="#" class="nav-link font-weight-bold text-uppercase">KONTAK</a>
            </li>
            <li class="nav-item megamenu">
              <router-link :to="{ name: 'about' }" class="nav-link font-weight-bold text-uppercase">About</router-link>
            </li>
            <li class="nav-item megamenu">
              <router-link :to="{ name: 'blog' }" class="nav-link font-weight-bold text-uppercase">BLOG</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto m-2">
            <li class="d-none d-md-block">
              <a data-bs-toggle="modal" data-bs-target="#search" title="search" class="nav-link mt-1"
                style="cursor: pointer">
                <i class="h4 bi bi-search"></i>
              </a>
            </li>
          </ul>

          <div class="navbar-nav ml-auto">
          <div class="d-none d-md-block">
            <a class="text-muted position-relative" role="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
              <i class="h3 bi bi-handbag"></i>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-purple">
                1
              </span>
            </a>
          </div>
        </div>
        </div>
      </div>
    </nav>

  </div>

  <div class="modal modal-search fade" id="search" aria-modal="true" role="dialog" style="display: none;">
    <div class="modal-dialog modal-lg">
      <div class="modal-content border-0 rounded shadow-custom">
        <div class="modal-header">
          <div class="modal-title h6" id="example-modal-sizes-title-lg">
            <i class="bi bi-search"></i>
            SEARCH
          </div>
          <button type="button" class="close text-dark" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div class="modal-body">
          <input type="text" id="search-ajax" class="form-control form-control-lg" placeholder="Apa yang ingin Anda beli?"
            autofocus="">
        </div>
      </div>
    </div>
  </div>

  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Keranjang Belanja</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <cart-component></cart-component>
  </div>
</div>

</template>
  
<script setup>
</script>
<style>
</style>
