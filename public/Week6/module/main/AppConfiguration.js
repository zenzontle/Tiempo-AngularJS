/**
 * Created by jorge hernandez on 6/22/2015.
 */
window.App = angular.module('App', [
    'ngRoute',
    'ngResource',
    'ngCookies',
    'textAngular'
]).config([
    '$routeProvider',
    '$rootScopeProvider',
    function ($routeProvider, $rootScopeProvider) {
        "use strict";

        $rootScopeProvider.digestTtl(30);

        $routeProvider.when('/',
        {
            templateUrl: 'module/blog/Blog.html',
            controller: 'BlogController'
        }).when('/login',
        {
            templateUrl: 'module/login/Login.html',
            controller: 'LoginController'
        }).when('/blog', {
            templateUrl: 'module/blog/Blog.html',
            controller: 'BlogController'
        }).when('/view/:id', {
            templateUrl: 'module/view/View.html',
            controller: 'ViewController'
        }).when('/post', {
            templateUrl: 'module/post/Post.html',
            controller: 'PostController'
        }).when('/profile', {
            templateUrl: 'module/profile/Profile.html',
            controller: 'ProfileController'
        }).otherwise({
            redirectTo: '/404'
        });
    }
]).run(['$rootScope', '$http', '$log', '$location', '$cookies', function ($rootScope, $http, $log, $location, $cookies) {
    "use strict";

    $rootScope.$on('$routeChangeError', function (event, current, previous, rejection) {
        $log.log('Route change error');
    });

    $rootScope.$on('$routeChangeStart', function (event, current, previous, rejection) {
        $log.log('Route change start');
        $log.log('Validate user login access');
        var status = $cookies.get('isLogged');
        $log.log('Status', status);

        if (!status) {
            $location.url('/login');
        }
    });

    $rootScope.$on('$routeChangeSuccess', function (event, current, previous, rejection) {
        $log.log('Route change success');
    });
}]);