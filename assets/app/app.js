angular.module('strategicore',  ['ui.router', 'StgResearchModule'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: '/app/views/home.html'
	});
	$locationProvider.html5Mode(true);
});