export default {
    add ({ commit }, id, qty) {
        commit("ADD_TO_CART", { id, qty });
    },
    remove ({ commit }, id) {
        commit('REMOVE_FROM_CART', id)
    },
};
