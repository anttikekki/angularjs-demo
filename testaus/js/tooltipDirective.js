angular.module('henkiloModule').directive('tooltip', function() {
	return function postLink($scope, iElement, iAttrs) {
		$(iElement).tooltip({
			title: $scope.$eval(iAttrs.tooltip),
			container: 'body',
			placement: 'right'
		});
	};
});