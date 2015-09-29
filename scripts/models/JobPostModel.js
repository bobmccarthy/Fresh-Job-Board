var Backbone = require('backbone');


module.exports = Backbone.Model.extend({
	defaults:{
		id: 0,
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
