(function (angular) {

	'use strict';

	angular.module('perstat.data')
		.factory("perstatService", ['PERSTAT', 'spListService',
			function (PERSTAT, spListService) {

				var svc = new spListService(PERSTAT);

				return svc;

			}]);
			
})(angular);