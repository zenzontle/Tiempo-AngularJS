/**
 * Created by jorge hernandez on 6/22/2015.
 */
var App = window.App;

App.controller('MainController', ['$rootScope', '$scope', '$log', '$location', 'LoginAccess', function ($rootScope, $scope, $log, $location, LoginAccess) {
    "use strict";

    $log.log('MainController has been created');

    $scope.isLogged = LoginAccess.isLogged();

    $scope.dashboardItems = [
        {url: "#blog", icon: "fa-list", title: "Blog Entries"},
        {url: "#post", icon: "fa-plus", title: "Post"}
    ];

    $scope.doLogout = function () {
        LoginAccess.Logout();
        $scope.isLogged = false;
        $location.url('/login');
    };

    $rootScope.$on('isLogged', function () {
        $scope.isLogged = true;
    });
}]);