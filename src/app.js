import Vue from "vue"

new Vue({
	el: '#app',
	render: function(createElement) {
		return createElement('div', this.message)
	},
	data: {
		message: 'Hello Vue!'
	}
})