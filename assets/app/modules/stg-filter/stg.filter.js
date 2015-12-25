angular.module('StgFilterModule', ['ui.router'])
.directive('stgFilter', function() {
	return {
		restrict:		'EA',
		templateUrl:	'app/modules/stg-filter/views/stg-filter.html',
		replace:		true
	};
})
.service('stgFilterService', function($http) {
	
});