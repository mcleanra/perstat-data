(function (angular) {

    'use strict';

    angular.module('oaa.data')
        .factory('TblCountry', ['spListItem', function (spListItem) {

            var _siteUrl = _spPageContextInfo.siteAbsoluteUrl;
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