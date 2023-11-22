<template>
    <div class="home">
        <CarouselView />
        <SectionView />
    </div>
</template>

<script>
import CarouselView from '@/components/CarouselView.vue';
import SectionView from '@/components/SectionView.vue'
export default {
    components: {
        CarouselView,
        SectionView
    },
    name: 'HomeView'
}
</script>