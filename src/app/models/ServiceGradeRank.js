(function (angular) {

    'use strict';

    angular.module('perstat.data')
        .factory('ServiceGradeRank', ['spListItem', function (spListItem) {

            var _siteUrl = _spPageContextInfo.siteAbsoluteUrl;
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