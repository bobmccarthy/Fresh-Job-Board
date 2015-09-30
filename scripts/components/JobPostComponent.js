var React = require('react');
var JobRowComponent = require('./JobRowComponent');
var CompanyBoxComponent = require('./CompanyBoxComponent');
var LookingCreateComponent = require('./LookingCreateComponent')
var CompanyModel = require('../models/CompanyModel')


var newCompanyModel1= new CompanyModel({
	id: 0,
	name: 'Google',
	url: 'google.com',
	location: 'Mountain View, CA',
	logo: 'http://i.kinja-img.com/gawker-media/image/upload/s--pEKSmwzm--/c_scale,fl_progressive,q_80,w_800/1414228815325188681.jpg',
	image: 'data:image/jpeg;base64,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',
	size: 26000,
	date: new Date().toDateString()
})

module.exports = React.createClass({
	render: function(){

		var jobRows = this.props.collection.map(function(job) {
			return (
					<JobRowComponent key={job.id} job={job} />
			);
		});


		return(
			<div>
				<div className="boardBorder">
					{jobRows}
				</div>
				<div className="boardRight">
					<LookingCreateComponent />
					<CompanyBoxComponent model={newCompanyModel1}/>
				</div>
			</div>
		);

	}
	
})