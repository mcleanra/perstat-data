(function (angular) {

	'use strict';

	angular.module('perstat.data')
		.factory("personnelCoreService", ['PersonnelCore', 'spListService',
			function (PersonnelCore, spListService) {

				var svc = new spListService(PersonnelCore);

				return svc;

			}]);
			
})(angular);