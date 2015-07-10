/**
 * Created by jorge hernandez on 7/3/2015.
 */
var App = window.App;

App.service('LoginAccess', ["$log", "RestService", "$cookies", function ($log, RestService, $cookies) {
    "use strict";

    $log.log("LoginAccess Loaded");

    this.getLoginData = function() {
        return RestService.UserLoginHandler.getLogin().query();
    };

    this.isLogged = function() {
        return $cookies.get('isLogged');
    };

    this.Login = function () {
        $cookies.put('isLogged', true);
    }

    this.Logout = function() {
        $cookies.remove("isLogged");
    };
}]);