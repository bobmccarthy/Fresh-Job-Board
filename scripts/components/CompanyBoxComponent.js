var React = require('react');

module.exports = React.createClass({
	render: function(){
		var style={backgroundImage: 'url('+this.props.model.get('image')+')'};
		return(
			<div className="companyBx">
				<h2>Featured Company</h2>
				<hr/>
				<div className="companyPic" style={style}>
					<img className="logoo" src={this.props.model.get('logo')}/>	
				</div>
				<div><h1>{this.props.model.get('name')}</h1></div>
				<div>{this.props.model.get('location')}</div>
			</div>
		);

	}
	
})