describe("henkiloService", function() {
	beforeEach(module('henkiloModule'));
	
	it('fetchHenkilot()', inject(function($httpBackend, $rootScope, henkiloService) {
		$httpBackend.expectGET('henkilot.json').respond([{
			etunimi: "Urho", 
			sukunimi: "Kekkonen",
			muokkausaika: 1100133848137}
		]);
		
		henkiloService.fetchHenkilot();
		$httpBackend.flush();
		
		expect(henkiloService.henkilot).toEqual([{
			etunimi: "Urho", 
			sukunimi: "Kekkonen",
			muokkausaika: new Date(1100133848137)
		}]);
	}));
	
	it('addHenkilo()', inject(function($rootScope, henkiloService) {
		var henkilo = {
			etunimi: 'Matti', 
			sukunimi: 'Meikäläinen'
		};
		spyOn($rootScope, '$broadcast');
	
		henkiloService.addHenkilo(henkilo);
	
		expect($rootScope.$broadcast).toHaveBeenCalledWith('henkilotMuuttuneet');
		expect(henkiloService.henkilot).toEqual([{
			id: 100,
			etunimi: 'Matti', 
			sukunimi: 'Meikäläinen',
			muokkausaika: jasmine.any(Date)
		}]);
	}));
});