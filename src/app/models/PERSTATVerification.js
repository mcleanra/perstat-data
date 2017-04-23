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