var React = require('react');
var Backbone = require('backbone');


var JobPostComponent = require('./JobPostComponent.js');
var JobDetailsComponent = require('./JobPostComponent.js');
var JobFormComponent = require('./JobFormComponent.js');
var CompanyBoxComponent = require('./CompanyBoxComponent');

var NewJobCollection = require('../collections/NewJobCollection');
// var CompanyCollection = require('../collections/CompanyCollection');


// var JobPostModel = require('../models/JobPostModel.js');
// var CompanyModel = require('../models/CompanyModel.js');



module.exports = React.createClass({
	getInitialState: function(){
		return {
			pageName: '',
			id: null
		};
	},
	componentWillMount: function(){
		var that = this;
		this.jobs = new NewJobCollection();
		this.jobs.fetch();
		this.jobs.on('sync', function(){
			that.forceUpdate();
		})
		var Router = Backbone.Router.extend({
			routes: {
				'': 'home',
				'jobs': 'list',
				'employers': 	'add',
				'details/:id': 'details',
				'companies': 'companies'
			},
			home: function(){
				that.setState({
					pageName: ''
				})
			},
			list: function() {
				that.setState({
					pageName: 'jobs'
				});
			},
			add: function() {
				that.setState({
					pageName: 'employers'
				});
			},
			details: function(id) {
				that.setState({
					pageName: 'details',
					id: id
				});
			},
			companies: function(){
				that.setState({
					pageName: 'companies'
				});
			}
		});

		var r = new Router();
		Backbone.history.start();
	},
	render: function(){
		var pageOn = null;
		if(this.state.pageName === 'jobs') {
			pageOn = <JobPostComponent collection={this.jobs} />;
		}
		else if(this.state.pageName === 'details') {
			pageOn = <JobDetailsComponent  />;
		}
		else if(this.state.pageName === 'employers') {
			pageOn = <JobFormComponent />
		}
		else if(this.state.pageName === 'companies') {
			pageOn = <CompanyBoxComponent />
		}



		return(
			<div>
				{pageOn}
			</div>
		);

	}
	
})