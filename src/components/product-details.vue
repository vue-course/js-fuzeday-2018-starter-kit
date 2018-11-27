<template>
    <div v-if="product">

        <h3 :title="product.title">{{product.title}}</h3>
        <img :src="imageUrl"/>
    </div>
</template>

<script>
    export default {
        name: "product-details",
        computed: {
            imageUrl() {
                return this.product.images[0] ? this.product.images[0].src : null;
            }
        },
        props: ['product', 'displayMode']
    }
</script>

<style scoped>
    .product-title P{
        text-overflow-ellipsis: true;
    }
</style>