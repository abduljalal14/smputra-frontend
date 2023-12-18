<template lang="">
<div class="card card-product" style="max-width: 390px;">
<div class="card-body">
	<div class="text-center position-relative">
		<div class="position-absolute top-0 start-0">
			<span class="badge bg-danger">Sale</span>
		</div>
			<img v-bind:src="props.product.image"
				alt="Gambar Produk"
				class="mb-3 img-fluid" />
	</div>
	<div class="mb-1">
        <small class="text-decoration-none text-muted">{{ props.product.category.name }}</small>
	</div>
	<h2 class="fs-5">
        <a href="#"
			class="text-inherit text-decoration-none"
            data-bs-toggle="modal" data-bs-target="#detailProdukModal">{{ props.product.name }}</a>
    </h2>
	<div
		class="d-flex justify-content-between align-items-center mt-3">
		<div>
			<span class="text-dark">Rp {{ props.product.price }}</span>
		</div>
		<div>
			<a href="#!" class="btn btn-primary btn-product btn-sm" @click="cartStore.addToCart(props.product.id)">
				<svg xmlns="http://www.w3.org/2000/svg"
					width="16" height="16" viewBox="0 0 24 24"
					fill="none" stroke="currentColor"
					stroke-width="2" stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-plus">
					<line x1="12" y1="5" x2="12" y2="19"></line>
					<line x1="5" y1="12" x2="19" y2="12"></line>
				</svg>
				Tambah
			</a>
		</div>
	</div>
</div>
</div>

<!-- detail produk modal  -->
<div class="modal fade" id="detailProdukModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Detail Produk</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <product-detail :product="product"></product-detail>
      </div>
    </div>
  </div>
</div>
</template>
<script setup>
import { defineProps } from 'vue';
import { useCart } from "@/store/cart";

const cartStore = useCart();
const props = defineProps(['product']);
</script>
<style lang="">

</style>