<template>
    <div>
        <router-link to="/">Back to products</router-link>
        <div><img :src="product.images[0].src" width="200" /></div>
        <div v-html="product.descriptionHtml" />
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
