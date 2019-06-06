const state = {
    searchCategory: {
        key: 0,
        data: new Map()
    },
    searchWord: ''
};

const getters = {};

const actions = {};

const mutations = {
    addSearch(state, {search}) {
        state.searchCategory.data.set(search.name, search);
        state.searchCategory.key++;
    },
    setSearch(state, {search}) {
        state.searchWord = search;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
