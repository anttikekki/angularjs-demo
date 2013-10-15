angular.module('appModule', ['henkiloModule']);
		
angular.module('appModule').config(function($routeProvider) {
	$routeProvider.
		when('/henkilot', {templateUrl: 'globalEvents/henkilot.html'}).
		otherwise({redirectTo: '/henkilot'});
});