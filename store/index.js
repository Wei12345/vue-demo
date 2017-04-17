import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations.js';
import voter from './modules/voter.js';
import winner from './modules/winner.js';

Vue.use(Vuex);

const state = {
	page: 'voterPage'
}
// 使用嚴格模式
const debug = true;

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
	modules: {
		voter,
		winner
	},
	strict: debug
});