/**
 * Created by jorge hernandez on 5/26/2015.
 */

var ProfileApp = window.ProfileApp;

ProfileApp.service('ProfileService', ['$log', 'RestService', function ($log, RestService) {
    "use strict";

    $log.log('Service has been injected');

    this.getProfileData = function() {
        return RestService.UserProfileServiceHandler.getProfile().query();
    };
}]);