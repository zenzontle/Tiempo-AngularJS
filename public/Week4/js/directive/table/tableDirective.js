/**
 * Created by jorge hernandez on 6/5/2015.
 */
var App = window.App;

App.directive('tableDirective', ['$log', function ($log) {
    "use strict";

    $log.log('tableDirective created');

    return {
        templateUrl: 'js/directive/table/partials/tableTemplate.html',
        scope: {
            personList: "="
        },
        restrict: 'E',
        link: function (scope) {
            scope.person = {};
            scope.chartInfo = {
                show: false,
                data: []
            };

            function initApp() {
                scope.person = {
                    name: '',
                    age: '',
                    sex: ''
                };
            }

            scope.addPerson = function() {
                scope.personList.push(scope.person);
                initApp();
            };

            scope.deletePerson = function (element) {
                scope.personList = _.filter(scope.personList, function (e) {
                    return e !== element;
                });
            };

            scope.sexClass = function (person) {
                if (person.sex === 'Male') {
                    return 'person-sex-male';
                }

                if (person.sex === 'Female') {
                    return 'person-sex-female';
                }

                if (person.sex === 'Unknown') {
                    return 'person-sex-unknown';
                }
            };

            scope.createChart = function () {
                scope.chartInfo.show = true;
                scope.chartInfo.data = scope.personList;
            };

            initApp();
        }
    };
}]);