//Zadacha 4
let app = new Vue({
	el: '#app',
	data: {
		items: [-5, 3, 10],
	},
	methods: {
		getSquare: function(index) {
			let sqr = this.items[index] * this.items[index];
			this.items.splice(index, 1, sqr);
		}
	}
});