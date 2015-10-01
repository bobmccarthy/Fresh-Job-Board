var Backbone = require('backbone');


module.exports = Backbone.Model.extend({
	defaults:{
		title: '',
		company: '',
		location: '',
		description: '',
		longVerse: '',
		tags: [],
		date: '',
		pay: 0
	}
});
