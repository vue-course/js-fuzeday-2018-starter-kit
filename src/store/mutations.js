import _ from 'lodash';

export default {
    setProducts(state, products) {
        state.products = products;
    },
    ADD_TO_CART (state, product) {
        state.cart.push(product);
    },
    REMOVE_FROM_CART (state, id) {
        state.cart = _.filter(state.cart, item => item.id !== id);
    }
};
