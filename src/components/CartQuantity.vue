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

<style lang="scss" scoped>
    div{
        display: inline-flex;
        border: 1px solid #CCC;
    }

    input{
        flex: 1;
        border: none;
        padding: 1em 0;
        text-align: center;
        width: 70px;
        font-size: 1.2em;
    }

    button{
        background: none;
        border: 0;
        cursor: pointer;
        font-weight: 700;
        font-size: .9em;
        padding: 0 1em;
        outline: none;
    }
</style>