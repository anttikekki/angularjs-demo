angular.module('appModule', ['henkiloModule']);
		
angular.module('appModule').config(function($routeProvider) {
	$routeProvider.
		when('/henkilot', {templateUrl: 'testaus/template/henkilot.html'}).
		otherwise({redirectTo: '/henkilot'});
});