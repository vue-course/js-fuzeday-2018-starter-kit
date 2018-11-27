<template>
    <div>
        <input type='search' v-model="search" placeholder="Search" v-on:change="searchChanged($event)"/>
        <ul>
            <li v-for="productDetails in displayedProducts">
                <single-product v-bind:product="productDetails"
                                    v-bind:productSearch="search"></single-product>
            </li>
        </ul>



        <ul>
            <li v-for="productDetails in displayedProducts">
                <single-product v-bind:product="productDetails" :search="search"
                                 v-bind:productSearch="search"></single-product>
            </li>
        </ul>

    </div>
</template>

<script>
    import {client} from '../services/shopify-client';
    import Product from "./SingleProduct";

    export default {
        name: 'ProductsList',
        components: {'single-product': Product},
        data: function () {
            return {
                search: '',
                displayedProducts: []
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
                this.search = event.target.value;
                this.getProducts();
            },
            getProducts: async function () {

                this.displayedProducts = this.search ?
                    this.products.filter(prod => prod.title.toLowerCase().indexOf(this.search.toLowerCase()) >= 0):
                    this.products;

                let products = await client.product.fetchAll(20)
                if (this.search) {
                    products = products.filter(prod => prod.title.toLowerCase().indexOf(this.search.toLowerCase()) >= 0)
                }
                this.displayedProducts = products;

                products = await client.product.fetchAll(100)
                if (this.search) {
                    products = products.filter(prod => prod.title.toLowerCase().indexOf(this.search.toLowerCase()) >= 0)
                }


                this.$store.commit('setProducts', products);
                this.displayedProducts  = this.products;

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