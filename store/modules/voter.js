// 得獎頁模組
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
	// 投票列表
	voterList: state => state.voterList,
	// 投票選項
	voterOption: state => state.voterOption
}

const actions = {
	// 從api獲得得獎列表並提交投票列表更改
	getVoterList(content){
		content.commit('RECEIVE_VOTER', api.getVoterList());
	},
	// 投票選項狀態變更時提交變更事件
	setVoterOption(content, voterOption){
		content.commit('RECEIVE_VOTER_OPTION', voterOption);
	}
}

const mutations = {
	// 執行投票列表更改
	RECEIVE_VOTER(state, voterList){
		state.voterList = voterList;
	},
	// 執行投票選項更改
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