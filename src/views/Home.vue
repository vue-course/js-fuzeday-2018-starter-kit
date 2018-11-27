<template>
  <div class="home">
    <ProductsList msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductsList from '@/components/ProductsList.vue'

export default {
  name: 'home',
  components: {
      ProductsList
  }
}
</script>
