var React = require('react');






module.exports = React.createClass({
	render: function(){
		// console.log(this.props.cpny);
		
		var style={backgroundImage: 'url('+this.props.cpny.get('image')+')'};
		return(
			<div className="companyBx">
				<h2>Featured Company</h2>
				<hr/>
				<div className="companyPic" style={style}>
					<img className="logoo" src={this.props.cpny.get('logo')}/>	
				</div>
				<div><h1>{this.props.cpny.get('name')}</h1></div>
				<div>{this.props.cpny.get('location')}</div>
			</div>
		);

	}
	
})