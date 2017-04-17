<template>
	<section>
		<page-header></page-header>
		<voter-page class="page" v-show="page == 'voterPage'"></voter-page>
		<winner-page class="page" v-show="page == 'winnerPage'"></winner-page>
		<data-table class="table"></data-table>
	</section>
</template>
	
<script>
	import PageHeader from './PageHeader.vue';
	import VoterPage from './VoterPage.vue';
	import WinnerPage from './WinnerPage.vue';
	import DataTable from './DataTable.vue';

	export default{
		components: {
			PageHeader: PageHeader,
			VoterPage: VoterPage,
			WinnerPage: WinnerPage,
			DataTable: DataTable
		},
		computed: {
			page: function(){
				return this.$store.getters.page;
			}
		}
	}
</script>

<style lang="sass" scoped>
	.table{
		width: 85%;
		margin: 1rem auto 0px;
	}
</style>