(function (angular) {

	'use strict';

	angular.module('oaa.data').factory("tblCountriesService", ['TblCountry', 'spListService', function (TblCountry, spListService) {

		var svc = new spListService(TblCountry);

		return svc;

	}]);

})(angular);