<template>
	<section>
		<label>
			<input type="checkbox" v-model="option['date']"> 日期
		</label>
		<label>
			<input type="checkbox" v-model="option['optionNumber']"> 投票選項
		</label>
		<label>
			<input type="checkbox" v-model="option['optionContent']"> 投票內容
		</label>
		<label>
			<input type="checkbox" v-model="option['name']"> 名字
		</label>
		<label>
			<input type="checkbox" v-model="option['phone']"> 手機
		</label>
		<label>
			<input type="checkbox" v-model="option['email']"> 電子信箱
		</label>
	</section>
</template>

<script>

	export default{
		computed: {
			option: {
				get: function(){
					if(this.$store.getters.page == 'voterPage'){
						return this.$store.getters.voterOption;
					}
				},
				set: function(option){
					if(this.$store.getters.page == 'voterPage'){
						this.$store.dispatch('setVoterOption', option);
					}
				}
			}
		}
	}
</script>

<style lang="sass" scoped>
	section{
		text-align: center;
	}
</style>