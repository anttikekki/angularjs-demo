angular.module('henkiloModule').controller('henkiloTableController', function($scope, henkiloService) {
	$scope.henkilot = henkiloService.getHenkilot();
	
	$scope.poista = function(id) {
		henkiloService.removeHenkilo(id);
		$scope.henkilot = henkiloService.getHenkilot();
	};
});