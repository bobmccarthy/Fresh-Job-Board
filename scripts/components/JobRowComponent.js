var React = require('react');


module.exports = React.createClass({
	
	render: function(){
		var split = this.props.bimjob.get('description').split('.');
		
		return(
			<div>
				<hr/>
				<span><strong><a href={'#details/'+this.props.bimjob.get('_id')}>{this.props.bimjob.get('title')}</a></strong> <span className="postDate">{this.props.bimjob.get('date')}</span></span>
				<div><h5><strong>{this.props.bimjob.get('company')}</strong> - {this.props.bimjob.get('location')}</h5></div>
				<p>{split[0]}</p>
				<div><span className="taga">{this.props.bimjob.get('tags')}</span></div>
			</div>
		);


	}
	
})