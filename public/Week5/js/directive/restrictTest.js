/**
 * Created by jorge hernandez on 6/22/2015.
 */
var App = window.App;

App.directive('restrictTest', ['$log', function ($log) {
    "use strict";

    $log.log('Directive created');

    return {
        templateUrl: 'js/directive/partial/restrictTestTemplate.html',
        restrict: 'AEC',
        link: function($scope) {
            $scope.data = '';
        }
    };
}]);