/**
 * Created by jorge hernandez on 6/22/2015.
 */
var App = window.App;

App.controller('BlogController', ['$scope', '$log', 'BlogService', function ($scope, $log, BlogService) {
    "use strict";

    $log.log('Blog Controller has been created');

    $scope.entries = [];

    BlogService.getBlogData().$promise.then(function (data) {
        if (data.PostList && data.PostList.length > 0) {
            $scope.entries = data.PostList;
        }

    });
}]);