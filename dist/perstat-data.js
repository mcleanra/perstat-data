
(function () {
    'use strict';

  var app = angular.module('perstat.data', [
		'angular.sp.list',
    'angular.sp.digest'
	])
  .config(function(){
    
    window._spFormDigestRefreshInterval = 1440000;

  })
  .run(['RequestDigestIntervalService', function(RequestDigestIntervalService){

    //this refreshes the request digest every 24 minutes, allowing us to post info to SharePoint
    RequestDigestIntervalService.startInterval('/apps');
    
  }]);

  app.value('_', window._);
  app.value('moment', window.moment);
	
})();

(function (angular) {

    'use strict';

    angular.module('perstat.data')
        .factory('DirectorateDivision', ['spListItem', function (spListItem) {

            var _siteUrl = "/apps";
            var _listName = "Directorate Division";
            var _viewFields =
                "<ViewFields>\
                    <FieldRef Name='ID' />\
                    <FieldRef Name='Title' />\
                    <FieldRef Name='Division' />\
                    <FieldRef Name='Division_x0020_Sequence' />\
                    <FieldRef Name='PerstatVerificationEnabled' />\
                </ViewFields>";

            var _spServicesJsonMapping = {
                ows_ID: { mappedName: "Id", objectType: "Number" },
                ows_Title: { mappedName: "Title", objectType: "Text" },
                ows_Division: { mappedName: "Division", objectType: "Text" },
                ows_Division_x0020_Sequence: { mappedName: "Division_x0020_Sequence", objectType: "Choice" },
                ows_PerstatVerificationEnabled: { mappedName: "PerstatVerificationEnabled", objectType: "Boolean" },
            };

            var DirectorateDivision = function (item) {
                this.Id = item.Id;
                this.Title = item.Title;
                this.Division = item.Division;
                this.Division_x0020_Sequence = item.Division_x0020_Sequence;
                this.PerstatVerificationEnabled = item.PerstatVerificationEnabled;
            };

            DirectorateDivision.prototype = new spListItem(_siteUrl, _listName, _viewFields, _spServicesJsonMapping);

            return DirectorateDivision;

        }]);

})(angular);
(function (angular) {

    'use strict';

    angular.module('perstat.data')
        .factory('PersonnelCore', ['spListItem', function (spListItem) {

            var _siteUrl = "/apps";
            var _listName = "PersonnelCore";
            var _viewFields =
                "<ViewFields>\
                    <FieldRef Name='ID' />\
                    <FieldRef Name='Title' />\
                    <FieldRef Name='Working_x0020_Directorate' />\
                    <FieldRef Name='Status' />\
                    <FieldRef Name='First_x0020_Name' />\
                    <FieldRef Name='Full_x0020_Name' />\
                    <FieldRef Name='MI' />\
                    <FieldRef Name='Directorate_x003a_Directorate' />\
                    <FieldRef Name='Service_x002f_Grade_x002f_Rank' />\
                    <FieldRef Name='Service_x002f_Grade_x002f_Rank_x' />\
                    <FieldRef Name='Service_x002f_Grade_x002f_Rank_x0' />\
                    <FieldRef Name='Service_x002f_Grade_x002f_Rank_x1' />\
                    <FieldRef Name='Directorate_x003a_Division' />\
                </ViewFields>";

            var _spServicesJsonMapping = {
                ows_ID: { mappedName: "Id", objectType: "Number" },
                ows_Title: { mappedName: "Title", objectType: "Text" },
                ows_Working_x0020_Directorate: { mappedName: "Working_x0020_Directorate", objectType: "Text" },
                ows_Status: { mappedName: "Status", objectType: "Choice" },
                ows_First_x0020_Name: { mappedName: "First_x0020_Name", objectType: "Text" },
                ows_Full_x0020_Name: { mappedName: "Full_x0020_Name", objectType: "Text" },
                ows_MI: { mappedName: "MI", objectType: "Text" },
                ows_Directorate_x003a_Directorate: { mappedName: "Directorate_x003a_Directorate", objectType: "Lookup" },
                ows_Service_x002f_Grade_x002f_Rank: { mappedName: "Service_x002f_Grade_x002f_Rank", objectType: "Lookup" },
                ows_Service_x002f_Grade_x002f_Rank_x: { mappedName: "Service_x002f_Grade_x002f_Rank_x", objectType: "Lookup" },
                ows_Service_x002f_Grade_x002f_Rank_x0: { mappedName: "Service_x002f_Grade_x002f_Rank_x0", objectType: "Lookup" },
                ows_Service_x002f_Grade_x002f_Rank_x1: { mappedName: "Service_x002f_Grade_x002f_Rank_x1", objectType: "Lookup" },
                ows_Directorate_x003a_Division: { mappedName: "Directorate_x003a_Division", objectType: "Lookup" }
            };

            var PersonnelCore = function (item) {
                this.Id = item.Id;
                this.Title = item.Title;
                this.Working_x0020_Directorate = item.Working_x0020_Directorate;
                this.Status = item.Status;
                this.First_x0020_Name = item.First_x0020_Name;
                this.Full_x0020_Name = item.Full_x0020_Name;
                this.MI = item.MI;
                this.Directorate_x003a_Directorate = item.Directorate_x003a_Directorate;
                this.Service_x002f_Grade_x002f_Rank = item.Service_x002f_Grade_x002f_Rank;
                this.Service_x002f_Grade_x002f_Rank_x = item.Service_x002f_Grade_x002f_Rank_x;
                this.Service_x002f_Grade_x002f_Rank_x0 = item.Service_x002f_Grade_x002f_Rank_x0;
                this.Service_x002f_Grade_x002f_Rank_x1 = item.Service_x002f_Grade_x002f_Rank_x1;
                this.Directorate_x003a_Division = item.Directorate_x003a_Division;
            };

            PersonnelCore.prototype = new spListItem(_siteUrl, _listName, _viewFields, _spServicesJsonMapping);

            return PersonnelCore;

        }]);

})(angular);
(function (angular) {

    'use strict';

    angular.module('perstat.data')
        .factory('PERSTAT', ['spListItem', function (spListItem) {

            var _siteUrl = "/apps";
            var _listName = "PERSTAT";
            var _viewFields =
                "<ViewFields>\
                    <FieldRef Name='ID' />\
                    <FieldRef Name='Title' />\
                    <FieldRef Name='Full_x0020_Name' />\
                    <FieldRef Name='Full_x0020_Name_x003a_Working_x0' />\
                    <FieldRef Name='Full_x0020_Name_x003a_ID' />\
                    <FieldRef Name='Start' />\
                    <FieldRef Name='End' />\
                    <FieldRef Name='Duty_x0020_Status' />\
                    <FieldRef Name='City' />\
                    <FieldRef Name='Event_x0020_Desc' />\
                    <FieldRef Name='Country' />\
                    <FieldRef Name='Country_x003a_AOR' />\
                    <FieldRef Name='Lat' />\
                    <FieldRef Name='Lon' />\
                </ViewFields>";

            var _spServicesJsonMapping = {
                ows_ID: { mappedName: "Id", objectType: "Number" },
                ows_Title: { mappedName: "Title", objectType: "Text" },
                ows_Full_x0020_Name: { mappedName: "Full_x0020_Name", objectType: "Lookup" },
                ows_Full_x0020_Name_x003a_Working_x0: { mappedName: "Full_x0020_Name_x003a_Working_x0", objectType: "Lookup" },
                ows_Full_x0020_Name_x003a_ID: { mappedName: "Full_x0020_Name_x003a_ID", objectType: "Lookup" },
                ows_Start: { mappedName: "Start", objectType: "DateTime" },
                ows_End: { mappedName: "End", objectType: "DateTime" },
                ows_Duty_x0020_Status: { mappedName: "Duty_x0020_Status", objectType: "Choice" },
                ows_City: { mappedName: "City", objectType: "Text" },
                ows_Event_x0020_Desc: { mappedName: "Event_x0020_Desc", objectType: "Text" },
                ows_Country: { mappedName: "Country", objectType: "Lookup" },
                ows_Country_x003a_AOR: { mappedName: "Country_x003a_AOR", objectType: "Lookup" },
                ows_Lat: { mappedName: "Lat", objectType: "Text" },
                ows_Lon: { mappedName: "Lon", objectType: "Text" }
            };

            var PERSTAT = function (item) {
                this.Id = item.Id;
                this.Title = item.Title;
                this.Full_x0020_Name = item.Full_x0020_Name;
                this.Full_x0020_Name_x003a_Working_x0 = item.Full_x0020_Name_x003a_Working_x0;
                this.Full_x0020_Name_x003a_ID = item.Full_x0020_Name_x003a_ID;
                this.Start = item.StartDateTime;
                this.End = item.End;
                this.Duty_x0020_Status = item.Duty_x0020_Status;
                this.City = item.City;
                this.Event_x0020_Desc = item.Event_x0020_Desc;
                this.Country = item.Country;
                this.Country_x003a_AOR = item.Country_x003a_AOR;
                this.Lat = item.Lat;
                this.Lon = item.Lon;
            };

            PERSTAT.prototype = new spListItem(_siteUrl, _listName, _viewFields, _spServicesJsonMapping);

            return PERSTAT;

        }]);

})(angular);
(function (angular) {

    'use strict';

    angular.module('perstat.data')
        .factory('PERSTATVerification', ['spListItem', function (spListItem) {

            var _siteUrl = "/apps";
            var _listName = "PERSTATVerifications";
            var _viewFields =
                "<ViewFields>\
                    <FieldRef Name='ID' />\
                    <FieldRef Name='Title' />\
                    <FieldRef Name='Day' />\
                    <FieldRef Name='Verified' />\
                </ViewFields>";

            var _spServicesJsonMapping = {
                ows_ID: { mappedName: "Id", objectType: "Number" },
                ows_Title: { mappedName: "Title", objectType: "Text" },
                ows_Day: { mappedName: "Day", objectType: "DateTime" },
                ows_Verified: { mappedName: "Verified", objectType: "Boolean" }
            };

            var PERSTATVerification = function (item) {
                this.Id = item.Id;
                this.Title = item.Title;
                this.Day = item.Day;
                this.Verified = item.Verified;
            };

            PERSTATVerification.prototype = new spListItem(_siteUrl, _listName, _viewFields, _spServicesJsonMapping);

            return PERSTATVerification;

        }]);

})(angular);
(function (angular) {

    'use strict';

    angular.module('perstat.data')
        .factory('ServiceGradeRank', ['spListItem', function (spListItem) {

            var _siteUrl = "/apps";
            var _listName = "Service Grade Rank";
            var _viewFields =
                "<ViewFields>\
                    <FieldRef Name='ID' />\
                    <FieldRef Name='Title' />\
                    <FieldRef Name='Rank' />\
                    <FieldRef Name='Service' />\
                    <FieldRef Name='Grade' />\
                </ViewFields>";

            var _spServicesJsonMapping = {
                ows_ID: { mappedName: "Id", objectType: "Number" },
                ows_Title: { mappedName: "Title", objectType: "Text" },
                ows_Rank: { mappedName: "Rank", objectType: "Text" },
                ows_Service: { mappedName: "Service", objectType: "Text" },
                ows_Grade: { mappedName: "Grade", objectType: "Text" },
            };

            var ServiceGradeRank = function (item) {
                this.Id = item.Id;
                this.Title = item.Title;
                this.Rank = item.Rank;
                this.Service = item.Service;
                this.Grade = item.Grade;
            };

            ServiceGradeRank.prototype = new spListItem(_siteUrl, _listName, _viewFields, _spServicesJsonMapping);

            return ServiceGradeRank;

        }]);

})(angular);
(function (angular) {

    'use strict';

    angular.module('oaa.data')
        .factory('TblCountry', ['spListItem', function (spListItem) {

            var _siteUrl = "/apps";
            var _listName = "Tbl_Countries";
            var _viewFields =
                "<ViewFields>\
                    <FieldRef Name='ID' />\
                    <FieldRef Name='Title' />\
                    <FieldRef Name='Capital' />\
                    <FieldRef Name='lat' />\
                    <FieldRef Name='long' />\
                    <FieldRef Name='CI_x0020_Threat_x0020_Level' />\
                </ViewFields>";

            var _spServicesJsonMapping = {
                ows_ID: { mappedName: "Id", objectType: "Number" },
                ows_Title: { mappedName: "Title", objectType: "Text" },
                ows_Capital: {mappedName: "Capital", objectType: "Text"},
                ows_lat: {mappedName: "lat", objectType: "Number"},
                ows_long: {mappedName: "long", objectType: "Number"},
                ows_CI_x0020_Threat_x0020_Level: { mappedName: "CI_x0020_Threat_x0020_Level", objectType: "Choice"}
            };

            var TblCountry = function (item) {
                this.Id = item.Id;
                this.Title = item.Title;
                this.Capital = item.Capital;
                this.lat = item.lat;
                this.long = item.long;
                this.CI_x0020_Threat_x0020_Level = item.CI_x0020_Threat_x0020_Level;
            };

            TblCountry.prototype = new spListItem(_siteUrl, _listName, _viewFields, _spServicesJsonMapping);

            return TblCountry;

        }]);

})(angular);
(function (angular) {

	'use strict';

	angular.module('perstat.data')
		.factory("directorateDivisionService", ['DirectorateDivision', 'spListService',
			function (DirectorateDivision, spListService) {

				var svc = new spListService(DirectorateDivision);

				return svc;

			}]);
			
})(angular);
(function (angular) {

	'use strict';

	angular.module('perstat.data')
		.factory("personnelCoreService", ['PersonnelCore', 'spListService',
			function (PersonnelCore, spListService) {

				var svc = new spListService(PersonnelCore);

				return svc;

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
(function (angular) {

	'use strict';

	angular.module('perstat.data')
		.factory("perstatVerificationsService", ['PERSTATVerification', 'spListService',
			function (PERSTATVerification, spListService) {

				var svc = new spListService(PERSTATVerification);

				return svc;

			}]);
			
})(angular);
(function (angular) {

	'use strict';

	angular.module('perstat.data')
		.factory("serviceGradeRankService", ['ServiceGradeRank', 'spListService',
			function (ServiceGradeRank, spListService) {

				var svc = new spListService(ServiceGradeRank);

				return svc;

			}]);
			
})(angular);
(function (angular) {

	'use strict';

	angular.module('oaa.data').factory("tblCountriesService", ['TblCountry', 'spListService', function (TblCountry, spListService) {

		var svc = new spListService(TblCountry);

		return svc;

	}]);

})(angular);