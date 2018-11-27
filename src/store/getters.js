export default {
    getProducts: ({ products }) => {
        return products
    },
    getProduct: ({ products }) => id => {
        return products.find(product => product.id == id);
    },
    getCartLengh: ({ cart }) => cart.length,
};
