var Backbone = require('backbone');

var CompanyModel = require ('../models/CompanyModel.js');

module.exports = Backbone.Collection.extend({
	model: CompanyModel,
	url: 'https://jmingus-server.herokuapp.com/collections/bobCompany'
});