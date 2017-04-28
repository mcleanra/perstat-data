
(function () {
    'use strict';

  var app = angular.module('perstat.data', [
		'angular.sp.list'
	]);

  app.value('_', window._);
  app.value('moment', window.moment);
	
})();
