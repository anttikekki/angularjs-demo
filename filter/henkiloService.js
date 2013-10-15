angular.module('henkiloModule').service('henkiloService', function() {
	this.henkilot = [
		{id: 1, etunimi: 'Matti', sukunimi: 'Meikäläinen', muokkausaika: new Date()},
		{id: 2, etunimi: 'Urho', sukunimi: 'Kekkonen', muokkausaika: new Date()},
		{id: 3, etunimi: 'John', sukunimi: 'Carmack', muokkausaika: new Date()}
	];
	this.idCounter = 10;
						
	this.addHenkilo = function(henkilo) {
		henkilo.id = this.idCounter++;
		henkilo.muokkausaika = new Date();
		this.henkilot.push(henkilo);
	};
	
	this.updateHenkilo = function(henkilo) {
		var result = _.find(this.henkilot, function(henk){ return henk.id == henkilo.id; });
		result.etunimi = henkilo.etunimi;
		result.sukunimi = henkilo.sukunimi;
		result.muokkausaika = new Date();
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