var React = require('react');
var Backbone = require('backbone');


var JobPostComponent = require('./JobPostComponent.js');
var JobDetailsComponent = require('./JobPostComponent.js');
var JobAddComponent = require('./JobPostComponent.js');

var NewJobCollection = require('../collections/NewJobCollection');
// var CompanyCollection = require('../collections/CompanyCollection');


var JobPostModel = require('../models/JobPostModel.js');
// var CompanyModel = require('../models/CompanyModel.js');


var newJobModel1= new JobPostModel({
	id: 0,
	title: 'Front End Developer',
	company: 'GOOGLE',
	location: 'Austin, Tx',
	description: 'We are looking for someone experienced in using jQuery, Backbone, and react.',
	longVerse: '',
	tags: ['BestPlaceToWork', ' Google', ' Fun', ' Awesome!'],
	date: new Date().toDateString()
})
var newJobModel2= new JobPostModel({
	id: 1,
	title: 'Back End Developer',
	company: 'Display Inc.',
	location: 'Austin, Tx',
	description: 'We are looking for someone experienced in using jQuery, Backbone, and react.',
	longVerse: '',
	tags: ['BestPlaceToWork', ' Google', ' Fun', ' Awesome!'],
	date: new Date().toDateString()
})
var newJobModel3= new JobPostModel({
	id: 2,
	title: 'Fun Time Live',
	company: 'Fun Inc.',
	location: 'Austin, Tx',
	description: 'Whoever is having the best time ever! We are looking for someone experienced in using jQuery, Backbone, and react.',
	longVerse: '',
	tags: ['Fun', ' Intense', ' Fun', ' Awesome!'],
	date: new Date().toDateString()
})
var newJob = new NewJobCollection([
	newJobModel1,
	newJobModel2,
	newJobModel3
	]);

console.log(newJob);

module.exports = React.createClass({
	getInitialState: function(){
		return {
			pageName: '',
			id: null
		};
	},
	componentWillMount: function(){
		var that = this;
		// this.jobs = new JobCollection();
		// newJob.fetch();
		var Router = Backbone.Router.extend({
			routes: {
				'': 'home',
				'jobs': 'list',
				'add': 	'add',
				'details/:id': 'details'
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
					pageName: 'add'
				});
			},
			details: function(id) {
				that.setState({
					pageName: 'details',
					id: id
				});
			}
		});

		var r = new Router();
		Backbone.history.start();
	},
	render: function(){
		var pageOn = null;
		if(this.state.pageName === 'jobs') {
			pageOn = <JobPostComponent collection={newJob} />;
		}
		else if(this.state.pageName === 'details') {
			pageOn = <JobDetailsComponent  />;
		}
		else if(this.state.pageName === 'add') {
			pageOn = <JobAddComponent />;
		}



		return(
			<div>
				{pageOn}
			</div>
		);

	}
	
})