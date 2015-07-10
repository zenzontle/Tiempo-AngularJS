/**
 * Created by jorge hernandez on 7/10/2015.
 */

var App = window.App;

App.service('BlogService', ["$log", "RestService", function ($log, RestService) {
    "use strict";

    $log.log("BlogService Loaded");

    this.getBlogData = function() {
        return RestService.BlogEntries.getPostList().query();
    };

}]);