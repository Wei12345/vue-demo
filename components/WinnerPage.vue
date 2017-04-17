<template>
	<section class="page">
		<date-search></date-search>
		<option-bar></option-bar>
		<table>
			<thead>
				<tr>
					<td v-show="winnerOption['date']">日期</td>
					<td v-show="winnerOption['optionNumber']">投票選項</td>
					<td v-show="winnerOption['optionContent']">投票內容</td>
					<td v-show="winnerOption['name']">名字</td>
					<td v-show="winnerOption['phone']">手機</td>
					<td v-show="winnerOption['email']">電子信箱</td>
					<td>獎項</td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="winner in winnerrList">
					<td v-show="winnerOption['date']">{{ winner.date }}</td>
					<td v-show="winnerOption['optionNumber']">{{ winner.optionNumber }}</td>
					<td v-show="winnerOption['optionContent']">{{ winner.optionContent }}</td>
					<td v-show="winnerOption['name']">{{ winner.name }}</td>
					<td v-show="winnerOption['phone']">{{ winner.phone }}</td>
					<td v-show="winnerOption['email']">{{ winner.email }}</td>
					<td>{{ winner.award }}</td>
				</tr>
			</tbody>
		</table>
	</section>
</template>

<script>
	import DateSearch from './DateSearch.vue';
	import OptionBar from './OptionBar.vue';

	export default{
		computed: {
			winnerrList: function(){
				return this.$store.getters.winnerList;
			},
			winnerOption: function(){
				return this.$store.getters.winnerOption;
			}
		},
		components: {
			DateSearch: DateSearch,
			OptionBar: OptionBar
		}
	}
</script>

<style lang="sass" scoped>
	.page{
		table{
			width: 85%;
			margin: 1rem auto 0px;
			border-spacing: 0px;
			border-collapse: collapse;
			thead{
				tr{
					td{
						margin-left: -.2rem;
						border-bottom: 2px solid #ddd;
						padding: .5rem;
					}
				}
			}
			tbody{
				tr{
					td{
						border-top: 1px solid #ddd;
						padding: .5rem;
					}
				}
			}
		}
	}
</style>