(function (angular) {

	'use strict';

	angular.module('perstat.data')
		.factory("perstatVerificationsService", ['PERSTATVerification', 'spListService',
			function (PERSTATVerification, spListService) {

				var svc = new spListService(PERSTATVerification);

				return svc;

			}]);
			
})(angular);