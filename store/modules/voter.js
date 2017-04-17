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
	getVoterList(content){
		content.commit('RECEIVE_VOTER', api.getVoterList());
	},
	setVoterOption(content, voterOption){
		content.commit('RECEIVE_VOTER_OPTION', voterOption);
	}
}

const mutations = {
	RECEIVE_VOTER(state, voterList){
		state.voterList = voterList;
	},
	RECEIVE_VOTER_OPTION(state, voterOption){
		state.voterOption = voterOption;
	}
}

export default{
	state,
	getters,
	actions,
	mutations
}