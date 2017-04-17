<!-- 導覽列 -->
<template>
	<nav>
		<ul>
			<li @click="changePage('voterPage')" :class="{active: page == 'voterPage'}">投票列表</li>
			<li @click="changePage('winnerPage')" :class="{active: page == 'winnerPage'}">得獎名單</li>
		</ul>
	</nav>
</template>

<script>
	export default{
		computed: {
			page(){
				// 得到頁面狀態
				return this.$store.getters.page;
			}
		},
		methods: {
			changePage(page){
				// 變更頁面狀態
				this.$store.dispatch('changePage', page);
			}
		}
	}
</script>

<style lang="sass" scoped>
	$height: 3.2rem;
	nav{
		ul{
			list-style: none;
			display: flex;
			justify-content: space-around;
			padding: 0px;
			margin: 0px;
			height: $height;
			width: 100%;
			li{
				display: inline-block;
				height: $height;
				width: 100%;
				line-height: $height;
				text-align: center;
				cursor: pointer;
			}
			li.active{
				background-color: #e7e7e7;
				color: #555;
			}
		}
	}
</style>