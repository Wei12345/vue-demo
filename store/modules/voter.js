import api from '../../api/api.js';
const state = {
	voterList: [],
	voterOption: {
		date: true,
		optionNumber: true,
		optionContent: true,
		name: true,
		phone: true,
		email: true
	}
	
}

const getters = {
	voterList: state => state.voterList,
	voterOption: state => state.voterOption
}

const actions = {
	getVoterList: function(content){
		content.commit('RECEIVE_VOTER', api.getVoterList());
	},
	setVoterOption: function(content, voterOption){
		content.commit('RECEIVE_OPTION', voterOption);
	}
}

const mutations = {
	RECEIVE_VOTER: function(state, voterList){
		state.voterList = voterList;
	},
	RECEIVE_OPTION: function(state, voterOption){
		state.voterOption = voterOption;
	}
}

export default{
	state,
	getters,
	actions,
	mutations
}