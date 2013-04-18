angular.module('appModule').controller('henkiloController', function($scope, henkiloService) {
	$scope.henkilo = {
		etunimi: 'Matti', 
		sukunimi: 'Meikäläinen'
	};
	$scope.henkilot = henkiloService.getHenkilot();
	
	$scope.tyhjenna = function() {
		$scope.henkilo.etunimi = '';
		$scope.henkilo.sukunimi = '';
	};
	
	$scope.luoUusi = function() {
		henkiloService.addHenkilo($scope.henkilo);
		$scope.henkilo = {};
		$scope.henkilot = henkiloService.getHenkilot();
	};
	
	$scope.paivita = function() {
		henkiloService.updateHenkilo($scope.henkilo);
		$scope.henkilot = henkiloService.getHenkilot();
	};
	
	$scope.poista = function(id) {
		henkiloService.removeHenkilo(id);
		$scope.henkilot = henkiloService.getHenkilot();
	};
	
	$scope.muokkaa = function(id) {
		$scope.henkilo = henkiloService.getHenkilo(id);
	};
});