/**
 * Created by jorge hernandez on 7/3/2015.
 */

var App = window.App;

App.controller('LoginController', ['$rootScope', '$scope', '$log', 'LoginAccess', '$location', function ($rootScope, $scope, $log, LoginAccess, $location) {
    "use strict";

    $log.log('Login Controller has been created');

    $scope.doLogin = function () {
        if (!LoginAccess.isLogged()) {
            var userData = LoginAccess.getLoginData();
            userData.$promise.then(function (data) {
                $log.log(data);
                if (data.hasOwnProperty('valid') && data.valid) {
                    LoginAccess.setLogged(true);
                    $rootScope.$broadcast('isLogged');
                    $location.url('/blog');
                }
            });
        }
    };
}]);