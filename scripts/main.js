'use strict';
var React = require('react');
var AddJobComponent=require('./components/AddJobComponent.js');

//dont forget to capitalize


var addJobPage=document.getElementById('addJobPage');


React.render(
	<AddJobComponent></AddJobComponent>,
	addJobPage
);

