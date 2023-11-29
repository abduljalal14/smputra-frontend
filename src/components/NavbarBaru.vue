<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-custom fixed-top">
    <div class="container">
      <a class="navbar-brand" href="https://santrikoding.com">
        <img id="logo" src="https://santrikoding.com/images/logo-black.webp" style="max-height: 45px" alt="logo">
      </a>
      <ul class="navbar-nav ml-auto">
        <li class="d-block d-md-none d-lg-none text-right">
          <a data-bs-toggle="modal" data-bs-target="#search" title="search" class="nav-link mt-1" style="cursor: pointer">
            <i class="bi bi-search"></i>
          </a>
        </li>
      </ul>
      <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarContent"
        aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navbarContent" class="navbar-collapse collapse">
        <ul class="navbar-nav me-auto">
          <li class="nav-item megamenu">
            <a href="#" class="nav-link font-weight-bold text-uppercase">DEVELOPER</a>
          </li>
        </ul>
      </div>
      <div id="navbarContent" class="navbar-collapse collapse">
        <ul class="navbar-nav ml-auto">
          <li class="d-none d-md-block d-lg-block">
            <span data-bs-toggle="modal" data-bs-target="#search" class="nav-link" style="cursor: pointer">
              <i class="bi bi-search"></i>
            </span>
          </li>
        </ul>
      </div>
      <form id="navbarContent"  class="d-flex navbar-collapse collapse" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>

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
          <input type="text" id="search-ajax" class="form-control form-control-lg"
            placeholder="Apa yang ingin Anda beli?" autofocus="">
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
</script>
<style></style>
