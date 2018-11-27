<template>
    <div>
        <router-link to="/">Back to products</router-link>
        <div><img :src="product.images[0].src" width="200" /></div>
        <div v-html="product.descriptionHtml" />
        <button @click="addToCart">Add to Cart</button>
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
        methods: {
            addToCart() {
                const { id } = this.$route.params;
                console.log('add', id);
            }
        }
    }
</script>

<style lang="scss" scoped>
    p {
        font-weight: bold;
    }
</style>
