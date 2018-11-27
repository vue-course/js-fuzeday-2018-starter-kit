<template>
    <div>
        <Navbar v-on:search:product="searchProduct($event)"/>
        <router-view/>
    </div>
</template>

<script>
import Navbar from "./Navbar.vue";

export default {
    name: 'Main',
    components: {
        Navbar
    },
    methods: {
        searchProduct(searchText) {
            this.$router.push(`/productSearch/${searchText}`)

        }
    }
}
</script>

<style lang="scss" scoped>
    div {
        padding: 10px;
    }
</style>
