// 提交頁面更改
export default{
	changePage(content, page){
		content.commit('RECEIVE_PAGE', page);
	}
}