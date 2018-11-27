<template>
    <div v-if="product">
        <a router-link :to="product.id">
            <img class="product-image" :src="imageUrl"/>
            <h3 router-link class="product-title" :title="product.title">{{product.title}}</h3>
            <h4 class='item-price'>{{product.price}}</h4>
        </a>
    </div>
</template>

<script>
    export default {
        name: "product-details",
        computed: {
            imageUrl() {
            console.log(this.product)
                return this.product.images[0] ? this.product.images[0].src : null;
            }
        },
        props: ['product', 'displayMode']
    }
</script>

<style scoped>
    .product-title {
        width: 250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;;
    }
    a  {
        cursor: pointer;
    }

    .product-image {
        width: 10em;
        height: 10em;
    }
</style>