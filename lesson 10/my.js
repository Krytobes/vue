//Zadacha 2
let app1 = new Vue({
	el: '#app1',
	data: {
		message: '',
		items: [],
	},
	methods: {
		getArr: function() {
			this.items = this.message.split(' ');
		},
	},
});

//Zadacha 7
let app2 = new Vue({
	el: '#app2',
	data: {
		items: [], // значение по умолчанию - массив
	},
});

//Zadacha 8
let app3 = new Vue({
	el: '#app3',
	data: {
		type: '', // не забываем задать привязанное свойство в data
	},
});

//Zadacha 11
let app4 = new Vue({
	el: '#app4',
	data: {
		selected: '', // значение по умолчанию
		options: ['один', 'два', 'три'], // массив
	},
});