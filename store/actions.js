export default{
	changePage(content, page){
		content.commit('RECEIVE_PAGE', page);
	}
}