<!-- 主畫面 -->
<template>
	<section>
		<page-header></page-header>
		<voter-page v-show="page == 'voterPage'"></voter-page>
		<winner-page v-show="page == 'winnerPage'"></winner-page>
	</section>
</template>
	
<script>
	import PageHeader from './PageHeader.vue';
	import VoterPage from './VoterPage.vue';
	import WinnerPage from './WinnerPage.vue';

	export default{
		components: {
			PageHeader: PageHeader,
			VoterPage: VoterPage,
			WinnerPage: WinnerPage
		},
		computed: {
			page(){
				// 得到頁面顯示狀態
				return this.$store.getters.page;
			}
		}
	}
</script>

<style lang="sass" scoped>
</style>