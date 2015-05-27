/**
 * Created by jorge hernandez on 5/27/2015.
 */

var ProfileApp = window.ProfileApp;

ProfileApp.service('RestService', ['$log', "$resource", function ($log, $resource) {
    "use strict";

    $log.log("RestService Loaded");

    this.UserProfileServiceHandler = {
        getProfile: function () {
            return $resource('../jsonTest/profileData.json', {}, {query: {method: 'GET', params: {}}});
        }
    };
}]);
