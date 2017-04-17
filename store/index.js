import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations.js';
import voter from './modules/voter.js';

Vue.use(Vuex);

const state = {
	page: 'voterPage'
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
	modules: {
		voter
	}
});