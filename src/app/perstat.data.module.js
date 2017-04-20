
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
