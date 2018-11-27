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

<style scoped lang="scss">
    h3 {
        margin: 40px 0 0;
    }

    ul {
        display: grid;
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