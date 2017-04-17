<!-- 日期搜尋子件 -->
<template>
	<section>
		<input-group class="startDate" addon="起始" min="2017-01-01" max="2017-12-31" :value="startDate" @change="startDateChange"></input-group>
		<input-group class="endDate" addon="結束" min="2017-01-01" max="2017-12-31" :value="endDate" @change="endDateChange"></input-group>
	</section>
</template>

<script>
	import InputGroup from './InputGroup.vue';

	export default{
		computed: {
			// 得到開始日期
			startDate(){
				return this.$store.getters.startDate;
			},
			// 得到結束日期
			endDate(){
				return this.$store.getters.endDate;
			}
		},
		methods: {
			// 開始日期變更時
			startDateChange(date){
				const endDate = this.$store.getters.endDate;
				// 如果開始日期的變更日期大於結束日期，則開始日期變為結束日期，結束日期變為變更日期
				if(Date.parse(date).valueOf() > Date.parse(endDate).valueOf()){
					this.$store.dispatch('changeStartDate', endDate);
					this.$store.dispatch('changeEndDate', date);
				}
				else{
					this.$store.dispatch('changeStartDate', date);	
				}
				// 重新得到得獎者列表
				this.$store.dispatch('getWinnerList');
			},
			// 結束日期變更時
			endDateChange(date){
				// 如果結束日期的變更小於開始日期，則結束日期變為開始日期，開始日期變為變更日期
				const startDate = this.$store.getters.startDate;
				if(Date.parse(date).valueOf() < Date.parse(startDate).valueOf()){
					this.$store.dispatch('changeEndDate', startDate);
					this.$store.dispatch('changeStartDate', date);
				}
				else{
					this.$store.dispatch('changeEndDate', date);
				}
				// 重新得到得獎者列表
				this.$store.dispatch('getWinnerList');
			}
		},
		components: {
			InputGroup: InputGroup
		}
	}
</script>

<style lang="sass" scoped>
	section{
		width: 30rem;
		margin: 0px auto;
		display: flex;
		justify-content: space-around;
		.startDate{
			
		}
		.endDate{

		}
	}
</style>