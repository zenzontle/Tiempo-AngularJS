/**
 * Created by jorge hernandez on 6/22/2015.
 */
window.App = angular.module('App', [
    'ngRoute',
    'ngResource'
]).config([
    '$routeProvider',
    '$rootScopeProvider',
    function ($routeProvider, $rootScopeProvider) {
        "use strict";

        $rootScopeProvider.digestTtl(30);

        $routeProvider.when('/dashboard', {
            templateUrl: 'module/dashboard/Dashboard.html',
            controller: 'DashboardController'
        }).when('/chart', {
            templateUrl: 'module/chart/Chart.html',
            controller: 'ChartController'
        }).when('/profile', {
            templateUrl: 'module/profile/Profile.html',
            controller: 'ProfileController'
        }).otherwise({
            redirectTo: '/404'
        });
    }
]).run(['$rootScope', '$http', '$log', '$location', function ($rootScope, $http, $log, $location) {
    "use strict";

    $rootScope.$on('$routeChangeError', function (event, current, previous, rejection) {
        $log.log('Route change error');
    });

    $rootScope.$on('$routeChangeStart', function (event, current, previous, rejection) {
        $log.log('Route change start');
    });

    $rootScope.$on('$routeChangeSuccess', function (event, current, previous, rejection) {
        $log.log('Route change success');
    });
}]);