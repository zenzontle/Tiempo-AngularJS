/**
 * Created by jorge hernandez on 6/22/2015.
 */
var App = window.App;

App.service('ProfileService', ["$log", "RestService", function($log, RestService) {
    "use strict";

    $log.log("ProfileService has been injected");

    this.getProfileData = function() {
        return RestService.UserProfileServiceHandler.getProfile().query();
    };
}]);