<template>
    <div>
        <header>
            <input type='search' v-model="search" placeholder="Search" v-on:change="searchChanged($event)"/>
        </header>
        <ul>
            <li v-for="productDetails in products">
                <product-details v-bind:product="productDetails"
                                    v-bind:productSearch="search"></product-details>
            </li>
        </ul>
        <mt-spinner class='loader' type="triple-bounce" color="red" size="100"></mt-spinner>
    </div>
</template>

<script>
    import {client} from '../services/shopify-client';
    import Product from "./product-details";
    import { Spinner } from 'mint-ui';

    export default {
        name: 'ProductsList',
        components: {'product-details': Product, Spinner},
        data: function () {
            return {
                search: ''
            };
        },
        computed: {
            products() {
                return this.$store.getters.getProducts;
            },

        },
        mounted: function () {
            this.getProducts();
        },
        methods: {
            searchChanged(event) {
                console.log('search change event', event)
                this.search = event.target.value;
                this.getProducts();
            },
            getProducts: async function () {
                console.log('Get products')
                let products = await client.product.fetchAll(30)

                if (this.search) {
                    console.log('filtering products by', this.search)
                    products = products.filter(prod => prod.title.toLowerCase().indexOf(this.search.toLowerCase()) >= 0)
                }
                this.$store.commit('setProducts', products);

            }
        }


    }
</script>

<style scoped lang="scss">
   .loader{ display: none; }

    h3 {
        margin: 40px 0 0;
    }

    header{
    }

    input[type='search'] {
        display: block;
        border: 1px solid #AAA;
        border-radius: 3px;
        padding: 1em;
        width: 500px;
        margin: 0 auto;
        font-size: 1.3em;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-auto-rows: 1fr;
        grid-gap: 1vw;
        padding: 1vw;
        list-style-type: none;

        &:empty ~ .loader{
            display: block;
            text-align: center;
            margin: 5em 0;
        }
    }

    li {
        box-sizing: border-box;
        background: white;

        &:hover {
            position: relative;
            z-index: 10;
        }
        // width: calc(100% / 6);
    }
</style>