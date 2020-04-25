//Zadacha 13
let app1 = new Vue ({
	el: '#app1',
	data: {
		age: 25,
	},
});

//Zadacha 14
let app2 = new Vue ({
	el: '#app2',
	data: {
		show: true,
	},
	methods: {
		toggleElem: function () {
			this.show = !this.show;
		},
	}
});