<template>
	<section>
		<page-header></page-header>
		<voter-page class="active"></voter-page>
		<winner-page></winner-page>
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
		}
	}
</script>
<style lang="sass">
	.active{
		display: block;
	}
</style>