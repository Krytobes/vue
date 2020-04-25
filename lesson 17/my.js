//Zadacha 1
let app1 = new Vue({
	el: '#app1',
	data: {
		message: '',
	},
	methods: {
		addText: function() {
			this.message = 'https://www.youtube.com/';
		},
	},
});

//Zadacha 3
let app2 = new Vue({
	el: '#app2',
	data: {
		text: "Привет"
	},
	methods: {
		smena: function() {
			this.text = 'Пока';
		}
	},
});

//Zadacha 4
let app3 = new Vue({
	el: '#app3',
	data: {
		message: '',
	},
	methods: {
		newMessage: function() {
			this.message = '<span style="color: red;">Текст должен быть красным</span>';
		},
	},
});