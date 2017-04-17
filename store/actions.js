export default{
	changePage(content){
		if(content.state.page == 'voterPage'){
			content.commit('RECEIVE_PAGE', 'winnerPage');
		}
		else{
			content.commit('RECEIVE_PAGE', 'voterPage');
		}
	}
}