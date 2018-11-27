<template>
    <div>
        <ul v-if="!products.length">
            <li v-for="item in 10" class="loading">
                <loading :height="180" />
                <loading />
                <loading />
                <loading />
            </li>
        </ul>
        <ul>
            <li v-for="productDetails in products">
                <single-product v-bind:product="productDetails" :search="search"
                                 v-bind:productSearch="search"></single-product>
            </li>
        </ul>
    </div>
</template>

<script>
    import SkeletonLoading from "./SkeletonLoading";
    import SingleProduct from "./SingleProduct";

    export default {
        name: 'ProductsList',
        components: {
            SingleProduct,
            Loading: SkeletonLoading
        },
        data() {
            return {
                search: '',
                displayedProducts: []
            };
        },
        computed: {
            products() {
                return this.$store.getters.getProducts;
            }
        },
        mounted: function () {
         //   this.getProducts();
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

        &:empty ~ .loader {
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
    .loading {
        margin: 5%;
    }
</style>