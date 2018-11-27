import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		products: [],
    cart: [
      {
				id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzE4MTAwNDA1ODYzMzg=",
				quantity: 4
      },
      {
				id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzE4MTAwNDA2NTE4NzQ=",
				quantity: 2
      }
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
		remove ({ commit }, id) {
			commit('REMOVE_FROM_CART', id)
		}
  },
	getters: {
		getProducts: ({ products }) => {
			return products
		},
		getProduct: ({ products }) => id => {
			return products.find(product => product.id == id);
		},
		getProductsByIds: state => {
			return state.cart.map(item => {
				const product = _.find(state.products, product => product.id === item.id);
				return {
					...item,
					...product
				};
			});
		}
	}
})
