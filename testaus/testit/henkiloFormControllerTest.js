describe("henkiloFormController", function() {
	var $scope;
	var ctrl;

	beforeEach(module('henkiloModule'));

	beforeEach(inject(function($rootScope, $controller) {
		$scope = $rootScope.$new();
		ctrl = $controller('henkiloFormController', {
			$scope : $scope
		});
	}));

	it('henkilön tulee olla tyhjä kun controller on luotu', inject(function() {
		expect($scope.henkilo).toEqual({});
	}));

	it('tyhjenna()', inject(function() {
		$scope.henkilo.etunimi = 'Matti';
		$scope.henkilo.sukunimi = 'Meikäläinen';
		
		$scope.tyhjenna();
	
		expect($scope.henkilo.etunimi).toEqual('');
		expect($scope.henkilo.sukunimi).toEqual('');
	}));

	it('luoUusi()', inject(function(henkiloService) {
		$scope.henkilo.etunimi = 'Matti';
		$scope.henkilo.sukunimi = 'Meikäläinen';
		
		spyOn(henkiloService, 'addHenkilo');
		
		$scope.luoUusi();
	
		expect($scope.henkilo).toEqual({});
		expect(henkiloService.addHenkilo).toHaveBeenCalledWith({ etunimi: 'Matti', sukunimi: 'Meikäläinen'});
		expect(henkiloService.addHenkilo.callCount).toBe(1);
	}));

	it('paivita()', inject(function(henkiloService) {
		$scope.henkilo.etunimi = 'Matti';
		$scope.henkilo.sukunimi = 'Meikäläinen';
		
		spyOn(henkiloService, 'updateHenkilo');
		
		$scope.paivita();
	
		expect($scope.henkilo).toEqual({});
		expect(henkiloService.updateHenkilo).toHaveBeenCalledWith({ etunimi: 'Matti', sukunimi: 'Meikäläinen'});
		expect(henkiloService.updateHenkilo.callCount).toBe(1);
	}));
});