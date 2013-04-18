angular.module('henkiloModule').filter('henkiloFilter', function() {
	return function(henkilot, hakuparametri) {
		if(_.isUndefined(hakuparametri) || hakuparametri.length == 0) {
			return henkilot;
		}
		hakuparametri = hakuparametri.toLowerCase();
	
		var output = _.filter(henkilot, function(henkilo){ 
			return (henkilo.etunimi && henkilo.etunimi.toLowerCase().indexOf(hakuparametri) != -1) || 
				(henkilo.sukunimi && henkilo.sukunimi.toLowerCase().indexOf(hakuparametri) != -1);
		});
		return output;
	};
});