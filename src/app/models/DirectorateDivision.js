(function (angular) {

    'use strict';

    angular.module('perstat.data')
        .factory('DirectorateDivision', ['spListItem', function (spListItem) {

            var _siteUrl = _spPageContextInfo.siteAbsoluteUrl;
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