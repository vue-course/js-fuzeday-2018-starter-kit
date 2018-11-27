<template>
    <div class="hello">
        <!--<h1>{{ msg }}</h1>-->
        <!--<h3>Installed CLI Plugins</h3>-->
        <!--<ul>-->
            <!--<li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest" target="_blank"-->
                   <!--rel="noopener">unit-jest</a></li>-->
        <!--</ul>-->
        <!--<h3>Essential Links</h3>-->
        <!--<ul>-->
            <!--<li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>-->
            <!--<li><a href="https://www.npmjs.com/package/shopify-buy" target="_blank" rel="noopener">Shopify SDK</a></li>-->

        <!--</ul>-->
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
    </div>
</template>

<script>
    import {client} from '../services/shopify-client';
    import Product from "./product-details";

    export default {
        name: 'HelloWorld',
        components: {'product-details': Product},
        props: {
            msg: String
        },
        data: function () {
            return {
                products: []
            };
        },
        mounted: function () {
            client.product.fetchAll()
                .then((products) => {
                    // Do something with the products
                    console.log(products);
                    this.products = products;
                });
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h3 {
        margin: 40px 0 0;
    }

    ul {
        display: grid;
        // grid-gap: 1%;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-auto-rows: 1fr;
        grid-gap: 1vw;
        padding: 1vw;
        list-style-type: none;
    }

    li {
        box-sizing: border-box;
        position: relative;
        // width: calc(100% / 6);
    }
</style>