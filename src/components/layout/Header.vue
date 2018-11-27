<template>
    <header>
        Header
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
        background: #efefef;
        display: flex;
        justify-content: space-between;
        padding: 10px;
    }
</style>
