'use strict';
var React = require('react');
var $ = require ('jquery');
var Backbone = require('backbone');
var AddJobComponent=require('./components/AddJobComponent.js');
var AppComponent = require('./components/AppComponent.js');
var NavComponent = require('./components/NavComponent.js');
//dont forget to capitalize

var nav =document.getElementById('nav');
var jobSearch=document.getElementById('jobSearch');
var employer=document.getElementById('employer');


$(document).ready(function(){
	var Router = Backbone.Router.extend({
			routes: {
				'' : 'goHome',
				'jobs': 'goJobs',
				'companies': 'goCompanies',//THIS IS MAKING THE INTER SCREEN NOT COME UP
				'cities': 'goCities',
				'whyfresh': 'goWhyfresh',
				'employers': 'goEmployers'
			},


			goHome: function() {
				$('section').hide();
				$('#nav').show();
			},

			goJobs: function () {
				$('section').hide();
				$('#nav').show();
				$('#jobSearch').show();
			},
			goCompanies: function(){
				$('section').hide();
				$('#nav').show();
			},
			goCities: function(){
				$('section').hide();
				$('#nav').show();		
			},
			goWhyfresh: function() {
				$('section').hide();
				$('#nav').show();
			},
			goEmployers: function(){
				$('section').hide();
				$('#nav').show();
				$('#employer').show();
			}


		});

		var page = new Router ();
		Backbone.history.start();



	React.render(
		<NavComponent></NavComponent>,
		nav
	);



	React.render(
		<AddJobComponent></AddJobComponent>,
		employer
	);





	React.render(
		<AppComponent></AppComponent>,
		jobSearch
	);
})