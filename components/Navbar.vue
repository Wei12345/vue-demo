<template>
	<nav>
		<ul>
			<li class="active">投票列表</li>
			<li>得獎名單</li>
		</ul>
	</nav>
</template>

<script>
	export default{

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