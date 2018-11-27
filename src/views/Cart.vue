<template>
  <div class="cart">
    <p class="empty" v-if="!items.length">Your cart is empty</p>

    <ul class="items">
      <li v-for="item in items">
        <cart-item v-bind:data="item" />
      </li>
    </ul>
    <footer>
      <mt-button type="primary" size="large">Pay Now</mt-button>
    </footer>
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

      &:empty{
        ~ footer{
          display: none;
        }
      }
    }
  }

  footer{
    display: flex;
    margin-top: 2em;

    button{
      max-width: 200px;
      margin-left: auto;
    }
  }

  .empty {
    text-align: center;
    font-size: 2em;
    padding-top: 1em;
  }
</style>
