<template>
    <header>
        <router-link to="/"><div alt="Home" class="logo"  /></router-link>
        <router-link to="/cart">Cart {{ cart }}</router-link>
    </header>
</template>

<script>
export default {
    name: 'Header',
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
</style>
