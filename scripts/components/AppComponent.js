var React = require('react');
var Backbone = require('backbone');

var HomePageComponent = require('./HomePageComponent');
var JobPostComponent = require('./JobPostComponent.js');
var JobDetailsComponent = require('./JobDetailsComponent.js');
var JobFormComponent = require('./JobFormComponent.js');
var CompanyBoxComponent = require('./CompanyBoxComponent');

var NewJobCollection = require('../collections/NewJobCollection');
var CompanyCollection = require('../collections/CompanyCollection');


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
		this.x= new CompanyCollection();
		this.x.fetch();
		this.x.on('sync', function(){
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

		this.router = new Router();
		Backbone.history.start();
	},
	render: function(){
		var pageOn = null;
		// console.log(this.x);
		if(this.state.pageName === 'jobs') {
			pageOn = <JobPostComponent collection={this.jobs} company={this.x} />;
		}
		else if(this.state.pageName === 'details') {
			var jobModel=null;
			if (this.jobs.length>0){
				// console.log(this.state.id);
				
				for (var i=0; i<this.jobs.models.length; i++){
					if (this.jobs.models[i].attributes._id===this.state.id){
						jobModel = this.jobs.models[i];
						pageOn = <JobDetailsComponent job={jobModel} />;
					}
				}

				
			}
			
		
		}
		else if(this.state.pageName === 'employers') {
			pageOn = <JobFormComponent collection={this.jobs} router={this.router}/>
		}
		else if(this.state.pageName === 'companies') {
			if (this.x.models.length>0){
				console.log(this.x.models[0]);
				pageOn = <CompanyBoxComponent cpny={this.x.models[0]}/>
			}
			
		}
		else if (this.state.pageName === '') {
			pageOn = <HomePageComponent />
		}


		return(
			<div>
				{pageOn}
			</div>
		);

	}
	
})