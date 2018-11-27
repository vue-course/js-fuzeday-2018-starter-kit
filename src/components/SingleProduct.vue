<template>
    <router-link :to="{ name: 'product', params: { id: product.id }}" class='product-item'>
        <img class="product-image" v-lazy="imageUrl"/>
        <div class='product-price'>
            <span>US </span>
            <span>$</span>
            <span>{{product.variants[0].price}}</span>
        </div>
        <div router-link  v-highlight="{keyword: search}" class="product-title">{{ product.title}}</div>
    </router-link>
</template>

<script>
    import { Lazyload } from 'mint-ui';

    import Vue from 'vue';
    import highlight from 'vue-highlight-text/public/directive.min.js';

    Vue.directive('highlight', highlight);

    export default {
        name: "product-details",
        components: {
			Lazyload
		},
        computed: {
            imageUrl() {
                let src = null;
                if( this.product.images[0] ){
                    src = this.product.images[0].src;
                    src.replace('.jpg', '_medium.jpg')
                }

                return src;
            }
        },
        methods: {
          markBySearch(search, title) {
              if (!search) {
                  return title;
              }
              return title;
          }
        },
        props: ['product', 'displayMode', 'search']
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
            background: white;
            transition: .12s ease-out;

            cursor: pointer;

            &:hover{
                box-shadow: 0 0 0 1px rgba(0,0,0,.1), 0 4px 20px rgba(0,0,0,.2);
                position: absolute;

                .product-title{
                    -webkit-line-clamp: 20;
                    opacity: 1;
                }

                .product-image{
                    transform: none;
                }
            }

            &:active{
                box-shadow: 0 0 0 1px rgba(0,0,0,.1), 0 4px 20px rgba(0,0,0,.2), 0 0 0 4px rgba(#06EF81, .2) inset;
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
            font-weight: 700;
            margin: .6em 0;
            color: #06EF81;
        }
    }
</style>