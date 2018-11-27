<template>
    <div v-if="product">

        <h3 class="product-title" :title="product.title">{{product.title}}</h3>
        <img class="product-image" :src="imageUrl"/>
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
    .product-title{
        width: 250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;;
    }

    .product-image {
        width: 10em;
        height: 10em;
    }
</style>