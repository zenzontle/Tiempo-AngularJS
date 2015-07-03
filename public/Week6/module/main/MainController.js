/**
 * Created by jorge hernandez on 6/22/2015.
 */
var App = window.App;

App.controller('MainController', ['$rootScope', '$scope', '$log', 'LoginAccess', function ($rootScope, $scope, $log, LoginAccess) {
    "use strict";

    $scope.isLogged = LoginAccess.isLogged();

    $log.log('MainController has been created');

    $scope.dashboardItems = [
        {url: "#dashboard", icon: "fa-home", title: "Dashboard"},
        {url: "#chart", icon: "fa-bar-chart", title: "Chart"},
        {url: "#visualization", icon: "fa-database", title: "Data Visualization"},
        {url: "#maps", icon: "fa-map-marker", title: "Maps"},
        {url: "#profile", icon: "fa-user", title: "Profile"}
    ];

    $rootScope.$on('isLogged', function () {
        $scope.isLogged = true;
    });
}]);