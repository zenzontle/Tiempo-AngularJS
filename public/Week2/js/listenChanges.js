/**
 * Created by jorge hernandez on 5/15/2015.
 */

angular.module('MyApp', []).controller('FirstController', ['$scope', function ($scope) {

    $scope.maxNumber = 100;
    $scope.number = 0;
    $scope.invalid = false;

    $scope.onNumberChange = function () {
        $scope.invalid = ($scope.number >= $scope.maxNumber || isNaN($scope.number));
    };

    /* Can also be done like this. Looks kind of like a horror tho
    $scope.$watch('number', function (newVal, oldVal) {
    if (newVal && newVal !== oldVal) {
    $scope.invalid = ($scope.number >= $scope.maxNumber);
    }
    });
    */
}])