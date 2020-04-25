//Zadacha 7
let app = new Vue({
	el: '#app',
	data: {
		items: [-2, 0, 1, 4, 6, 9, 10],
	},
	methods: {
		minusItems: function() {
			this.items = this.items.filter((elem) => {
				if (elem > 0 && elem < 10) 
					return true;
				 else 
					return false;
 			});
		},
	},
});