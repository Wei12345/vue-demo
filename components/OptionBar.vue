<!-- 選項列 -->
<template>
	<section>
		<label>
			<input type="checkbox" value="date" :checked="option['date']" @change="changeOption"> 日期
		</label>
		<label>
			<input type="checkbox" value="optionNumber" :checked="option['optionNumber']" @change="changeOption"> 投票選項
		</label>
		<label>
			<input type="checkbox" value="optionContent" :checked="option['optionContent']" @change="changeOption"> 投票內容
		</label>
		<label>
			<input type="checkbox" value="name" :checked="option['name']" @change="changeOption"> 名字
		</label>
		<label>
			<input type="checkbox" value="phone" :checked="option['phone']" @change="changeOption"> 手機
		</label>
		<label>
			<input type="checkbox" value="email" :checked="option['email']" @change="changeOption"> 電子信箱
		</label>
	</section>
</template>

<script>
	
	export default{
		computed: {
			option(){
				// 依照頁面得到不同的選項狀態
				if(this.$store.getters.page == 'voterPage'){
					return this.$store.getters.voterOption;
				}
				else if(this.$store.getters.page == 'winnerPage'){
					return this.$store.getters.winnerOption;
				}
			}
		},
		methods: {
			changeOption(e){
				// 依照頁面提交變更的選項狀態
				if(this.$store.getters.page == 'voterPage'){
					// 防止物件傳址造成voterOption變更，使用assign傳值
					const option = Object.assign({}, this.$store.getters.voterOption);
					option[e.target.value] = e.target.checked;
					this.$store.dispatch('setVoterOption', option);
				}
				else if(this.$store.getters.page == 'winnerPage'){
					// 防止物件傳址造成winnerOption變更，使用assign傳值
					const option = Object.assign({}, this.$store.getters.winnerOption);
					option[e.target.value] = e.target.checked;
					this.$store.dispatch('setWinnerOption', option);
				}
			}
		}
	}
</script>

<style lang="sass" scoped>
	section{
		text-align: center;
		label{
			cursor: pointer;
			input{
				cursor: pointer;
			}
		}
	}
</style>