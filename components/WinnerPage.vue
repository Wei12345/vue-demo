<template>
	<section>
		<date-search></date-search>
		<option-bar></option-bar>
	</section>
</template>

<script>
	import DateSearch from './DateSearch.vue';
	import OptionBar from './OptionBar.vue';

	export default{
		components: {
			DateSearch: DateSearch,
			OptionBar: OptionBar
		}
	}
</script>
<style lang="sass" scoped>
	section{
		display: none;
	}
</style>