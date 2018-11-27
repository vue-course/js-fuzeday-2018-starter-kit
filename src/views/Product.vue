<template>
    <div>
        <router-link to="/">Back to products</router-link>
        <div><img :src="product.images[0].src" width="200" /></div>
        <div v-html="product.descriptionHtml" />
        <button @click="addToCart">Add to Cart</button>
        <cart-quantity :quantity.sync="qty" />
        quantity {{ qty }}
    </div>
</template>

<script>
import CartQuantity from '../components/CartQuantity.vue';

    export default {
        name: 'Product',
        props: {
            quantity: {
                default: 1
            }
        },
        components: {
            'cart-quantity': CartQuantity
        },
        data() {
            return {
                qty: this.quantity
            }
        },
        computed: {
            product() {
                const { id } = this.$route.params;
                return this.$store.getters.getProduct(id);
            }
        },
        methods: {
            async addToCart() {
                const { id } = this.$route.params;
                const addToCart = await this.$store.dispatch('add', id, this.qty);
                this.qty = 1;
            }
        }
    }
</script>

<style lang="scss" scoped>
    p {
        font-weight: bold;
    }
    button {
        margin: 10px 0;
    }
</style>
