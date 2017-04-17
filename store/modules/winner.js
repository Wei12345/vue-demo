// 抽獎頁模組
import api from '../../api/api.js';
const date = new Date();
const state = {
	winnerList: [],
	winnerOption: {
		date: true,
		optionNumber: true,
		optionContent: true,
		name: true,
		phone: true,
		email: true
	},
	startDate: '2017-01-01',
	endDate: '2017-12-31'
}

const getters = {
	// 得獎列表
	winnerList: state => state.winnerList,
	// 得獎選項
	winnerOption: state => state.winnerOption,
	// 得獎日期
	startDate: state => state.startDate,
	// 結束日期
	endDate: state => state.endDate
}

const actions = {
	// 從api獲得得獎列表並提交得獎列表更改
	getWinnerList(content){
		content.commit('RECEIVE_WINNER', api.getWinnerList(
			{
				startDate: content.state.startDate,
				endDate: content.state.endDate 
			}
		));
	},
	// 得獎選項狀態變更時提交變更事件
	setWinnerOption(content, winnerOption){
		content.commit('RECEIVE_WINNER_OPTION', winnerOption);
	},
	// 開始日期變更時提交變更事件
	changeStartDate(content, date){
		content.commit('RECEIVE_START_DATE', date);
	},
	// 結束日期變更時提交變更事件
	changeEndDate(content, date){
		content.commit('RECEIVE_END_DATE', date);
	}
}

const mutations = {
	// 執行得獎列表更改
	RECEIVE_WINNER(state, winnerList){
		state.winnerList = winnerList;
	},
	// 執行得獎選項更改
	RECEIVE_WINNER_OPTION(state, winnerOption){
		state.winnerOption = winnerOption;
	},
	// 執行得獎開始日期更改
	RECEIVE_START_DATE(state, date){
		state.startDate = date;
	},
	// 執行得獎結束日期更改
	RECEIVE_END_DATE(state, date){
		state.endDate = date;
	}
}

export default{
	state,
	getters,
	actions,
	mutations
}