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