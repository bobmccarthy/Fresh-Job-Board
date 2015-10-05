var React = require('react');
var JobRowComponent = require('./JobRowComponent');
var CompanyBoxComponent = require('./CompanyBoxComponent');
var LookingCreateComponent = require('./LookingCreateComponent')





module.exports = React.createClass({
	render: function(){

		var coBox = null;
		if (this.props.company.models.length>0){

			coBox= <div id="coBox"><CompanyBoxComponent cpny={this.props.company.models[1]}/></div>
		}
		

		// console.log(this.props.company.models[0])
		var newJobbies = this.props.collection.map(function(job){
				return(
					<JobRowComponent key={job.cid} bimjob={job} />
					)
		});
		return(
			<div>
				<div className="boardBorder">
					{newJobbies}
				</div>
				<div className="boardRight">
					<LookingCreateComponent />
					{coBox}
				</div>
			</div>
		);

	}
	
})