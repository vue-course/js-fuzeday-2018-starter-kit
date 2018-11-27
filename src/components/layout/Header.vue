<template>
    <header class='main-header'>
        <router-link to="/"><div alt="Home" class="logo"  /></router-link>
        <div class='search-wrap'>
            <input type='search' v-model="search" placeholder="Search" v-on:change="searchChanged($event)"/>
        </div>
        <router-link to="/cart" class='cart-btn'><img v-bind:src="cartIcon" /><span>{{ cart }}</span></router-link>
    </header>
</template>

<script>
// import cartIcon from '../../assets/icons/shopping-basket.svg';
import {client} from '../../services/shopify-client';

export default {
    name: 'Header',
    created() {
        this.cartIcon = require(`../../assets/icons/shopping-basket.svg`);
    },
    data() {
        return {
            cartIcon: '',
            search: ''
        };
    },
    computed: {
        cart() {
            return this.$store.getters.getCartLengh;
        }
    },
    mounted: function() {
        this.getProducts();
    },

    methods: {
        searchChanged(event) {
            this.search = event.target.value;
            this.getProducts();
        },
        getProducts: async function () {

             let products = await client.product.fetchAll(20)
            if (this.search) {
                products = products.filter(prod => prod.title.toLowerCase().indexOf(this.search.toLowerCase()) >= 0)
            }
            this.displayedProducts = products;

            products = await client.product.fetchAll(100)
            if (this.search) {
                products = products.filter(prod => prod.title.toLowerCase().indexOf(this.search.toLowerCase()) >= 0)
            }
            if (products.length === 0) {
                products = [null];
            }


            this.$store.commit('setProducts', products);

        }
    }
}
</script>

<style lang="scss" scoped>
    header {
        background: white;
        display: flex;
        justify-content: space-between;
        padding: 10px;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 20;
        box-shadow: 0 20px 30px white;
    }
    .logo {
        background-size: 100%;
        background-position: -10px -33px;
        background-repeat: no-repeat;
        background-image: url("../../assets/logo.png");
        width: 150px;
        height: 60px;
        display: inline-block;
    }

    .search-wrap{
        flex: 1;
    }

    input[type='search'] {
        display: block;
        border: 1px solid #AAA;
        border-radius: 3px;
        padding: 1em;
        max-width: 500px;
        width: 100%;
        margin: 0 auto;
        font-size: 1.3em;
    }

    .cart-btn{
        display: inline-flex;
        align-items: center;
        span{
            font-size: 1.6em;
            margin-left: .5em;
        }
    }

    img{
        width: 26px;
    }
</style>
