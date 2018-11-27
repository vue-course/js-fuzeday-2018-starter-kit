<template>
    <div class="hello">
       Product search: {{$route.params.productSearch}}
        <ul>
            <li v-for="productDetails in products">
                <product-details v-bind:product="productDetails"></product-details>
            </li>
        </ul>
        <!--<h3>Ecosystem</h3>-->
        <!--<ul>-->
            <!--<li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>-->
            <!--<li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>-->
            <!--<li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank"-->
                   <!--rel="noopener">vue-devtools</a></li>-->
            <!--<li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>-->
            <!--<li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>-->
        <!--</ul>-->
        <h3>
            Products
            <ul>
                <li v-for="productDetails in products">
                    <product-details v-bind:product="productDetails"></product-details>
                </li>
            </ul>
        </h3>
    </div>
</template>

<script>
    import {client} from '../services/shopify-client';
    import Product from "./product-details";

    export default {
        name: 'ProductsList',
        components: {'product-details': Product},
        props: {
            msg: String
        },
        data: function () {
            return {
                products: [],
                productSearch: this.$route.params.productSearch
            };
        },
        mounted: function () {
            client.product.fetchAll(30, this.productSearch || undefined)
                .then((products) => {
                    this.$store.commit('setProducts', products);
                });
        },


    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h3 {
        margin: 40px 0 0;
    }

    ul {
        display: grid;
        grid-gap: 1%;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

        list-style-type: none;
        padding: 1%;
    }

    li {
        box-sizing: border-box;
        // width: calc(100% / 6);
    }
</style>