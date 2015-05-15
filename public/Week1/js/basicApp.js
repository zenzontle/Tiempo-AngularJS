/**
 * Created by jorge hernandez on 5/15/2015.
 */

angular.module('MyApp', []);

myApp.controller("FirstController");

angular.module('MyApp', []).controller('FirstController', ['$scope', function ($scope) {
    $scope.test = "HOLA";

    $scope.nameList = ['Jorge', 'Pamela', 'David', 'Liliana'];

    $scope.personList = [
        {'name' : 'Jorge', 'age' : 30},
        {'name' : 'Liliana', 'age' : 40},
        {'name' : 'Pamela', 'age' : 24}
    ];

}]);