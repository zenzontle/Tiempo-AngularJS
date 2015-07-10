/**
 * Created by jorge hernandez on 6/22/2015.
 */
var App = window.App;

App.controller('PostController', ['$scope', '$log', '$routeParams', 'BlogService', function ($scope, $log, $routeParams, BlogService) {
    "use strict";

    $log.log('PostController has been created');

    $scope.post = {
        title: '',
        content: ''
    };

    if ($routeParams.hasOwnProperty('id')) {
        BlogService.getBlogData().$promise.then(function (data) {
            var entries = data.PostList;
            for (var i = 0; i < entries.length; i++) {
                if (entries[i].id === $routeParams.id) {
                    $scope.post.title = entries[i].title;
                    $scope.post.content = entries[i].content;
                }
            }
        });
    }

    $scope.createPost = function() {
        $log.log($scope.post);
    };
}]);