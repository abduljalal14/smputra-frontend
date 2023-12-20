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
	<h2 class="fs-5 text-inherit text-decoration-none">{{ props.product.name }}</h2>
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
</template>
<script setup>
import { defineProps } from 'vue';
import { useCart } from "@/store/cart";

const cartStore = useCart();
const props = defineProps(['product']);
</script>
<style lang="">

</style>