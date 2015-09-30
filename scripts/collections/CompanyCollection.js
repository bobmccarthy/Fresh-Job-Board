var Backbone = require('backbone');

var CompanyModel = require ('../models/CompanyModel.js');

module.exports = Backbone.Collection.extend({
	model: CompanyModel
});