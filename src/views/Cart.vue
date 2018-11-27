<template>
  <div class="cart">
    <ul class="items">
      <li v-for="item in items">
        <cart-item v-bind:data="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import CartItem from '@/components/CartItem.vue'

export default {
    name: 'Cart',
	computed: {
		items() {
			return this.$store.state.cart;
		}
	},
    components: {
      CartItem
    }
}
</script>

<style scoped lang="scss">
  .cart {
    ul {
      list-style: none;
      padding: 0;
    }
  }
</style>
