/**
 * Created by jorge hernandez on 6/5/2015.
 */
var App = window.App;

App.controller('MainController', ['$scope', '$log', function ($scope, $log) {
    "use strict";

    $log.log('MainController has been created');

    $scope.personList = [
        {name: 'Jorge', age: 27, sex: 'Male'},
        {name: 'Alma', age: 26, sex: 'Female'},
        {name: 'Alex', age: 17, sex: 'Male'},
        {name: 'Laura', age: 16, sex: 'Female'},
        {name: 'Pato', age: 33, sex: 'Unknown'}
    ];
}]);