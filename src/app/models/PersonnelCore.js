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