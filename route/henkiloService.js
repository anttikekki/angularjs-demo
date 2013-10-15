angular.module('appModule').service('henkiloService', function() {
	this.henkilot = [{id: 1, etunimi: 'Matti', sukunimi: 'Meikäläinen'}];
	this.idCounter = 2;
						
	this.addHenkilo = function(henkilo) {
		henkilo.id = this.idCounter++;
		this.henkilot.push(henkilo);
	};
	
	this.updateHenkilo = function(henkilo) {
		var result = _.find(this.henkilot, function(henk){ return henk.id == henkilo.id; });
		result.etunimi = henkilo.etunimi;
		result.sukunimi = henkilo.sukunimi;
	};
	
	this.getHenkilot = function() {
		return _.clone(this.henkilot);
	};
						
	this.getHenkilo = function(id) {
		var result = _.find(this.henkilot, function(henkilo){ return henkilo.id == id; });
		return _.clone(result);
	};
	
	this.removeHenkilo = function(id) {
		this.henkilot = _.reject(this.henkilot, function(henkilo){ return henkilo.id == id; });
	};
});