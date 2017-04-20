(function (angular) {

	'use strict';

	angular.module('perstat.data')
		.factory("directorateDivisionService", ['DirectorateDivision', 'spListService',
			function (DirectorateDivision, spListService) {

				var svc = new spListService(DirectorateDivision);

				return svc;

			}]);
			
})(angular);