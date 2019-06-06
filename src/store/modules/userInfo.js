const state = {
    city: "北京",
    historyCity: []
};

const getters = {};

const actions = {};

const mutations = {
    setCity(state, {city}) {
        if (!city || city === state.city) {
            return;
        }
        state.city = city;


        for (let i = 0, end = state.historyCity.length; i < end; i++) {
            if (state.historyCity[i] === city) {
                state.historyCity.splice(i, 1);
                break;
            }
        }
        state.historyCity.unshift(city);
        state.historyCity.splice(11);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
