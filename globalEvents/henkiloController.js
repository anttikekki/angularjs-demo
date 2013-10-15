angular.module('henkiloModule').controller('henkiloController', function($scope) {
	$scope.muokkaa = function(id) {
		$scope.$broadcast('muokkaaHenkiloa', id);
	};
});