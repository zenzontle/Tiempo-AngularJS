/**
 * Created by jorge hernandez on 6/22/2015.
 */
var App = window.App;

App.service('RestService', ["$log", "$resource", function($log, $resource) {
    "use strict";

    $log.log("RestService Loaded");

    this.UserProfileServiceHandler = {
        getProfile: function () {
            return $resource('../jsonTest/profileData.json', {}, {query: {method: 'GET', params: {}}});
        }
    };

    this.UserLoginHandler = {
        getLogin: function () {
            return $resource('../jsonTest/loginAccess.json', {}, {query: {method: 'GET', params: {}}});
        }
    };

    this.BlogEntries = {
        createPost: function () {

        },
        editPost: function () {

        },
        getPostList: function () {
            return $resource('../database/posts.json', {}, {query: {method: 'GET', params: {}}});
        }
    };
}]);