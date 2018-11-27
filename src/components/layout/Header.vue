<template>
    <header>
        <router-link to="/"><div alt="Home" class="logo"  /></router-link>
        <router-link to="/cart" class='cart-btn'><img v-bind:src="cartIcon" /><span>{{ cart }}</span></router-link>
    </header>
</template>

<script>
// import cartIcon from '../../assets/icons/shopping-basket.svg';

export default {
    name: 'Header',
    created() {
        this.cartIcon = require(`../../assets/icons/shopping-basket.svg`);
    },
    data() {
        return {
            cartIcon: ''
        };
    },
    computed: {
        cart() {
            return this.$store.getters.getCartLengh;
        }
    }
}
</script>

<style lang="scss" scoped>
    header {
        background: #fff;
        display: flex;
        justify-content: space-between;
        padding: 10px;
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

    .cart-btn{
        span{
            font-size: 1.6em;
            margin-left: .5em;
        }
    }

    img{
        width: 26px;
    }
</style>
