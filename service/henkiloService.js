angular.module('appModule').service('henkiloService', function() {
	this.henkilot = [];
	
	this.addHenkilo = function(henkilo) {
		this.henkilot.push(henkilo);
	};
	
	this.getHenkilot = function() {
		return this.henkilot.slice(0); //Palautetaan kopio taulukosta
	};
});