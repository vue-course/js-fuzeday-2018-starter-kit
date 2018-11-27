export default {
    getProducts: ({ products }) => {
        return products
    },
    getProduct: ({ products }) => id => {
        return products.find(product => product.id == id);
    },
    getCartLengh: ({ cart }) => cart.length,
    getProductsByIds: state => {
        return state.cart.map(item => {
          const product = _.find(state.products, product => product.id === item.id);
          return {
            ...item,
            ...product
          };
        });
    }
};
