<template>
    <div v-if="product" :title="product.title" class="product-item">
        <a router-link :to="product.id">
            <img class="product-image" :src="imageUrl"/>
            <h3 router-link class="product-title">{{product.title}}</h3>
            <h4 class='product-price'>
                <span>US </span>
                <span>$</span>
                <span>{{product.variants[0].price}}</span>
            </h4>
        </a>
    </div>
</template>

<script>
    export default {
        name: "product-details",
        computed: {
            imageUrl() {
                let src = null;
                console.log(this.product)
                if( this.product.images[0] ){
                    src = this.product.images[0].src;
                    src.replace('.jpg', '_medium.jpg')
                }

                return src;
            }
        },
        props: ['product', 'displayMode']
    }
</script>

<style scoped lang="scss">
    .product-item{

    }

    .product-title {
        font-weight: 400;
        /* white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;; */
    }
    a  {
        cursor: pointer;
    }

    .product-image {
        width: 10em;
        height: 10em;
    }
</style>