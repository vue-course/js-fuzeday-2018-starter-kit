import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		products: [],
    cart: [
      {
				createdAt: "2018-11-03T10:10:12Z",
				description: "Description:Colour: BlackModel:for xbox360Game machine accessories type: other game peripheralsApplicable products:for XBOX360Scope of application: sensory magnifierVideo game rating: entry level, elite level, enthusiast levelExperience distance: within 1.8mApplicable:Can be used in any game that supports for Kinect and play for single and multiplayerProduct size: 12.5*8.0*4.0cm",
				id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzE4MTAwNDA1ODYzMzg=",
				image: "https://cdn.shopify.com/s/files/1/0049/5186/7490/products/product-image-783880089.jpg?v=1541239815",
        title: "Somatosensory Magnifier Game Sensory Magnifier Convenient Game Families Game Sensor Wide Lens PVC Play Game Peripherals",
        updatedAt: "2018-11-22T21:18:32Z",
        vendor: "RoyKTikal",
				quantity: 4
      },
      {
				createdAt: "2018-11-03T10:10:13Z",
				description: "Specifications:Color: 5 colors (random)Material: Plastic + metalScreen size: 4.2cm*3cmProduct size: 17.9cm*7.4cm*2.3cmNet weight: 69 gGross weight: 84 gPower supply: 2*AA battery (without battery)Screen type: WhiteLanguage: English",
				id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzE4MTAwNDA2NTE4NzQ=",
				image: "https://cdn.shopify.com/s/files/1/0049/5186/7490/products/product-image-760266788.jpg?v=1541239816",
        publishedAt: "2018-11-04T11:51:06Z",
        title: "Game Held Hand Brick",
        updatedAt: "2018-11-22T21:18:32Z",
        vendor: "RoyKTikal",
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
<<<<<<< HEAD
    
=======
		remove ({ commit }, id) {
			commit('REMOVE_FROM_CART', id)
		},
>>>>>>> b7f5085b7d4914e69d2eb4ed3c0f607a6079dd4e
  },
	getters: {
		getProducts: ({ products }) => {
			return products
		},
		getProduct: ({ products }) => id => {
			return products.find(product => product.id == id);
		}
	}
})
