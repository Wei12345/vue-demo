<!-- input群組子件 -->
<template>
	<div>
		<span>{{ addon }}</span><input type="date" :min="min" :max="max" @change="change" :value="value"></input>
	</div>
</template>

<script>
	export default{
		props: ['addon', 'max', 'min', 'value'],
		methods: {
			change(e){
				// 變更時觸發一個變更事件，並傳出變更值
				this.$emit('change', e.target.value);
			}
		}
	}
</script>

<style lang="sass" scoped>
	div{
		color: #464a4c;
		span{
			display: inline-block;
			vertical-align: middle;
			padding: .5rem .75rem;
			text-align: center;
			background-color: #eceeef;
			border: 1px solid rgba(0, 0, 0, .15);
			border-radius: .25rem;
			border-right: none;
			border-top-right-radius: 0px;
			border-bottom-right-radius: 0px;
		}
		input{
			display: inline-block;
			vertical-align: middle;
			padding: .5rem .75rem;
			border: 1px solid rgba(0, 0, 0, .15);
			border-radius: .25rem;
			border-top-left-radius: 0px;
			border-bottom-left-radius: 0px;
			transition: all ease-in-out .15s;
			&:focus{
				border-color: #5cb3fd;
				outline: 0px;
			}
		}
	}
</style>