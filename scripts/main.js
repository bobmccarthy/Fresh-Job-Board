'use strict';
var React = require('react');
var $ = require ('jquery');


var AppComponent = require('./components/AppComponent.js');
var NavComponent = require('./components/NavComponent.js');
//dont forget to capitalize

var nav =document.getElementById('nav');
var main=document.getElementById('main');



$(document).ready(function(){
	

	React.render(
		<NavComponent />,
		nav
	);

	React.render(
		<AppComponent />,
		main
	);
})