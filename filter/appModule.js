angular.module('appModule', ['henkiloModule']);
		
angular.module('appModule').config(function($routeProvider) {
	$routeProvider.
		when('/henkilot', {templateUrl: 'filter/table.html'}).
		when('/henkilot/:henkiloId', {templateUrl: 'filter/form.html'}).
		otherwise({redirectTo: '/henkilot'});
});