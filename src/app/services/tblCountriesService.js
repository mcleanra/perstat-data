(function (angular) {

	'use strict';

	angular.module('perstat.data').factory("tblCountriesService", ['TblCountry', 'spListService', function (TblCountry, spListService) {

		var svc = new spListService(TblCountry);

		return svc;

	}]);

})(angular);