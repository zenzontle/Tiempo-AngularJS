/**
 * Created by jorge hernandez on 6/22/2015.
 */
var App = window.App;

App.controller('BlogController', ['$scope', '$log', '$location', 'BlogService', function ($scope, $log, $location, BlogService) {
    "use strict";

    $log.log('Blog Controller has been created');

    $scope.entries = [];

    BlogService.getBlogData().$promise.then(function (data) {
        if (data.PostList && data.PostList.length > 0) {
            $scope.entries = data.PostList;
        }

    });

    $scope.onPostEdit = function (entryId) {
        $location.url('edit/' + entryId);
    };
}]);