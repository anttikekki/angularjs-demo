angular.module('appModule').controller('ekaController', function($scope) {
	$scope.etunimi = 'Matti';
	$scope.sukunimi = 'Meikäläinen';
	
	$scope.tyhjenna = function() {
		$scope.etunimi = '';
		$scope.sukunimi = '';
	};
});