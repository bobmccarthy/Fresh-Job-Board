var Backbone = require('backbone');


module.exports = Backbone.Model.extend({
	defaults:{
		name: '',
		url: '',
		location: '',
		logo: '',
		image: '',
		size: 0,
		date: null

	}
});