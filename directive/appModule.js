angular.module('appModule', ['henkiloModule']);
		
angular.module('appModule').config(function($routeProvider) {
	$routeProvider.
		when('/henkilot', {templateUrl: 'directive/henkilot.html'}).
		otherwise({redirectTo: '/henkilot'});
});