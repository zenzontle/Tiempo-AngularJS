/**
 * Created by jorge hernandez on 6/22/2015.
 */
var App = window.App;

App.controller('MainController', ['$rootScope', '$scope', '$log', 'LoginAccess', function ($rootScope, $scope, $log, LoginAccess) {
    "use strict";

    $scope.isLogged = LoginAccess.isLogged();

    $log.log('MainController has been created');

    $scope.dashboardItems = [
        {url: "#blog", icon: "fa-list", title: "Blog Entries"},
        {url: "#post", icon: "fa-plus", title: "Post"}
    ];

    $rootScope.$on('isLogged', function () {
        $scope.isLogged = true;
    });
}]);