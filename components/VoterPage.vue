<template>
	<section class="page">
		<option-bar></option-bar>
		<table>
			<thead>
				<tr>
					<td v-show="voterOption['date']">日期</td>
					<td v-show="voterOption['optionNumber']">投票選項</td>
					<td v-show="voterOption['optionContent']">投票內容</td>
					<td v-show="voterOption['name']">名字</td>
					<td v-show="voterOption['phone']">手機</td>
					<td v-show="voterOption['email']">電子信箱</td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="voter in voterList">
					<td v-show="voterOption['date']">{{ voter.date }}</td>
					<td v-show="voterOption['optionNumber']">{{ voter.optionNumber }}</td>
					<td v-show="voterOption['optionContent']">{{ voter.optionContent }}</td>
					<td v-show="voterOption['name']">{{ voter.name }}</td>
					<td v-show="voterOption['phone']">{{ voter.phone }}</td>
					<td v-show="voterOption['email']">{{ voter.email }}</td>
				</tr>
			</tbody>
		</table>
	</section>
</template>

<script>
	import OptionBar from './OptionBar.vue';

	export default{
		computed: {
			voterList: function(){
				return this.$store.getters.voterList;
			},
			voterOption: function(){
				return this.$store.getters.voterOption;
			}
		},
		components: {
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