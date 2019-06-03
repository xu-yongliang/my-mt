const state = {
    searchCategory: {
        key: 0,
        data: new Map()
    }
};

const getters = {};

const actions = {};

const mutations = {
    addSearch(state, {search}) {
        state.searchCategory.data.set(search.name, search);
        state.searchCategory.key++;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
