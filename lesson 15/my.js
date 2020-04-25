//Zadacha 8
let app = new Vue({
	el: '#app',
	data: {
		curentTime: new Date(),
	},
	filters: {
		Time: function(e) {
			year = e.getFullYear();
			day = e.getDate();
			month = e.getMonth() + 1;
			ch = day + '.' + month + '.' + year;
			return ch.split('.').reverse().join('.');
		},
	}
});