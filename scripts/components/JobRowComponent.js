var React = require('react');


module.exports = React.createClass({
	render: function(){
		return(
			<div>
				<hr/>
				<span><strong>{this.props.job.get('title')}</strong> <span className="postDate">{this.props.job.get('date')}</span></span>
				<div><h5><strong>{this.props.job.get('company')}</strong> - {this.props.job.get('location')}</h5></div>
				<p>{this.props.job.get('description')}</p>
				<div><span className="taga">{this.props.job.get('tags')}</span></div>
			</div>
		);

	}
	
})