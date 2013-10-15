angular.module('henkiloModule').controller('henkiloFormController', function($scope, henkiloService) {
	$scope.henkilo = {};
	
	$scope.$on('muokkaaHenkiloa', function(event, id) {
		$scope.henkilo = henkiloService.getHenkilo(id);
	});
	
	$scope.tyhjenna = function() {
		$scope.henkilo.etunimi = '';
		$scope.henkilo.sukunimi = '';
	};
	
	$scope.luoUusi = function() {
		henkiloService.addHenkilo($scope.henkilo);
		$scope.henkilo = {};
	};
	
	$scope.paivita = function() {
		henkiloService.updateHenkilo($scope.henkilo);
		$scope.henkilo = {};
	};
});