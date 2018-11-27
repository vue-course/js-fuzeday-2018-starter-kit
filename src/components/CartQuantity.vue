<template>
    <div>
        <button @click="decrement()">&mdash;</button>
        <input type="text" :value="quantity" readonly>
        <button @click="increment()">&#xff0b;</button>
    </div>
</template>

<script>
export default {
    name: 'CartQuantity',
    props: [ 'quantity' ],
    methods: {
        increment() {
            const value = this.quantity + 1;
            this.$emit('update:quantity', value);
        },
        decrement() {
            if (this.quantity > 1) {
                const value = this.quantity - 1;
                this.$emit('update:quantity', value);
            }
        }
    }
}
</script>
