var React=require('react');
var JobTipsComponent = require('./JobTipsComponent');

module.exports=React.createClass({
	render: function(){
		return(
			<div>

				<div className="border" id="form">
					<h2>Post Your Job</h2>
					<div>
						<h4>Title</h4>
						<input type="text" />
					</div>
					<div>
						<h4>Company Name</h4>
						<input type="text" />
					</div>
					<div>
						<h4>Location</h4>
						<input type="text" />
					</div>
					<div>
						<h4>Description</h4>
						<textarea type="text"></textarea>
					</div>
					<div>
						<h4>Tags</h4>
						<input type="text" />
					</div>
					<button className="submitButton">Submit Job</button>

				</div>
				<JobTipsComponent />
			</div>


		);
	}
});