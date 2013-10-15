angular.module('henkiloModule').controller('henkiloTableController', function($scope, henkiloService) {
	$scope.henkilot = [];
	
	$scope.$on('henkilotMuuttuneet', function(event) {
		$scope.henkilot = henkiloService.getHenkilot();
	});
	
	$scope.poista = function(id) {
		henkiloService.removeHenkilo(id);
	};
});