<!-- 通用header -->
<template>
	<header>
		<div class="logo">
			Vue
		</div>
		<navbar class="navbar"></navbar>
	</header>
</template>

<script>
	import Navbar from './Navbar.vue';

	export default{
		components: {
			Navbar: Navbar
		}
	}
</script>

<style lang="sass" scoped>
	$height: 3.2rem;
	header{
		background-color: #f8f8f8;
		border-bottom: 1px solid #e7e7e7;
		height: $height;
		padding: 0px 4rem;
		font-size: 1.1rem;
		color: #777;
		margin-bottom: 1.2rem;
		.logo{
			display: inline-block;
			line-height: $height;
		}
		.navbar{
			display: inline-block;
			float: right;
			height: $height;
			width: 13rem;
		}
	}
</style>