describe("henkiloController", function() {
	var $scope;
	var ctrl;

	beforeEach(module('henkiloModule'));
	
	beforeEach(inject(function($rootScope, $controller) {
		$scope = $rootScope.$new();
		ctrl = $controller('henkiloController', {
			$scope : $scope
		});
	}));

	it('muokkaa()', inject(function() {
		spyOn($scope, '$broadcast');
		
		$scope.muokkaa(12345);
		
		expect($scope.$broadcast).toHaveBeenCalledWith('muokkaaHenkiloa', 12345);
	}));
});