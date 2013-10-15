angular.module('henkiloModule').service('henkiloService', function($rootScope, $http) {
	this.henkilot = [];
	this.idCounter = 100;
	
	this.fetchHenkilot = function() {
		var that = this;
		$http.get('henkilot.json').success(function(data, status, headers, config) {
			_.each(data, function(henkilo, index, list) {
				henkilo.muokkausaika = new Date(henkilo.muokkausaika);
			});
			that.henkilot = data;
			$rootScope.$broadcast('henkilotMuuttuneet');
		});
	};
						
	this.addHenkilo = function(henkilo) {
		henkilo.id = this.idCounter++;
		henkilo.muokkausaika = new Date();
		this.henkilot.push(henkilo);
		$rootScope.$broadcast('henkilotMuuttuneet');
	};
	
	this.updateHenkilo = function(henkilo) {
		var result = _.find(this.henkilot, function(henk){ return henk.id == henkilo.id; });
		result.etunimi = henkilo.etunimi;
		result.sukunimi = henkilo.sukunimi;
		result.muokkausaika = new Date();
		$rootScope.$broadcast('henkilotMuuttuneet');
	};
	
	this.getHenkilot = function() {
		var result = [];
		_.each(this.henkilot, function(henkilo, index, list) {
			result.push(_.clone(henkilo));
		});
		return result;
	};
						
	this.getHenkilo = function(id) {
		var result = _.find(this.henkilot, function(henkilo){ return henkilo.id == id; });
		return _.clone(result);
	};
	
	this.removeHenkilo = function(id) {
		this.henkilot = _.reject(this.henkilot, function(henkilo){ return henkilo.id == id; });
		$rootScope.$broadcast('henkilotMuuttuneet');
	};
});