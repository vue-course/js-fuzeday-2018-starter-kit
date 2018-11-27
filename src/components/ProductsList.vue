<template>
    <div class="hello">
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
        computed: {
            products() {
                return this.$store.getters.getProducts;
            }
        },
        mounted: function () {
            client.product.fetchAll()
                .then((products) => {
                    this.$store.commit('setProducts', products);
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
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }
</style>