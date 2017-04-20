
(function () {
    'use strict';

  var app = angular.module('perstat.data', [
		'angular.sp.list',
    'angular.sp.digest'
	])
  .config(function(){
    
    window._spFormDigestRefreshInterval = 1440000;

    window._spPageContextInfo = window._spPageContextInfo || {
      siteAbsoluteUrl: '/apps'
    };

  })
  .run(['RequestDigestIntervalService', function(RequestDigestIntervalService){
    //this refreshes the request digest every 24 minutes, allowing us to post info to SharePoint
    RequestDigestIntervalService.startInterval();
  }]);

  app.value('_', window._);
  app.value('moment', window.moment);
	
})();

(function (angular) {

    'use strict';

    angular.module('perstat.data')
        .factory('PERSTAT', ['spListItem', function (spListItem) {

            var _siteUrl = _spPageContextInfo.siteAbsoluteUrl;
            var _listName = "PERSTAT";
            var _viewFields =
                "<ViewFields>\
                    <FieldRef Name='ID' />\
                    <FieldRef Name='Title' />\
                </ViewFields>";

            var _spServicesJsonMapping = {
                ows_ID: { mappedName: "Id", objectType: "Number" },
                ows_Title: { mappedName: "Title", objectType: "Text" }
            };

            var PERSTAT = function (item) {
                this.Id = item.Id;
                this.Title = item.Title;
            };

            PERSTAT.prototype = new spListItem(_siteUrl, _listName, _viewFields, _spServicesJsonMapping);

            return PERSTAT;

        }]);

})(angular);
(function (angular) {

	'use strict';

	angular.module('perstat.data')
		.factory("perstatService", ['PERSTAT', 'spListService',
			function (PERSTAT, spListService) {

				var svc = new spListService(PERSTAT);

				return svc;

			}]);
			
})(angular);