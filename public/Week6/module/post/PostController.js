/**
 * Created by jorge hernandez on 6/22/2015.
 */
var App = window.App;

App.controller('PostController', ['$scope', '$log', function ($scope, $log) {
    "use strict";

    $log.log('PostController has been created');

    $scope.post = {
        title: '',
        content: ''
    };

    $scope.createPost = function() {
        $log.log($scope.post);
    };
}]);