var React=require('react');
var JobTipsComponent=require('./JobTipsComponent.js');
var JobFormComponent=require('./JobFormComponent.js');


module.exports=React.createClass({
	render: function(){
		return(
			<div>
				<JobFormComponent></JobFormComponent>
				<JobTipsComponent></JobTipsComponent>
			</div>
		);
	}
});