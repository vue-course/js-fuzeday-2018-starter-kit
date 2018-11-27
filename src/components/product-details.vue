<template>
    <a router-link :to="product.id" v-if="product" :title="product.title" class="product-item">
        <img class="product-image" :src="imageUrl"/>
        <div class='product-price'>
            <span>US </span>
            <span>$</span>
            <span>{{product.variants[0].price}}</span>
        </div>
        <div router-link class="product-title">{{product.title}}</div>
    </a>
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
    .product{
        &-item{
            display: block;
            padding: 5%;
            cursor: pointer;

            &:hover{
                box-shadow: 0 0 0 1px #CCC;
            }
        }

        &-title {
            font-weight: 400;
            /* white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;; */
        }

        &-image {
            display: block;
            width: 100%;
        }

        &-price{
            text-align: center;
            font-size: 1.6em;
            margin: .6em 0;
        }
    }
</style>