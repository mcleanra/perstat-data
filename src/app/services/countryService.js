(function (angular) {

	'use strict';

	angular.module('oaa.data').factory("countryService", ['Country', 'spListService', function (Country, spListService) {

		var svc = new spListService(Country);

		return svc;

	}]);

})(angular);