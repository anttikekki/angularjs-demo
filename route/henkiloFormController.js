angular.module('appModule').controller('henkiloFormController', function($scope, $routeParams, $location, henkiloService) {
	$scope.henkilo = {};
	
	if($routeParams.henkiloId != 'new') {
		$scope.henkilo = henkiloService.getHenkilo($routeParams.henkiloId);
	};
	
	$scope.tyhjenna = function() {
		$scope.henkilo.etunimi = '';
		$scope.henkilo.sukunimi = '';
	};
	
	$scope.luoUusi = function() {
		henkiloService.addHenkilo($scope.henkilo);
		$location.path('/henkilot');
	};
	
	$scope.paivita = function() {
		henkiloService.updateHenkilo($scope.henkilo);
		$location.path('/henkilot');
	};
});