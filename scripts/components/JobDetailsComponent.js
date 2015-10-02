var React = require('react');


module.exports = React.createClass({
	
	render: function(){
		
		
		return(
			<div className="jobDeets">
				<hr/>
				<span><strong><a href={'#details/'+this.props.job.get('_id')}>{this.props.job.get('title')}</a></strong> <span className="postDate">{this.props.job.get('date')}</span></span>
				<div><h5><strong>{this.props.job.get('company')}</strong> - {this.props.job.get('location')}</h5></div>
				<p>{this.props.job.get('description')}</p>
				<div><span className="taga">{this.props.job.get('tags')}</span></div>
			</div>
		);


	}
	
})