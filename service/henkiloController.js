angular.module('appModule').controller('henkiloController', function($scope, henkiloService) {
	$scope.etunimi = 'Matti';
	$scope.sukunimi = 'Meikäläinen';
	$scope.henkilot = henkiloService.getHenkilot();
	
	$scope.tyhjenna = function() {
		$scope.etunimi = '';
		$scope.sukunimi = '';
	};
	
	$scope.luoUusi = function() {
		henkiloService.addHenkilo({
			etunimi: $scope.etunimi,
			sukunimi: $scope.sukunimi
		});
		$scope.henkilot = henkiloService.getHenkilot();
	};
});