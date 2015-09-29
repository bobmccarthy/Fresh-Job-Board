var React=require('react');
module.exports=React.createClass({
	render: function(){
		return(
			<nav>
				<hr className="bigBreak"/>
				<div className="logo">
					<strong className="strong"><a href="#">Fresh Jobs</a></strong>
					<a href="#jobs">Jobs</a> 
					<a href="#companies">Companies</a> 
					<a href="#cities">Cities</a> 
					<a href="#whyfresh">Why Fresh?</a> 
					<a href="#employers">For Employers</a> 
				</div>
			</nav>

		);
	}
});