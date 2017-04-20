(function (angular) {

	'use strict';

	angular.module('perstat.data')
		.factory("serviceGradeRankService", ['ServiceGradeRank', 'spListService',
			function (ServiceGradeRank, spListService) {

				var svc = new spListService(ServiceGradeRank);

				return svc;

			}]);
			
})(angular);