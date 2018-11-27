<template>
  <div class="cart">
    <p class="empty">Your cart is empty</p>

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
      return this.$store.getters.getProductsByIds;
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
    .empty {
      text-align: center; 
      font-size: 2em;
      padding-top: 1em;
    }
  }
</style>
