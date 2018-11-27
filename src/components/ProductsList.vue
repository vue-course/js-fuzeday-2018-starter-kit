<template>
    <div class="hello">
        <input type='search' v-model="search" v-on:change="searchChanged($event)"/>

        <ul>
            <li v-for="productDetails in products">
                <product-details v-bind:product="productDetails"></product-details>
            </li>
        </ul>

        <h3>
            Products
            <ul>
                <li v-for="productDetails in products">
                    <product-details v-bind:product="productDetails" :search="search"
                                     v-bind:productSearch="search"></product-details>
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
                let products = await client.product.fetchAll(100)
                console.log('products', products);
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
    h3 {
        margin: 40px 0 0;
    }

    input[type='search'] {
        border-radius: 20px;
        border: solid lightblue;
        line-height: 2;

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
        background: white;

        &:hover {
            position: relative;
            z-index: 10;
        }
        // width: calc(100% / 6);
    }
</style>