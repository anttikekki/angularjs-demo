angular.module('appModule', []);
		
angular.module('appModule').config(function($routeProvider) {
	$routeProvider.
		when('/henkilot', {templateUrl: 'route/table.html'}).
		when('/henkilot/:henkiloId', {templateUrl: 'route/form.html'}).
		otherwise({redirectTo: '/henkilot'});
});