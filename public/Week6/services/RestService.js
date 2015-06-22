/**
 * Created by jorge hernandez on 6/22/2015.
 */
var App = window.App;

App.service('RestService', ["$log", "$resource", function($log, $resource) {
    "use strict";

    $log.log("RestService Loaded")

    this.UserProfileServiceHandler = {
        getProfile: function () {
            return $resource('../jsonTest/profileData.json', {}, {query: {method: 'GET', params: {}}});
        }
    };
}]);