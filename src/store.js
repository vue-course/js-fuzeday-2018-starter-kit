import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		products: [],
    cart: [
			{ id: 1, qty: 1 },
			{ id: 2, qty: 1 },
			{ id: 3, qty: 1 },
		]
  },
  mutations: {
		setProducts(state, products) {
			state.products = products;
		},
		REMOVE_FROM_CART (state, id) {
			state.cart = _.filter(state.cart, item => item.id !== id);
		}
  },
  actions: {
		addd ({ commit }, product) {
			console.log('product', product);
		},
		remove ({ commit }, id) {
			commit('REMOVE_FROM_CART', id)
		},
  },
	getters: {
		getProducts: ({ products }) => {
			return products
		},
		getProduct: ({ products }) => id => {
			return products.find(product => product.id == id);
		},
		getCartLengh: ({ cart }) => cart.length,
	}
})
