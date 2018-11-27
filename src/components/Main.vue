<template>
    <div>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'Main',
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
