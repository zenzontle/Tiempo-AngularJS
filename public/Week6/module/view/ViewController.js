/**
 * Created by jorge hernandez on 7/10/2015.
 */
var App = window.App;

App.controller('ViewController', ['$scope', '$log', '$routeParams', 'BlogService' , function ($scope, $log, $routeParams, BlogService) {
    "use strict";

    $log.log('View Controller has been created');

    $scope.post = {
        title: '',
        content: ''
    };

    BlogService.getBlogData().$promise.then(function (data) {
        if (data.PostList && data.PostList.length > 0) {
            for (var i = 0; i < data.PostList.length; i++) {
                if (data.PostList[i].id == $routeParams.id) {
                    $scope.post = data.PostList[i];
                }
            }

        }

        $log.log($scope.post);
    });

}]);