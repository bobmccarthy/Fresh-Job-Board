var React = require('react');

module.exports = React.createClass({
	render: function(){
		return(
			<div className="yellerB">
				<h1>Looking for A Job?</h1>
				<hr/>
				<p>Create a fresh job profile, and <strong>Let Employers Come To You</strong></p>
				<ul>
					<li>Employers search our database and come to you</li>
					<li>Import Easily from LinkedIn</li>
					<li>Link to Stack Overflow, GitHub, CodePlex and more</li>
				</ul>
				<button className="createPB">Create Profile!</button>
			</div>
		);

	}
	
})