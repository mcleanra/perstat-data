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