var Backbone = require('backbone');

var JobPostModel = require ('../models/JobPostModel.js');

module.exports = Backbone.Collection.extend({
	model: JobPostModel
});