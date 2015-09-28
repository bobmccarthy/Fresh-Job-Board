var React=require('react');
module.exports=React.createClass({
	render: function(){
		return(
			<nav>
				<hr className="bigBreak"/>
				<div className="logo">
					<strong className="strong"><a href="#">Fresh Jobs</a></strong>
					<a href="#Jobs">Jobs</a> 
					<a href="#Companies">Companies</a> 
					<a href="#Cities">Cities</a> 
					<a href="#WhyFresh">Why Fresh?</a> 
					<a href="#ForEmployers">For Employers</a> 
				</div>
			</nav>

		);
	}
});