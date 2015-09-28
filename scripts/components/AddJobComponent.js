var React=require('react');
var JobTipsComponent=require('./JobTipsComponent.js');
var JobFormComponent=require('./JobFormComponent.js');
var NavComponent=require('./NavComponent.js');

module.exports=React.createClass({
	render: function(){
		return(
			<div>
				<NavComponent></NavComponent>
				<JobFormComponent></JobFormComponent>
				<JobTipsComponent></JobTipsComponent>
			</div>
		);
	}
});