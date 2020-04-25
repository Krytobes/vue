let app = new Vue({
	el: '#app',
	data: {
		isActive: false,
		color1: 'black',
	},
	methods: {
		Color: function() {
			this.color1 = !this.isActive ? 'red' : 'black';
		}
	}
});