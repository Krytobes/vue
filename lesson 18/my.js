let app = new Vue({
	el: '#app',
	data: {
		text: '',
	},
	methods: {
		Left: function() {
			this.text = "left";
		},
		Right: function() {
			this.text = "right";
		},
		Middle: function() {
			this.text = "middle";
		},
	},
});