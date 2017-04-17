import api from '../../api/api.js';
const state = {
	winnerList: [],
	winnerOption: {
		date: true,
		optionNumber: true,
		optionContent: true,
		name: true,
		phone: true,
		email: true
	}
}

const getters = {
	winnerList: state => state.winnerList,
	winnerOption: state => state.winnerOption
}

const actions = {
	getWinnerList: function(content){
		content.commit('RECEIVE_WINNER', api.getWinnerList());
	},
	setWinnerOption: function(content, winnerOption){
		content.commit('RECEIVE_WINNER_OPTION', winnerOption);
	}
}

const mutations = {
	RECEIVE_WINNER: function(state, winnerList){
		state.winnerList = winnerList;
	},
	RECEIVE_WINNER_OPTION: function(state, winnerOption){
		state.winnerOption = winnerOption;
	}
}

export default{
	state,
	getters,
	actions,
	mutations
}