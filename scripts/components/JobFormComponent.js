var React=require('react');
var JobTipsComponent = require('./JobTipsComponent');

module.exports=React.createClass({
	render: function(){
		return(
			<div>

				<form className="border" id="form" onSubmit={this.onFormSubmitted}>
					<h2>Post Your Job</h2>
					<div>
						<h4>Title</h4>
						<input type="text" ref="title" />
					</div>
					<div>
						<h4>Company Name</h4>
						<input type="text" ref="company" />
					</div>
					<div>
						<h4>Location</h4>
						<input type="text" ref="location" />
					</div>
					<div>
						<h4>Description</h4>
						<textarea type="text" ref="description" ></textarea>
					</div>
					<div>
						<h4>Tags</h4>
						<input type="text" ref="tags" />
					</div>
					<button className="submitButton">Submit Job</button>

				</form>
				<JobTipsComponent />
			</div>


		);
	},
	onFormSubmitted: function(e){
		e.preventDefault();
		if (this.refs.title.getDOMNode().value===''){
			
		}
		else{
			this.props.collection.create({
			title: this.refs.title.getDOMNode().value,
			company: this.refs.company.getDOMNode().value,
			location: this.refs.location.getDOMNode().value,
			description: this.refs.description.getDOMNode().value,
			tags: this.refs.tags.getDOMNode().value,
			date: new Date().toDateString()
			});
		}
		this.props.router.navigate('details', {trigger: true});
		
		
	}
});