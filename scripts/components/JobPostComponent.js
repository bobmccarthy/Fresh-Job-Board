var React = require('react');

module.exports = React.createClass({
	render: function(){
		return(
			<div>
				<hr/>
				<span><strong>{this.props.model.get('title')}</strong> <span className="postDate">{this.props.model.get('date')}</span></span>
				<div><h5><strong>{this.props.model.get('company')}</strong> - {this.props.model.get('location')}</h5></div>
				<p>{this.props.model.get('description')}</p>
				<div><span className="taga">{this.props.model.get('tags')}</span></div>
				
				
			</div>
		);

	}
	
})