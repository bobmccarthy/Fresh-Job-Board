var Backbone = require('backbone');


module.exports = Backbone.Model.extend({
	defaults:{
		id: 0,
		name: '',
		url: '',
		location: '',
		logo: '',
		image: '',
		size: 0,
		date: null

	}
});