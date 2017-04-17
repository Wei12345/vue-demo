const voterList = [
	{
		id: 1,
		date: '2017-04-17',
		optionNumber: '1',
		optionContent: 'aaaaaa',
		name: '陳一',
		phone: '0911111111',
		email: '111@aaa.com'
	},
	{
		id: 2,
		date: '2017-04-16',
		optionNumber: '2',
		optionContent: 'bbbbbb',
		name: '李二',
		phone: '0922222222',
		email: '222@bbb.om'
	},
	{
		id: 3,
		date: '2017-04-15',
		optionNumber: '3',
		optionContent: 'cccccc',
		name: '王三',
		phone: '0933333333',
		email: '333@ccc.com'
	},
	{
		id: 4,
		date: '2017-04-14',
		optionNumber: '4',
		optionContent: 'dddddd',
		name: '張四',
		phone: '0944444444',
		email: '444@ddd.com'
	},
	{
		id: 5,
		date: '2017-04-13',
		optionNumber: '5',
		optionContent: 'eeeeee',
		name: '黃五',
		phone: '0955555555',
		email: '555@eee.com'
	},
	{
		id: 6,
		date: '2017-04-12',
		optionNumber: '6',
		optionContent: 'ffffff',
		name: '林六',
		phone: '0966666666',
		email: '666@fff.com'
	}
];
const winnerList = [
	{
		id: 1,
		voterId: 2,
		date: '2017-04-01',
		optionNumber: '2',
		optionContent: 'bbbbbb',
		name: '李二',
		phone: '0922222222',
		email: '222@bbb.om',
		award: 'aaa獎'
	},
	{
		id: 2,
		voterId: 4,
		date: '2017-04-01',
		optionNumber: '4',
		optionContent: 'dddddd',
		name: '張四',
		phone: '0944444444',
		email: '444@ddd.com',
		award: 'bbb獎'
	},
	{
		id: 3,
		voterId: 6,
		date: '2017-04-10',
		optionNumber: '6',
		optionContent: 'ffffff',
		name: '林六',
		phone: '0966666666',
		email: '666@fff.com',
		award: 'ccc獎'
	}
];
export default{
	getVoterList: function(){
		return voterList;
	},
	getWinnerList: function(date){
		return winnerList.filter(winner => winner.date >= date.startDate && winner.date <= date.endDate);
	}
}