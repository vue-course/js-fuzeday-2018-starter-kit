<template>
    <div>
        ID {{ $route.params.id }}
        <p>product {{ product }}</p>
    </div>
</template>

<script>
    export default {
        name: 'Product',
        computed: {
            product() {
                const { id } = this.$route.params;
                return this.$store.getters.getProduct(id);
            }
        },
    }
</script>

<style lang="scss" scoped>
    p {
        font-weight: bold;
    }
</style>
