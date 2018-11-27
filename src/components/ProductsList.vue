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