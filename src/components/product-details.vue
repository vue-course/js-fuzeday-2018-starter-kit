<template>
    <div v-if="product">
        <router-link :to="product.id">
            <img class="product-image" :src="imageUrl"/>
            <h3 router-link class="product-title" :title="product.title">{{product.title}}</h3>
            <h4 class='item-price'>{{product.price}}</h4>
        </router-link>
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