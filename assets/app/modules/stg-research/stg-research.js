angular.module('StgResearchModule', ['ui.router', 'StgFilterModule'])
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('research', {
		url: '/research',
		templateUrl: 'app/modules/stg-research/views/stg-research.html'
	});
});