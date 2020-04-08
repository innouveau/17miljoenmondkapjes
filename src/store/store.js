import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import ui from './modules/ui';
import modal from './modules/modal';

const state = {
    dataLoaded: false
};
const mutations = {
    updateProperty(state, payload) {
        state[payload.key] = payload.value;
    }
};

export default new Vuex.Store({
    state,
    mutations,
    actions: {},
    modules: {
        ui, modal
    }

})
