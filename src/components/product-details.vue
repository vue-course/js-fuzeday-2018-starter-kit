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
            margin-bottom: 5%;
            padding: 5%;
            width: 100%;
            min-height: 100%;
            box-sizing: inherit;
            border-radius: 3px;
            user-select: none;
            transition: .12s ease-out;

            cursor: pointer;

            &:hover{
                box-shadow: 0 0 0 1px rgba(0,0,0,.1), 0 4px 20px rgba(0,0,0,.2);
                position: absolute;
                z-index: 10;

                .product-title{
                    -webkit-line-clamp: 20;
                    opacity: 1;
                }

                .product-image{
                    transform: none;
                }
            }

            &:active{
                background: rgba(100,100,100,.1);
                transition: 0s;
            }
        }

        &-title {
            font-weight: 400;
            width: 100%;
            opacity: .8;
            /* white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis; */

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        &-image {
            display: block;
            width: 100%;
            transition: .12s ease-out;
            transform: scale(.95);
        }

        &-price{
            text-align: center;
            font-size: 1.6em;
            margin: .6em 0;
        }
    }
</style>