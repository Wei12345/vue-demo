import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	page: 'voterPage',
	voterList: [],
	winnerList: []
}

export default new Vuex.Store({
	state
});