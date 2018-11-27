<template>
    <div class='product-page'>
        <div v-if="product">
            <div class='product-row0'>
                <div class='product-image-wrap'>
                    <img :src="product.images[0].src"/>
                </div>
                <div class='product-summary'>
                    <h1>{{product.title}}</h1>
                    <div class='product-price'>
                        <span>US </span>
                        <small>$</small>
                        <span>{{product.variants[0].price}}</span>
                    </div>
                    <cart-quantity :quantity.sync="qty" />
                    <mt-button @click="addToCart" type="primary" size="large">Add to Cart</mt-button>
                </div>
            </div>
            <hr />
            <div class='product-desc' v-html="product.descriptionHtml" />
        </div>

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
                const addToCart = await this.$store.dispatch('add', { id, qty: this.qty });
                this.qty = 1;
            }
        }
    }
</script>

<style lang="scss" scoped>
    hr{
        width: 50%;
        height: 4px;
        margin: 5em auto;
        border: 0;
        background: #DDD;
        border-radius: 5px;
    }

    .product-page{
        max-width: 1000px;
        margin: 0 auto;
        padding: 1em;
    }

    .product-row0{
        display: flex;
    }

    .product-image-wrap{
        flex: 1;
        border-radius: 3px;
        overflow: hidden;

        img{
            display: block;
            width: 100%;
        }
    }

    .product-summary{
        flex: 1;
        padding-left: 2em;

        > *{ margin-bottom: 1em; }

        h1{
            font-weight: 400;
        }

        button{
            width: 50%;
            max-width: 350px;
        }
    }

    .product-price{
        font-size: 2.5em;
        color: red;
    }

    .product-desc{
        font-size: 1.3em;
    }
    button {
        margin: 10px 0;
    }
</style>
